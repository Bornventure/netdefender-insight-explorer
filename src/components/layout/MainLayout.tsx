
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import Sidebar from "./Sidebar";
import { Bell, Search, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

export function MainLayout() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const { user } = useAuth();

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="flex h-screen bg-cyber-navy">
      <Sidebar collapsed={sidebarCollapsed} onToggle={toggleSidebar} />
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Header */}
        <header className="h-16 flex items-center justify-between px-6 border-b border-cyan-900/30 bg-cyber-darkBlue">
          <div className={cn("transition-all duration-300", sidebarCollapsed ? "ml-0" : "ml-0")}>
            <div className="flex items-center">
              <div className="relative mr-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 h-9 rounded-md text-sm text-slate-200 bg-cyber-darkNavy/50 border-cyan-900/30 focus:outline-none focus:ring-1 focus:ring-cyber-green"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-slate-400 hover:text-cyber-green">
              <Bell className="h-5 w-5" />
            </Button>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-slate-300 hidden md:block">
                {user?.email}
              </span>
              <div className="h-8 w-8 rounded-full bg-cyber-darkNavy border border-cyan-900/50 flex items-center justify-center">
                <User className="h-5 w-5 text-cyber-green" />
              </div>
            </div>
          </div>
        </header>
        
        {/* Main content */}
        <main className="flex-1 overflow-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
