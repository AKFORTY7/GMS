import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import Index from "./pages/Index";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import IssueGauge from "./pages/IssueGauge";
import ReceiveGauge from "./pages/ReceiveGauge";
import RepairGauge from "./pages/RepairGauge";
import GaugeList from "./pages/GaugeList";
import MissingGauges from "./pages/MissingGauges";
import Settings from "./pages/Settings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Index />
                </ProtectedRoute>
              }
            />
            <Route
              path="/issue"
              element={
                <ProtectedRoute>
                  <IssueGauge />
                </ProtectedRoute>
              }
            />
            <Route
              path="/receive"
              element={
                <ProtectedRoute>
                  <ReceiveGauge />
                </ProtectedRoute>
              }
            />
            <Route
              path="/repair"
              element={
                <ProtectedRoute>
                  <RepairGauge />
                </ProtectedRoute>
              }
            />
            <Route
              path="/gauges"
              element={
                <ProtectedRoute>
                  <GaugeList />
                </ProtectedRoute>
              }
            />
            <Route
              path="/missing-gauges"
              element={
                <ProtectedRoute>
                  <MissingGauges />
                </ProtectedRoute>
              }
            />
            <Route
              path="/settings"
              element={
                <ProtectedRoute>
                  <Settings />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </TooltipProvider>
      </AuthProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;