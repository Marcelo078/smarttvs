import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Sobre from "./pages/Sobre";
import Privacidade from "./pages/Privacidade";
import Termos from "./pages/Termos";
import Transparencia from "./pages/Transparencia";
import Disclaimer from "./pages/Disclaimer";
import NotFound from "./pages/NotFound";
import TvHisense40A4N from "./pages/artigos/TvHisense40A4N";
import Hisense from "./pages/marcas/Hisense";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/privacidade" element={<Privacidade />} />
          <Route path="/termos" element={<Termos />} />
          <Route path="/transparencia" element={<Transparencia />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/artigos/tv-hisense-40a4n-e-boa" element={<TvHisense40A4N />} />
          <Route path="/marcas/hisense" element={<Hisense />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
