import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;

    const rawAuth = req.headers.get('Authorization') || req.headers.get('authorization') || '';
    const isBearer = rawAuth.toLowerCase().startsWith('bearer ');
    if (!isBearer) {
      return new Response(
        JSON.stringify({ error: 'Usuario no autenticado' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }
    const token = rawAuth.slice(7).trim();

    // Cliente con privilegios de servicio para operaciones seguras
    const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
      auth: { autoRefreshToken: false, persistSession: false }
    });

    // Verificar JWT
    const { data: { user }, error: userError } = await supabaseAdmin.auth.getUser(token);
    if (userError || !user) {
      console.error('Auth error:', userError);
      return new Response(
        JSON.stringify({ error: 'Usuario no autenticado' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Verificar que el usuario sea admin
    const { data: roles, error: rolesError } = await supabaseAdmin
      .from('user_roles')
      .select('role')
      .eq('user_id', user.id);

    if (rolesError) {
      console.error('Roles error:', rolesError);
    }

    const isAdmin = roles?.some(r => r.role === 'admin');
    if (!isAdmin) {
      return new Response(
        JSON.stringify({ error: 'No tienes permisos de administrador' }),
        { status: 403, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const url = new URL(req.url);
    const pathParts = url.pathname.split('/').filter(Boolean);
    
    // GET /admin-users - Listar todos los usuarios
    if (req.method === 'GET') {
      // Obtener todos los usuarios de auth
      const { data: { users: authUsers }, error: usersError } = await supabaseAdmin.auth.admin.listUsers();
      
      if (usersError) {
        throw usersError;
      }

      // Obtener roles de todos los usuarios
      const { data: userRoles } = await supabaseAdmin
        .from('user_roles')
        .select('user_id, role');

      // Combinar datos
      const usersWithRoles = authUsers.map(authUser => ({
        id: authUser.id,
        email: authUser.email,
        created_at: authUser.created_at,
        roles: userRoles?.filter(r => r.user_id === authUser.id).map(r => r.role) || []
      }));

      return new Response(
        JSON.stringify({ users: usersWithRoles }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // POST /admin-users - Crear nuevo usuario
    if (req.method === 'POST') {
      const { email, password, role } = await req.json();

      if (!email || !password || !role) {
        return new Response(
          JSON.stringify({ error: 'Email, password y role son requeridos' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      if (!['admin', 'editor'].includes(role)) {
        return new Response(
          JSON.stringify({ error: 'Role debe ser admin o editor' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      if (password.length < 6) {
        return new Response(
          JSON.stringify({ error: 'La contraseña debe tener al menos 6 caracteres' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      // Crear usuario en auth
      const { data: newUser, error: createError } = await supabaseAdmin.auth.admin.createUser({
        email,
        password,
        email_confirm: true // Confirmar email automáticamente
      });

      if (createError) {
        console.error('Error creating user:', createError);
        
        // Manejar errores específicos de creación de usuario
        let errorMessage = 'Error al crear usuario';
        let statusCode = 500;
        
        if (createError.message.includes('already been registered')) {
          errorMessage = 'Este email ya está registrado';
          statusCode = 409; // Conflict
        } else if (createError.message.includes('email')) {
          errorMessage = 'Email inválido';
          statusCode = 400;
        } else if (createError.message.includes('password')) {
          errorMessage = 'Contraseña inválida';
          statusCode = 400;
        }
        
        return new Response(
          JSON.stringify({ error: errorMessage }),
          { status: statusCode, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      // Asignar rol
      const { error: roleError } = await supabaseAdmin
        .from('user_roles')
        .insert({
          user_id: newUser.user.id,
          role
        });

      if (roleError) {
        console.error('Error assigning role:', roleError);
        // Si falla asignar rol, eliminar el usuario creado
        await supabaseAdmin.auth.admin.deleteUser(newUser.user.id);
        throw roleError;
      }

      return new Response(
        JSON.stringify({ 
          user: {
            id: newUser.user.id,
            email: newUser.user.email,
            created_at: newUser.user.created_at,
            roles: [role]
          }
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // PATCH /admin-users - Actualizar usuario
    if (req.method === 'PATCH') {
      const { userId, password, role } = await req.json();
      console.log('Updating user:', userId, 'password:', !!password, 'role:', role);

      if (!userId) {
        return new Response(
          JSON.stringify({ error: 'User ID es requerido' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      // Actualizar contraseña si se proporciona
      if (password) {
        if (password.length < 6) {
          return new Response(
            JSON.stringify({ error: 'La contraseña debe tener al menos 6 caracteres' }),
            { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }

        const { error: passwordError } = await supabaseAdmin.auth.admin.updateUserById(
          userId,
          { password }
        );

        if (passwordError) {
          console.error('Error updating password:', passwordError);
          throw passwordError;
        }
      }

      // Actualizar rol si se proporciona
      if (role) {
        if (!['admin', 'editor'].includes(role)) {
          return new Response(
            JSON.stringify({ error: 'Role debe ser admin o editor' }),
            { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }

        // Primero eliminar roles existentes
        await supabaseAdmin
          .from('user_roles')
          .delete()
          .eq('user_id', userId);

        // Insertar nuevo rol
        const { error: roleError } = await supabaseAdmin
          .from('user_roles')
          .insert({
            user_id: userId,
            role
          });

        if (roleError) {
          console.error('Error updating role:', roleError);
          throw roleError;
        }
      }

      return new Response(
        JSON.stringify({ success: true }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // DELETE /admin-users - Eliminar usuario
    if (req.method === 'DELETE') {
      const { userId } = await req.json();
      console.log('Deleting user:', userId);

      if (!userId) {
        return new Response(
          JSON.stringify({ error: 'User ID es requerido' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      // No permitir que un admin se elimine a sí mismo
      if (userId === user.id) {
        return new Response(
          JSON.stringify({ error: 'No puedes eliminar tu propia cuenta' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      // Eliminar usuario (cascade eliminará roles automáticamente)
      const { error: deleteError } = await supabaseAdmin.auth.admin.deleteUser(userId);

      if (deleteError) {
        console.error('Error deleting user:', deleteError);
        throw deleteError;
      }

      return new Response(
        JSON.stringify({ success: true }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ error: 'Método no permitido' }),
      { status: 405, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in admin-users function:', error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Error desconocido' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
