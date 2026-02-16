import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import PatientPortal from "@/pages/PatientPortal";
import DoctorPortal from "@/pages/DoctorPortal";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/patient" component={PatientPortal} />
      <Route path="/doctor/dashboard" component={DoctorPortal} />
      {/* Redirect all other doctor routes to dashboard for mockup */}
      <Route path="/doctor/:any*" component={DoctorPortal} />
      
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
