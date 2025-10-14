import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ServicesPage from "./pages/ServicesPage";
import ExperiencePage from "./pages/ExperiencePage";
import TeamPage from "./pages/TeamPage";
import ContactPage from "./pages/ContactPage";
import PlasticSurgeryPage from "./pages/PlasticSurgeryPage";
import StemCellsPage from "./pages/StemCellsPage";
import DentalPage from "./pages/DentalPage";
import DiagnosticsPage from "./pages/DiagnosticsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/servicios" element={<ServicesPage />} />
          <Route path="/servicios/cirugia-plastica" element={<PlasticSurgeryPage />} />
          <Route path="/servicios/celulas-madre" element={<StemCellsPage />} />
          <Route path="/servicios/procedimientos-dentales" element={<DentalPage />} />
          <Route path="/servicios/diagnosticos" element={<DiagnosticsPage />} />
          <Route path="/experiencia" element={<ExperiencePage />} />
          <Route path="/equipo" element={<TeamPage />} />
          <Route path="/contacto" element={<ContactPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
