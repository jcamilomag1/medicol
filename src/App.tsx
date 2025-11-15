import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from 'react';
import { AuthProvider } from '@/contexts/AuthContext';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';

// Lazy loading de todas las páginas
const Index = lazy(() => import('./pages/Index'));
const ExperiencePage = lazy(() => import('./pages/ExperiencePage'));
const TeamPage = lazy(() => import('./pages/TeamPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const PlasticSurgeryPage = lazy(() => import('./pages/PlasticSurgeryPage'));
const StemCellsPage = lazy(() => import('./pages/StemCellsPage'));
const DentalPage = lazy(() => import('./pages/DentalPage'));
const DiagnosticsPage = lazy(() => import('./pages/DiagnosticsPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'));
const AuthPage = lazy(() => import('./pages/AuthPage'));
const DashboardPage = lazy(() => import('./pages/admin/DashboardPage'));
const NotFound = lazy(() => import('./pages/NotFound'));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary-dark to-primary">
              <div className="text-center">
                <div className="relative">
                  <div className="w-20 h-20 border-4 border-accent/30 rounded-full animate-spin border-t-accent mx-auto"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-12 h-12 border-4 border-white/30 rounded-full animate-spin border-t-white"></div>
                  </div>
                </div>
                <p className="mt-6 text-white text-lg font-medium">Cargando...</p>
              </div>
            </div>
          }>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/servicios/cirugia-plastica" element={<PlasticSurgeryPage />} />
              <Route path="/servicios/celulas-madre" element={<StemCellsPage />} />
              <Route path="/servicios/procedimientos-dentales" element={<DentalPage />} />
              <Route path="/servicios/diagnosticos" element={<DiagnosticsPage />} />
              <Route path="/experiencia" element={<ExperiencePage />} />
              <Route path="/equipo" element={<TeamPage />} />
              <Route path="/contacto" element={<ContactPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
              <Route path="/auth" element={<AuthPage />} />
              <Route path="/admin" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
