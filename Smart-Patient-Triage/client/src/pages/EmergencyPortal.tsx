import { HeartPulse, Wind, Ambulance, Activity, Thermometer } from "lucide-react";

export default function EmergencyPortal() {

  const emergencyOptions = [
    {
      title: "Heart Attack",
      icon: <HeartPulse className="h-14 w-14 text-red-500" />,
    },
    {
      title: "Difficulty Breathing",
      icon: <Wind className="h-14 w-14 text-blue-500" />,
    },
    {
      title: "Accident / Trauma",
      icon: <Ambulance className="h-14 w-14 text-orange-500" />,
    },
    {
      title: "Fainting / Unconscious",
      icon: <Activity className="h-14 w-14 text-purple-500" />,
    },
    {
      title: "High Fever",
      icon: <Thermometer className="h-14 w-14 text-teal-500" />,
    },
  ];

  const handleEmergencySelect = async (type: string) => {
    try {
      await fetch("/api/emergency", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          emergencyType: type,
          timestamp: new Date(),
        }),
      });

     alert(`Emergency "${type}" sent to hospital triage system`);

    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-background pt-24 px-4">

      {/* Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-red-500">
          🚨 Emergency Assistance
        </h1>
        <p className="text-muted-foreground mt-2">
          Select your condition immediately for fast hospital access
        </p>
      </div>

      {/* Emergency Buttons Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

        {emergencyOptions.map((item, index) => (

          <div
            key={index}
            onClick={() => handleEmergencySelect(item.title)}
            className="cursor-pointer p-10 rounded-3xl bg-white shadow-xl hover:scale-105 transition border border-red-100 text-center"
          >
            <div className="flex justify-center mb-4">
              {item.icon}
            </div>

            <h3 className="text-xl font-semibold">
              {item.title}
            </h3>

          </div>

        ))}

      </div>

      {/* Extra Options */}
      <div className="max-w-5xl mx-auto mt-16">
        <h2 className="text-2xl font-bold mb-6">Other Emergency Options</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "Severe Pain",
            "Bleeding",
            "Burn Injury",
            "Allergic Reaction",
            "Stroke Symptoms",
            "Chest Tightness",
            "Seizure",
            "Poisoning",
          ].map((item, i) => (
            <div
              key={i}
              onClick={() => handleEmergencySelect(item)}
              className="p-6 bg-slate-50 rounded-xl text-center font-medium hover:bg-red-50 cursor-pointer transition"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
