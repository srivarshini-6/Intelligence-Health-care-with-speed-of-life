import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowLeft, AlertTriangle, CheckCircle2, Hospital, Stethoscope, Clock, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SymptomForm } from "@/components/triage/SymptomForm";

export default function PatientPortal() {

  const [step, setStep] = useState<"form" | "result">("form");
  const [showDoctors, setShowDoctors] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<any>(null);
const [appointmentDate, setAppointmentDate] = useState("");


  const recommendedDoctors = [
  {
    name: "Dr. Jeswin Doss",
    qualification: "MD Cardiology",
    experience: "12 Years Experience",
  },
  {
    name: "Dr. Robin Britto",
    qualification: "MBBS, DM Neurology",
    experience: "9 Years Experience",
  },
  {
    name: "Dr. Sreekanth",
    qualification: "MD General Medicine",
    experience: "7 Years Experience",
  },
];


  return (
    <div className="min-h-screen bg-slate-50">

      {/* Top Bar */}
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="font-semibold text-lg">Patient Triage Portal</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <AnimatePresence mode="wait">

          {step === "form" ? (
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="max-w-4xl mx-auto"
            >
              <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold mb-2">
                  How are you feeling today?
                </h2>
                <p className="text-muted-foreground">
                  Our AI assistant will analyze your symptoms.
                </p>
              </div>

              {/* ✅ THIS loads your FULL SymptomForm */}
              <SymptomForm onComplete={() => setStep("result")} />
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="max-w-3xl mx-auto"
            >
             <Card>
  <CardHeader>
    <CardTitle className="flex items-center gap-2">
      <AlertTriangle className="h-5 w-5 text-red-500" />
      High Risk Detected
    </CardTitle>
  </CardHeader>

  <CardContent className="space-y-6">
    <p>AI prioritized your case and recommends immediate consultation.</p>

    {/* ⭐ Smart Doctor Recommendation */}
    <div className="space-y-4">
      <h3 className="font-semibold text-lg text-primary">
        Recommended Doctors
      </h3>

      {recommendedDoctors.map((doc, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.15 }}
          className="p-4 rounded-xl border bg-primary/5 hover:shadow-md transition-all"
        >
          <p className="font-semibold">{doc.name}</p>
          <p className="text-sm text-muted-foreground">
            {doc.qualification}
          </p>
          <p className="text-sm text-muted-foreground">
            {doc.experience}
          </p>
        </motion.div>
      ))}
    </div>
  </CardContent>

  <CardFooter>
    <Button onClick={() => setShowDoctors(true)}>
  Select Doctor
</Button>

  </CardFooter>
</Card>

            </motion.div>
          )}

        </AnimatePresence>
        {/* ================= POPUP DOCTORS ================= */}
<AnimatePresence>
  {showDoctors && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
    >
      <motion.div
        initial={{ scale: 0.8, y: 40 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8 }}
        className="bg-white rounded-xl p-8 w-full max-w-md space-y-4 shadow-xl"
      >
        <h2 className="text-xl font-semibold text-primary">
          Recommended Doctors
        </h2>

        {recommendedDoctors.map((doc, i) => (
          

          <div
            key={i}
            onClick={() => setSelectedDoctor(doc)}
  className={`p-3 rounded-lg border cursor-pointer transition-all
    ${selectedDoctor?.name === doc.name
      ? "bg-primary/10 border-primary"
      : "bg-primary/5"}
  `}
>
          
            <p className="font-semibold">{doc.name}</p>
            <p className="text-sm text-muted-foreground">
              {doc.qualification}
            </p>
            <p className="text-sm text-muted-foreground">
              {doc.experience}
            </p>
          </div>
          
        ))}
        {selectedDoctor && (
  <div className="space-y-2">
    <p className="font-medium">Select Appointment Date</p>

    <input
      type="date"
      value={appointmentDate}
      onChange={(e) => setAppointmentDate(e.target.value)}
      className="w-full border rounded-md p-2"
    />
  </div>
)}


        <Button
  className="w-full"
  disabled={!selectedDoctor || !appointmentDate}
  onClick={() => {
    alert(
      `Appointment booked with ${selectedDoctor.name} on ${appointmentDate}`
    );

    setShowDoctors(false);
    setStep("form");
    setSelectedDoctor(null);
    setAppointmentDate("");
  }}
>
  Book Appointment
</Button>

      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

      </main>
    </div>
  );
}
