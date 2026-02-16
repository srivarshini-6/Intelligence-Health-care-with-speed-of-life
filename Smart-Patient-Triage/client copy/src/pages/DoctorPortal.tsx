import { Sidebar } from "@/components/layout/Sidebar";
import { StatCard } from "@/components/dashboard/StatCard";
import { PatientQueue } from "@/components/dashboard/PatientQueue";
import { Users, Activity, AlertTriangle, Clock, CalendarCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { RISK_STATS } from "@/lib/mockData";

export default function DoctorPortal() {
  return (
    <div className="flex min-h-screen bg-slate-50/50">
      <Sidebar />
      <main className="flex-1 ml-64 p-8">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-heading font-bold text-slate-900">Dashboard</h1>
            <p className="text-muted-foreground">Welcome back, Dr. Sarah Johnson</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium flex items-center gap-2">
              <div className="h-2 w-2 bg-green-600 rounded-full animate-pulse" />
              Available for Consult
            </div>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard 
            title="Total Patients" 
            value="48" 
            icon={Users} 
            trend="+12%" 
            trendUp={true} 
            color="primary"
          />
          <StatCard 
            title="Critical Cases" 
            value="3" 
            icon={AlertTriangle} 
            trend="+1" 
            trendUp={false} 
            color="destructive"
          />
          <StatCard 
            title="Avg Wait Time" 
            value="14m" 
            icon={Clock} 
            trend="-2m" 
            trendUp={true} 
            color="warning"
          />
          <StatCard 
            title="Consultations" 
            value="12" 
            icon={CalendarCheck} 
            trend="On Track" 
            trendUp={true} 
            color="success"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Queue - Takes up 2 columns */}
          <PatientQueue />

          {/* Right Column - Charts/Alerts */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Risk Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[200px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={RISK_STATS}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="name" fontSize={12} tickLine={false} axisLine={false} />
                      <Tooltip 
                        cursor={{ fill: 'transparent' }}
                        contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                      />
                      <Bar dataKey="value" fill="currentColor" radius={[4, 4, 0, 0]} className="fill-primary" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-destructive/5 border-destructive/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-destructive flex items-center gap-2 text-lg">
                  <AlertTriangle className="h-5 w-5" />
                  Emergency Alerts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-white p-3 rounded-md shadow-sm border border-destructive/10">
                    <div className="flex justify-between items-start">
                      <h4 className="font-semibold text-sm">Patient #1024 - Deteriorating</h4>
                      <span className="text-xs text-muted-foreground">2m ago</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Heart rate spike detected (120 bpm). Requires immediate attention.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
