import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import UserDashboard from "./pages/UserDashboard";
import PoliceDashboard from "./pages/PoliceDashboard";
import ReportCase from "./pages/ReportCase";
import TrackCase from "./pages/TrackCase";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Support from "./pages/Support";
import SafetyResources from "./pages/SafetyResources";
import NotFound from "./pages/NotFound";
import OfficialProfile from "./pages/OfficialProfile";
import CaseReport from "./pages/CaseReport";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="/police-dashboard" element={<PoliceDashboard />} />
          <Route path="/report-case" element={<ReportCase />} />
          <Route path="/track-case" element={<TrackCase />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/support" element={<Support />} />
          <Route path="/safety-resources" element={<SafetyResources />} />
          <Route path="/official-profile" element={<OfficialProfile />} />
          <Route path="/case-report" element={<CaseReport />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
