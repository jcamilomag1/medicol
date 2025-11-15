import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export interface User {
  id: string;
  email: string;
  created_at: string;
  roles: string[];
}

const getAuthHeader = async () => {
  const { data: { session } } = await supabase.auth.getSession();
  return session?.access_token ? `Bearer ${session.access_token}` : '';
};

export const useUsers = () => {
  return useQuery({
    queryKey: ["admin-users"],
    queryFn: async () => {
      const authHeader = await getAuthHeader();
      
      const { data, error } = await supabase.functions.invoke('admin-users', {
        method: 'GET',
        headers: {
          Authorization: authHeader,
        },
      });

      if (error) throw error;
      return data.users as User[];
    },
  });
};

export const useCreateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (userData: { email: string; password: string; role: string }) => {
      const authHeader = await getAuthHeader();

      const { data, error } = await supabase.functions.invoke('admin-users', {
        method: 'POST',
        headers: {
          Authorization: authHeader,
        },
        body: userData,
      });

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-users"] });
      toast.success("Usuario creado exitosamente");
    },
    onError: (error: any) => {
      toast.error(error.message || "Error al crear usuario");
    },
  });
};

export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ userId, ...userData }: { userId: string; password?: string; role?: string }) => {
      const authHeader = await getAuthHeader();

      const { data, error } = await supabase.functions.invoke(`admin-users/${userId}`, {
        method: 'PATCH',
        headers: {
          Authorization: authHeader,
        },
        body: userData,
      });

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-users"] });
      toast.success("Usuario actualizado exitosamente");
    },
    onError: (error: any) => {
      toast.error(error.message || "Error al actualizar usuario");
    },
  });
};

export const useDeleteUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (userId: string) => {
      const authHeader = await getAuthHeader();

      const { data, error } = await supabase.functions.invoke(`admin-users/${userId}`, {
        method: 'DELETE',
        headers: {
          Authorization: authHeader,
        },
      });

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-users"] });
      toast.success("Usuario eliminado exitosamente");
    },
    onError: (error: any) => {
      toast.error(error.message || "Error al eliminar usuario");
    },
  });
};
