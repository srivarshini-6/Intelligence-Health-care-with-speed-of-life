import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Stethoscope, User, ArrowRight, Activity } from "lucide-react";
import heroBg from "@/assets/medical-hero-bg.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Navigation */}
      <nav className="w-full border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-primary p-1.5 rounded-lg">
              <Activity className="h-6 w-6 text-white" />
            </div>
            <span className="font-heading font-bold text-xl tracking-tight text-primary">MediTriage AI</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">About</a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Services</a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Hospitals</a>
            <Button variant="outline" size="sm">Emergency Contact</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex-1 relative flex items-center justify-center overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="Medical Background" className="w-full h-full object-cover opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10 py-12 md:py-24">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              AI-Powered Real-Time Triage System
            </div>
            
            <h1 className="text-4xl md:text-6xl font-heading font-extrabold tracking-tight text-slate-900 leading-[1.1] animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
              Intelligent Healthcare <br />
              <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-cyan-500">
                At The Speed of Life
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
              Our advanced AI instantly assesses symptoms, prioritizes critical cases, and routes patients to the right specialists—saving time when it matters most.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
              <Link href="/patient">
                <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg gap-2 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all hover:-translate-y-1">
                  <User className="h-5 w-5" />
                  I am a Patient
                  <ArrowRight className="h-4 w-4 opacity-50" />
                </Button>
              </Link>
              
              <Link href="/doctor/dashboard">
                <Button variant="outline" size="lg" className="w-full sm:w-auto h-14 px-8 text-lg gap-2 border-primary/20 text-primary hover:bg-primary/5 hover:border-primary/50 transition-all hover:-translate-y-1">
                  <Stethoscope className="h-5 w-5" />
                  I am a Doctor
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="bg-white py-24 border-t">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary/20 transition-colors">
              <div className="h-12 w-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Activity className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold font-heading mb-2">Instant Triage</h3>
              <p className="text-muted-foreground">AI analysis of symptoms to classify risk levels (Low, Medium, Critical) in seconds.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary/20 transition-colors">
              <div className="h-12 w-12 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
                <Stethoscope className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold font-heading mb-2">Smart Routing</h3>
              <p className="text-muted-foreground">Automatically assigns patients to the correct department and best available specialist.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary/20 transition-colors">
              <div className="h-12 w-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                <Activity className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold font-heading mb-2">Live Monitoring</h3>
              <p className="text-muted-foreground">Real-time vitals tracking and alerts for deteriorating patient conditions.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
