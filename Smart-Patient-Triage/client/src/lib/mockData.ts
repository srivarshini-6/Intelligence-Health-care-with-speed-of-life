import { 
  Users, 
  Activity, 
  Clock, 
  AlertTriangle, 
  Heart, 
  Thermometer, 
  Wind, 
  Brain 
} from "lucide-react";

export type Patient = {
  id: string;
  name: string;
  age: number;
  gender: "Male" | "Female" | "Other";
  symptoms: string[];
  riskLevel: "Low" | "Medium" | "High" | "Critical";
  department: string;
  arrivalTime: string;
  status: "Waiting" | "In Consultation" | "Discharged" | "Admitted";
  vitals: {
    heartRate: number;
    bp: string;
    temp: number;
    spo2: number;
  };
  predictionConfidence: number;
};

export const MOCK_PATIENTS: Patient[] = [
  {
    id: "P-1024",
    name: "Rajesh Kumar",
    age: 45,
    gender: "Male",
    symptoms: ["Chest Pain", "Shortness of Breath", "Sweating"],
    riskLevel: "Critical",
    department: "Cardiology",
    arrivalTime: "10:05 AM",
    status: "Waiting",
    vitals: {
      heartRate: 110,
      bp: "160/95",
      temp: 98.6,
      spo2: 92
    },
    predictionConfidence: 98.5
  },
  {
    id: "P-1025",
    name: "Sarah Williams",
    age: 28,
    gender: "Female",
    symptoms: ["Severe Headache", "Nausea", "Sensitivity to Light"],
    riskLevel: "Medium",
    department: "Neurology",
    arrivalTime: "10:12 AM",
    status: "In Consultation",
    vitals: {
      heartRate: 72,
      bp: "110/70",
      temp: 99.1,
      spo2: 98
    },
    predictionConfidence: 89.2
  },
  {
    id: "P-1026",
    name: "Michael Chen",
    age: 62,
    gender: "Male",
    symptoms: ["Dizziness", "Slurred Speech", "Arm Weakness"],
    riskLevel: "High",
    department: "Emergency",
    arrivalTime: "10:15 AM",
    status: "Waiting",
    vitals: {
      heartRate: 88,
      bp: "150/90",
      temp: 98.4,
      spo2: 95
    },
    predictionConfidence: 96.7
  },
  {
    id: "P-1027",
    name: "Anita Desai",
    age: 34,
    gender: "Female",
    symptoms: ["Fever", "Cough", "Body Ache"],
    riskLevel: "Low",
    department: "General Medicine",
    arrivalTime: "10:20 AM",
    status: "Waiting",
    vitals: {
      heartRate: 95,
      bp: "120/80",
      temp: 101.2,
      spo2: 97
    },
    predictionConfidence: 92.1
  }
];

export const VITALS_DATA = [
  { time: "10:00", heartRate: 72, spo2: 98 },
  { time: "10:05", heartRate: 75, spo2: 97 },
  { time: "10:10", heartRate: 74, spo2: 98 },
  { time: "10:15", heartRate: 78, spo2: 98 },
  { time: "10:20", heartRate: 73, spo2: 99 },
  { time: "10:25", heartRate: 72, spo2: 98 },
];

export const RISK_STATS = [
  { name: "Critical", value: 5, color: "#ef4444" },
  { name: "High", value: 12, color: "#f97316" },
  { name: "Medium", value: 25, color: "#eab308" },
  { name: "Low", value: 45, color: "#22c55e" },
];
