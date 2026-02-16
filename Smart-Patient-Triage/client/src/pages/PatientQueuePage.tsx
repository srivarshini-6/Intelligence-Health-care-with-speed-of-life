import { Sidebar } from "@/components/layout/Sidebar";
import { PatientQueue } from "@/components/dashboard/PatientQueue";

export default function PatientQueuePage() {
  return (
   <div className="flex min-h-screen bg-slate-50/50">
  <Sidebar />

  <main className="flex-1 ml-64 p-8 flex justify-center">
    
    <div className="w-full max-w-5xl">
      
      <h1 className="text-3xl font-heading font-bold text-slate-900 mb-6">
        Patient Queue
      </h1>

      <PatientQueue />

    </div>

  </main>
</div>

    
  );
}
