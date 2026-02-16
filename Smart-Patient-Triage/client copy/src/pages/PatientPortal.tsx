import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowLeft, AlertTriangle, CheckCircle2, Hospital, Stethoscope, Clock, ShieldCheck } from "lucide-react";
import { SymptomForm } from "@/components/triage/SymptomForm";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PatientPortal() {
  const [step, setStep] = useState<"form" | "result">("form");

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Top Bar */}
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="font-heading font-semibold text-lg">Patient Triage Portal</h1>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">System Online</span>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          {step === "form" ? (
            <motion.div 
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-4xl mx-auto"
            >
              <div className="mb-8 text-center">
                <h2 className="text-3xl font-heading font-bold text-slate-900 mb-2">How are you feeling today?</h2>
                <p className="text-muted-foreground">Our AI assistant will analyze your symptoms to guide you to the right care.</p>
              </div>
              <SymptomForm onComplete={() => setStep("result")} />
            </motion.div>
          ) : (
            <motion.div 
              key="result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-3xl mx-auto"
            >
              <div className="grid gap-6">
                {/* AI Risk Assessment Card */}
                <Card className="border-l-4 border-l-orange-500 shadow-lg">
                  <CardHeader className="bg-orange-50/50 pb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="bg-orange-100 p-2 rounded-full">
                          <AlertTriangle className="h-6 w-6 text-orange-600" />
                        </div>
                        <div>
                          <CardTitle className="text-orange-700">High Risk Detected</CardTitle>
                          <p className="text-sm text-orange-600/80">Confidence Score: 94.5%</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Status</p>
                        <p className="text-xl font-bold text-primary">Priority Queue</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <Stethoscope className="h-4 w-4 text-primary" />
                          Recommended Department
                        </h4>
                        <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                          <p className="text-lg font-bold text-primary">Cardiology</p>
                          <p className="text-sm text-muted-foreground">Dr. Sarah Johnson (Available)</p>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <Clock className="h-4 w-4 text-primary" />
                          Estimated Wait Time
                        </h4>
                        <div className="p-4 bg-green-50 rounded-lg border border-green-100">
                          <p className="text-lg font-bold text-green-700">~15 Minutes</p>
                          <p className="text-sm text-green-600/80">You have been prioritized.</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 space-y-4">
                      <h4 className="font-semibold border-b pb-2">AI Analysis & Reasoning</h4>
                      <ul className="space-y-2 text-sm text-slate-600">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Symptoms match <strong>Angina Pectoris</strong> (Chest pain profile).</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Patient age (45) and gender indicate higher cardiovascular risk factor.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Reported pain level (7/10) requires immediate attention.</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                  <CardFooter className="bg-slate-50 border-t flex justify-between items-center">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <ShieldCheck className="h-3 w-3" />
                      Secure Blockchain Record #8X92-22
                    </div>
                    <Button onClick={() => window.location.reload()}>Start New Triage</Button>
                  </CardFooter>
                </Card>

                {/* Next Steps */}
                <div className="grid md:grid-cols-2 gap-4">
                   <Card>
                     <CardHeader>
                       <CardTitle className="text-base">What to do next?</CardTitle>
                     </CardHeader>
                     <CardContent className="text-sm space-y-2">
                       <p>1. Proceed to <strong>Room 304 (Cardiology Wing)</strong>.</p>
                       <p>2. Keep your digital ID <strong>P-1024</strong> ready.</p>
                       <p>3. Do not eat or drink anything until examined.</p>
                     </CardContent>
                   </Card>
                   
                   <Card>
                      <CardHeader>
                        <CardTitle className="text-base">Emergency Contacts</CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm space-y-2">
                        <p>If you feel faint or lose consciousness:</p>
                        <Button variant="destructive" className="w-full mt-2">Call Emergency Nurse</Button>
                      </CardContent>
                   </Card>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
