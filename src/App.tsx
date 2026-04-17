import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Homeinterior from "./pages/Home_Interior";
import Kitchen from "./pages/Kitchen";
import Commercial from "./pages/Commercial";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import StyleQuiz from "./pages/StyleQuiz";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
const queryClient = new QueryClient();
import FloatingButtons from "./components/FloatingButtons";
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/home_interior" element={<Homeinterior />} />
            <Route path="/kitchen-wardrobe" element={<Kitchen />} />
            <Route path="/commercial" element={<Commercial />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/style-quiz" element={<StyleQuiz />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
         <FloatingButtons />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;