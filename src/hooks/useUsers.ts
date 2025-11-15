import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export interface User {
  id: string;
  email: string;
  created_at: string;
  roles: string[];
}

export const useUsers = () => {
  return useQuery({
    queryKey: ["admin-users"],
    queryFn: async () => {
      const { data, error } = await supabase.functions.invoke('admin-users', {
        method: 'GET',
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
      const { data, error } = await supabase.functions.invoke('admin-users', {
        method: 'POST',
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
      const { data, error } = await supabase.functions.invoke(`admin-users/${userId}`, {
        method: 'PATCH',
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
      const { data, error } = await supabase.functions.invoke(`admin-users/${userId}`, {
        method: 'DELETE',
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
