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
import TvHisenseA6H from "./pages/artigos/TvHisenseA6H";
import TvPhilcoRoku43 from "./pages/artigos/TvPhilcoRoku43";
import TvBritania50 from "./pages/artigos/TvBritania50";
import TvToshibaQLED from "./pages/artigos/TvToshibaQLED";
import TvAOCRoku32 from "./pages/artigos/TvAOCRoku32";
import Hisense from "./pages/marcas/Hisense";
import Philco from "./pages/marcas/Philco";
import Britania from "./pages/marcas/Britania";
import Toshiba from "./pages/marcas/Toshiba";
import AOC from "./pages/marcas/AOC";
import Aiwa from "./pages/marcas/Aiwa";
import Multilaser from "./pages/marcas/Multilaser";
import HQ from "./pages/marcas/HQ";

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
          <Route path="/artigos/tv-hisense-a6h-e-boa" element={<TvHisenseA6H />} />
          <Route path="/artigos/tv-philco-roku-43-e-boa" element={<TvPhilcoRoku43 />} />
          <Route path="/artigos/tv-britania-50-e-boa" element={<TvBritania50 />} />
          <Route path="/artigos/tv-toshiba-qled-e-boa" element={<TvToshibaQLED />} />
          <Route path="/artigos/tv-aoc-roku-32-e-boa" element={<TvAOCRoku32 />} />
          <Route path="/marcas/hisense" element={<Hisense />} />
          <Route path="/marca/hisense" element={<Hisense />} />
          <Route path="/marcas/philco" element={<Philco />} />
          <Route path="/marca/philco" element={<Philco />} />
          <Route path="/marcas/britania" element={<Britania />} />
          <Route path="/marca/britania" element={<Britania />} />
          <Route path="/marcas/toshiba" element={<Toshiba />} />
          <Route path="/marca/toshiba" element={<Toshiba />} />
          <Route path="/marcas/aoc" element={<AOC />} />
          <Route path="/marca/aoc" element={<AOC />} />
          <Route path="/marcas/aiwa" element={<Aiwa />} />
          <Route path="/marca/aiwa" element={<Aiwa />} />
          <Route path="/marcas/multilaser" element={<Multilaser />} />
          <Route path="/marca/multilaser" element={<Multilaser />} />
          <Route path="/marcas/hq" element={<HQ />} />
          <Route path="/marca/hq" element={<HQ />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
