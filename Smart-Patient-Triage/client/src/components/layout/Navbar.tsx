import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="w-full border-b bg-white/80 backdrop-blur-md fixed top-0 left-0 z-[999]">


      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <span className="font-heading font-bold text-xl text-primary">
          MediTriage AI
        </span>

       <div className="flex items-center gap-6">
          <Link href="/about">
            <a className="text-sm font-medium text-slate-700 hover:text-primary">
              About
            </a>
          </Link>

          <Link href="/services">
            <a className="text-sm font-medium text-slate-700 hover:text-primary">
              Services
            </a>
          </Link>

          <Link href="/emergency">
  <Button className="bg-red-500 hover:bg-red-600 text-white">
    Emergency
  </Button>
</Link>


        </div>
      </div>
    </nav>
  );
}
