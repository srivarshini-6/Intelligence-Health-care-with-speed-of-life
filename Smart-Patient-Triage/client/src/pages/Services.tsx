import {
  Heart,
  Brain,
  Bone,
  Eye,
  Baby,
  Activity,
  Pill,
  Microscope
} from "lucide-react";

export default function Services() {
  return (
    <div className="min-h-screen bg-background flex justify-center py-16 px-4">
      <div className="max-w-6xl w-full space-y-12">

        {/* TITLE */}
        <div className="text-center space-y-3">
          <h1 className="text-4xl font-bold text-primary">
            Our Services
          </h1>
          <p className="text-black/70 max-w-2xl mx-auto">
            Comprehensive healthcare services delivered by experienced medical
            professionals using state-of-the-art technology
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Cardiology */}
          <div className="bg-primary/5 border border-primary/10 rounded-xl shadow-md p-6
                          transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <Heart className="text-red-400 mb-4" />
            <h3 className="font-semibold text-black">Cardiology</h3>
            <p className="text-black/70 text-sm">
              Expert care for heart conditions and cardiovascular health
            </p>
          </div>

          {/* Neurology */}
          <div className="bg-primary/5 border border-primary/10 rounded-xl shadow-md p-6
                          transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <Brain className="text-purple-400 mb-4" />
            <h3 className="font-semibold text-black">Neurology</h3>
            <p className="text-black/70 text-sm">
              Specialized treatment for neurological disorders and brain health
            </p>
          </div>

          {/* Orthopedics */}
          <div className="bg-primary/5 border border-primary/10 rounded-xl shadow-md p-6
                          transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <Bone className="text-blue-400 mb-4" />
            <h3 className="font-semibold text-black">Orthopedics</h3>
            <p className="text-black/70 text-sm">
              Comprehensive care for bones, joints, and musculoskeletal system
            </p>
          </div>

          {/* Ophthalmology */}
          <div className="bg-primary/5 border border-primary/10 rounded-xl shadow-md p-6
                          transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <Eye className="text-cyan-400 mb-4" />
            <h3 className="font-semibold text-black">Ophthalmology</h3>
            <p className="text-black/70 text-sm">
              Advanced eye care and vision correction services
            </p>
          </div>

          {/* Pediatrics */}
          <div className="bg-primary/5 border border-primary/10 rounded-xl shadow-md p-6
                          transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <Baby className="text-pink-400 mb-4" />
            <h3 className="font-semibold text-black">Pediatrics</h3>
            <p className="text-black/70 text-sm">
              Dedicated healthcare for infants, children, and adolescents
            </p>
          </div>

          {/* General Medicine */}
          <div className="bg-primary/5 border border-primary/10 rounded-xl shadow-md p-6
                          transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <Activity className="text-green-400 mb-4" />
            <h3 className="font-semibold text-black">General Medicine</h3>
            <p className="text-black/70 text-sm">
              Primary care and treatment for common health conditions
            </p>
          </div>

          {/* Pharmacy */}
          <div className="bg-primary/5 border border-primary/10 rounded-xl shadow-md p-6
                          transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <Pill className="text-orange-400 mb-4" />
            <h3 className="font-semibold text-black">Pharmacy</h3>
            <p className="text-black/70 text-sm">
              Prescription services and medication management
            </p>
          </div>

          {/* Laboratory */}
          <div className="bg-primary/5 border border-primary/10 rounded-xl shadow-md p-6
                          transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <Microscope className="text-indigo-400 mb-4" />
            <h3 className="font-semibold text-black">Laboratory</h3>
            <p className="text-black/70 text-sm">
              Accurate diagnostic testing and pathology services
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
