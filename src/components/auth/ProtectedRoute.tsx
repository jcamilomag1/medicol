import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useIsAdmin, useHasAnyRole } from "@/hooks/useUserRole";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface ProtectedRouteProps {
  children: ReactNode;
  requiresAdmin?: boolean;
}

export const ProtectedRoute = ({ children, requiresAdmin = false }: ProtectedRouteProps) => {
  const { user, isLoading: authLoading } = useAuth();
  const { isAdmin, isLoading: adminLoading } = useIsAdmin(user?.id);
  const { hasRole, isLoading: roleLoading } = useHasAnyRole(user?.id);

  if (authLoading || adminLoading || roleLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Verificando permisos...</p>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  // Si el usuario no tiene ningún rol asignado
  if (!hasRole) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-4">
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle>Cuenta Pendiente de Aprobación</CardTitle>
            <CardDescription>
              Tu cuenta ha sido creada exitosamente. 
              Un administrador debe asignarte permisos antes de que puedas acceder al panel de administración.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    );
  }

  // Si la ruta requiere ser admin y el usuario no lo es
  if (requiresAdmin && !isAdmin) {
    return <Navigate to="/admin" replace />;
  }

  return <>{children}</>;
};
