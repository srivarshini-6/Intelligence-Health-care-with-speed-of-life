import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, Clock, AlertTriangle } from "lucide-react";
import { MOCK_PATIENTS } from "@/lib/mockData";
import { cn } from "@/lib/utils";

export function PatientQueue() {
  return (
    <Card className="col-span-2">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Live Patient Queue</CardTitle>
        <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">
          {MOCK_PATIENTS.length} Patients Waiting
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {MOCK_PATIENTS.map((patient) => (
            <div 
              key={patient.id}
              className="flex items-center justify-between p-4 bg-muted/30 rounded-lg border hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center font-bold text-white",
                  patient.riskLevel === "Critical" ? "bg-destructive" :
                  patient.riskLevel === "High" ? "bg-orange-500" :
                  patient.riskLevel === "Medium" ? "bg-yellow-500" : "bg-green-500"
                )}>
                  {patient.riskLevel[0]}
                </div>
                <div>
                  <h4 className="font-semibold text-sm">{patient.name}</h4>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {patient.arrivalTime}
                    </span>
                    <span>•</span>
                    <span>{patient.gender}, {patient.age}y</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="text-right hidden md:block">
                  <div className="text-xs font-medium text-muted-foreground">Department</div>
                  <div className="text-sm font-semibold text-primary">{patient.department}</div>
                </div>
                
                <div className="text-right hidden md:block">
                  <div className="text-xs font-medium text-muted-foreground">Symptoms</div>
                  <div className="text-sm max-w-[150px] truncate">{patient.symptoms.join(", ")}</div>
                </div>

                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
