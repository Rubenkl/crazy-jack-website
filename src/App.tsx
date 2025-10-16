import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { isSupportedLanguage } from "@/hooks/useLanguage";

const LanguageAwareIndex = () => {
  const params = useParams();
  const lang = params.lang ?? null;
  const remainder = params["*"] ?? "";

  if (!lang || !isSupportedLanguage(lang) || remainder) {
    return <NotFound />;
  }

  return <Index />;
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={(import.meta.env.BASE_URL ?? "/").replace(/\/+$/, "") || undefined}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path=":lang/*" element={<LanguageAwareIndex />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
