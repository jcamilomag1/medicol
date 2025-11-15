import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export type AppRole = 'admin' | 'editor';

interface UserRole {
  role: AppRole;
}

export const useUserRole = (userId: string | undefined) => {
  return useQuery({
    queryKey: ["user-roles", userId],
    queryFn: async () => {
      if (!userId) return [];
      
      const { data, error } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", userId);

      if (error) throw error;
      return (data as UserRole[]) || [];
    },
    enabled: !!userId,
  });
};

export const useIsAdmin = (userId: string | undefined) => {
  const { data: roles, isLoading } = useUserRole(userId);
  const isAdmin = roles?.some(r => r.role === 'admin') || false;
  
  return { isAdmin, isLoading };
};

export const useIsEditor = (userId: string | undefined) => {
  const { data: roles, isLoading } = useUserRole(userId);
  const isEditor = roles?.some(r => r.role === 'editor') || false;
  
  return { isEditor, isLoading };
};

export const useHasAnyRole = (userId: string | undefined) => {
  const { data: roles, isLoading } = useUserRole(userId);
  const hasRole = (roles && roles.length > 0) || false;
  
  return { hasRole, isLoading };
};

export const useCanEditPosts = (userId: string | undefined) => {
  const { data: roles, isLoading } = useUserRole(userId);
  const canEdit = roles?.some(r => ['admin', 'editor'].includes(r.role)) || false;
  
  return { canEdit, isLoading };
};
