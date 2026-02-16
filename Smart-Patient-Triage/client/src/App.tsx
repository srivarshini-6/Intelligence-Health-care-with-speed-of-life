import { Switch, Route } from "wouter";

import EmergencyPortal from "@/pages/EmergencyPortal";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import PatientPortal from "@/pages/PatientPortal";
import DoctorPortal from "@/pages/DoctorPortal";
import PatientQueuePage from "@/pages/PatientQueuePage";

import About from "./pages/About";
import Services from "./pages/Services";
import Navbar from "@/components/layout/Navbar";
import SchedulePage from "@/pages/SchedulePage";


function AppRouter() {
  return (
    <>
      {/* Top Navigation */}
      <Navbar />

      {/* Routes */}
      <Switch>
        {/* Public Pages */}
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/emergency" component={EmergencyPortal} />

        {/* Patient Portal */}
        <Route path="/patient" component={PatientPortal} />

        {/* Doctor Pages */}
        <Route path="/doctor/dashboard" component={DoctorPortal} />
        <Route path="/doctor/queue" component={PatientQueuePage} />
        <Route path="/doctor/schedule" component={SchedulePage} />


        {/* 404 */}
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <AppRouter />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
