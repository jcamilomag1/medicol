import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { LogOut, LayoutDashboard, Users, Image } from "lucide-react";
import { useIsAdmin } from "@/hooks/useUserRole";

interface AdminLayoutProps {
  children: ReactNode;
}

export const AdminLayout = ({ children }: AdminLayoutProps) => {
  const { user, signOut } = useAuth();
  const { isAdmin } = useIsAdmin(user?.id);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <Link to="/admin" className="text-xl font-bold text-foreground">
              Admin Panel
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">{user?.email}</span>
            <Button variant="outline" size="sm" onClick={signOut}>
              <LogOut className="h-4 w-4 mr-2" />
              Salir
            </Button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 min-h-[calc(100vh-73px)] border-r bg-card p-4">
          <nav className="space-y-2">
            <Link to="/admin">
              <Button 
                variant={location.pathname === '/admin' ? 'default' : 'ghost'} 
                className="w-full justify-start"
              >
                <LayoutDashboard className="h-4 w-4 mr-2" />
                Blog
              </Button>
            </Link>
            {isAdmin && (
              <>
                <Link to="/admin/users">
                  <Button 
                    variant={location.pathname === '/admin/users' ? 'default' : 'ghost'} 
                    className="w-full justify-start"
                  >
                    <Users className="h-4 w-4 mr-2" />
                    Usuarios
                  </Button>
                </Link>
                <Link to="/admin/image-generator">
                  <Button 
                    variant={location.pathname === '/admin/image-generator' ? 'default' : 'ghost'} 
                    className="w-full justify-start"
                  >
                    <Image className="h-4 w-4 mr-2" />
                    Generador de Imágenes
                  </Button>
                </Link>
              </>
            )}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
};
