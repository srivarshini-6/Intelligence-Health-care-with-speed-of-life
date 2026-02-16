import { Link, useLocation } from "wouter";
import { 
  LayoutDashboard, 
  Users, 
  Activity, 
  Calendar, 
  Settings, 
  LogOut,
  Stethoscope
} from "lucide-react";
import { cn } from "@/lib/utils";

export function Sidebar() {
  const [location] = useLocation();

  const links = [
    { href: "/doctor/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/doctor/patients", label: "Patient Queue", icon: Users },
    { href: "/doctor/diagnosis", label: "AI Diagnosis", icon: Brain }, // Using Brain icon temporarily
    { href: "/doctor/vitals", label: "Vitals Monitor", icon: Activity },
    { href: "/doctor/schedule", label: "Schedule", icon: Calendar },
  ];

  // Need to import Brain if I use it, but for now let's stick to imports we have
  // Wait, I didn't import Brain in this file yet.
  // Let's add it or use Stethoscope for Diagnosis
  
  return (
    <div className="h-screen w-64 bg-sidebar text-sidebar-foreground border-r border-sidebar-border flex flex-col fixed left-0 top-0 z-20">
      <div className="p-6 flex items-center gap-3 border-b border-sidebar-border/50">
        <div className="bg-primary/20 p-2 rounded-lg">
          <Stethoscope className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h1 className="font-heading font-bold text-lg leading-tight">MediTriage</h1>
          <p className="text-xs text-sidebar-foreground/60">Doctor Portal</p>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = location === link.href;
          
          return (
            <Link key={link.href} href={link.href}>
              <a className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-all duration-200",
                isActive 
                  ? "bg-sidebar-accent text-primary" 
                  : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
              )}>
                <Icon className={cn("h-4 w-4", isActive ? "text-primary" : "text-sidebar-foreground/50")} />
                {link.label}
              </a>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-sidebar-border/50">
        <Link href="/">
          <a className="flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium text-destructive hover:bg-destructive/10 transition-colors">
            <LogOut className="h-4 w-4" />
            Sign Out
          </a>
        </Link>
      </div>
    </div>
  );
}

function Brain(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
      <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
      <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
      <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
      <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
      <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
      <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
      <path d="M6 18a4 4 0 0 1-1.97-1.375" />
      <path d="M19.97 16.625A4 4 0 0 1 18 18" />
    </svg>
  )
}
