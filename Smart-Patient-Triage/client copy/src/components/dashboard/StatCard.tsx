import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: string;
  trendUp?: boolean;
  color?: "primary" | "destructive" | "warning" | "success";
}

export function StatCard({ title, value, icon: Icon, trend, trendUp, color = "primary" }: StatCardProps) {
  const colorStyles = {
    primary: "bg-primary/10 text-primary",
    destructive: "bg-destructive/10 text-destructive",
    warning: "bg-orange-500/10 text-orange-600",
    success: "bg-green-500/10 text-green-600",
  };

  return (
    <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className={cn("p-2 rounded-lg", colorStyles[color])}>
            <Icon className="h-5 w-5" />
          </div>
          {trend && (
            <span className={cn(
              "text-xs font-medium px-2 py-1 rounded-full",
              trendUp ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
            )}>
              {trend}
            </span>
          )}
        </div>
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <h3 className="text-2xl font-bold font-heading mt-1">{value}</h3>
        </div>
      </CardContent>
    </Card>
  );
}
