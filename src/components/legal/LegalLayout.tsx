import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

interface LegalLayoutProps {
  children: ReactNode;
  title: string;
  lastUpdated: string;
  breadcrumb: string;
}

export const LegalLayout = ({ children, title, lastUpdated, breadcrumb }: LegalLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumbs */}
      <div className="border-b border-border/40">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">{breadcrumb}</span>
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="mb-12 border-b border-border/40 pb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {title}
            </h1>
            <p className="text-muted-foreground">
              Last Updated: {lastUpdated}
            </p>
          </header>

          {/* Legal Content */}
          <div className="legal-content prose prose-slate max-w-none">
            {children}
          </div>

          {/* Footer Contact */}
          <div className="mt-16 pt-8 border-t border-border/40">
            <p className="text-sm text-muted-foreground">
              If you have any questions about this document, please contact us at{" "}
              <a href="mailto:info@medicol.me" className="text-primary hover:underline">
                info@medicol.me
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
