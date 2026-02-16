import { Sidebar } from "@/components/layout/Sidebar";


export default function SchedulePage() {
  const doctors = [
    {
      name: "Dr. Sarah Johnson",
      gender: "Female",
      age: 38,
      
      department: "Cardiology",
      available: true,
      initial: "S",
      color: "bg-green-500",
    },
    {
      name: "Dr. Michael Chen",
      gender: "Male",
      age: 45,
      
      department: "Neurology",
      available: false,
      initial: "M",
      color: "bg-red-500",
    },
    {
      name: "Dr. Anita Desai",
      gender: "Female",
      age: 34,
    
      department: "General Medicine",
      available: true,
      initial: "A",
      color: "bg-green-500",
    },
    {
      name: "Dr. Rajesh Kumar",
      gender: "Male",
      age: 50,
      
      department: "Emergency",
      available: false,
      initial: "R",
      color: "bg-red-500",
    },
  ];

  return (
    <div className="flex min-h-screen bg-slate-50/50">
      <Sidebar />

      <main className="flex-1 ml-64 p-8">
        <div className="max-w-5xl mx-auto">

          {/* TITLE */}
          <h1 className="text-3xl font-bold text-primary mb-6">
            Doctor Schedule
          </h1>

          {/* LIST */}
          <div className="space-y-6">
            {doctors.map((doc, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border shadow-sm p-6 flex justify-between items-center hover:shadow-md transition-all"
              >
                {/* LEFT SIDE */}
                <div className="flex items-center gap-4">
                  <div
                    className={`h-14 w-14 rounded-full flex items-center justify-center text-white font-bold text-lg ${doc.color}`}
                  >
                    {doc.initial}
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg">{doc.name}</h3>

                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                       {doc.gender}, {doc.age}y
                    </div>
                  </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="flex items-center gap-20">

                  {/* Department */}
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Department
                    </p>
                    <p className="text-primary font-medium">
                      {doc.department}
                    </p>
                  </div>

                  {/* Availability */}
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Availability
                    </p>

                    <div
                      className={`px-3 py-1 rounded-full text-sm font-medium w-fit ${
                        doc.available
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {doc.available ? "Available" : "Not Available"}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
