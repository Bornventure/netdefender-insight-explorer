
import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Users, Ticket, Router, HardDrive, AlertCircle } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

// Sample data for the dashboard
const stats = [
  { id: 1, title: "Active Customers", value: "1,284", change: "+12%", icon: <Users className="h-6 w-6" /> },
  { id: 2, title: "Open Tickets", value: "23", change: "-5%", icon: <Ticket className="h-6 w-6" /> },
  { id: 3, title: "Network Usage", value: "76%", change: "+8%", icon: <Router className="h-6 w-6" /> },
  { id: 4, title: "Storage", value: "2.4TB", change: "+15%", icon: <HardDrive className="h-6 w-6" /> },
];

const alerts = [
  { id: 1, type: "error", message: "Router outage at Site B", time: "10 minutes ago" },
  { id: 2, type: "warning", message: "High bandwidth usage on Main Link", time: "25 minutes ago" },
  { id: 3, type: "info", message: "5 new customer signups", time: "1 hour ago" },
  { id: 4, type: "success", message: "System update completed successfully", time: "2 hours ago" },
];

const recentTickets = [
  { id: "T1001", customer: "John Smith", issue: "Connection drop", priority: "high", status: "open", lastUpdate: "10 min ago" },
  { id: "T1002", customer: "Sarah Johnson", issue: "Speed issue", priority: "medium", status: "open", lastUpdate: "45 min ago" },
  { id: "T1003", customer: "Michael Brown", issue: "Router configuration", priority: "low", status: "pending", lastUpdate: "2 hours ago" },
  { id: "T1004", customer: "Emily Davis", issue: "Billing inquiry", priority: "medium", status: "open", lastUpdate: "3 hours ago" },
];

const Dashboard = () => {
  const [bandwidthUsage, setBandwidthUsage] = useState(0);

  useEffect(() => {
    // Simulate bandwidth usage progress animation
    const timer = setTimeout(() => {
      setBandwidthUsage(76);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-cyber-green glow-text">ISP System Dashboard</h1>
          <p className="text-slate-400">Welcome to NetDefender ISP Management System</p>
        </div>
        <div className="flex items-center space-x-2 bg-cyber-darkBlue p-2 rounded-md border border-cyan-900/30">
          <Shield className="h-5 w-5 text-cyber-green" />
          <span className="text-sm text-slate-300">System Status: <span className="text-green-400">Online</span></span>
        </div>
      </div>

      {/* Stats overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.id} className="card-gradient border border-cyan-900/30">
            <CardContent className="pt-6">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium text-slate-400">{stat.title}</p>
                  <p className="text-2xl font-bold text-slate-200 mt-1">{stat.value}</p>
                  <p className={`text-xs ${stat.change.startsWith('+') ? 'text-green-400' : 'text-amber-400'} mt-1`}>
                    {stat.change} since last week
                  </p>
                </div>
                <div className="bg-cyber-darkNavy/50 p-3 rounded-lg border border-cyan-900/30">
                  <span className="text-cyber-green">{stat.icon}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Bandwidth usage chart */}
        <Card className="card-gradient border border-cyan-900/30 lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-cyber-green">Network Bandwidth</CardTitle>
            <CardDescription className="text-slate-400">Real-time bandwidth usage across all sites</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-slate-400">Main Link</span>
                  <span className="text-sm font-medium text-cyber-green">{bandwidthUsage}%</span>
                </div>
                <Progress value={bandwidthUsage} className="bg-cyber-darkNavy/70 h-2">
                  <div 
                    className="h-full bg-gradient-to-r from-cyan-500 to-cyber-green" 
                    style={{ width: `${bandwidthUsage}%` }} 
                  />
                </Progress>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-slate-400">Secondary Link</span>
                  <span className="text-sm font-medium text-cyber-green">45%</span>
                </div>
                <Progress value={45} className="bg-cyber-darkNavy/70 h-2">
                  <div 
                    className="h-full bg-gradient-to-r from-cyan-500 to-cyber-green" 
                    style={{ width: `45%` }} 
                  />
                </Progress>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-slate-400">Backup Link</span>
                  <span className="text-sm font-medium text-cyber-green">12%</span>
                </div>
                <Progress value={12} className="bg-cyber-darkNavy/70 h-2">
                  <div 
                    className="h-full bg-gradient-to-r from-cyan-500 to-cyber-green" 
                    style={{ width: `12%` }} 
                  />
                </Progress>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* System alerts */}
        <Card className="card-gradient border border-cyan-900/30">
          <CardHeader>
            <CardTitle className="text-cyber-green">System Alerts</CardTitle>
            <CardDescription className="text-slate-400">Recent alerts and notifications</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {alerts.map((alert) => (
                <div 
                  key={alert.id}
                  className={`flex items-start p-2 rounded-md ${
                    alert.type === "error" ? "bg-red-950/20 border border-red-900/30" :
                    alert.type === "warning" ? "bg-amber-950/20 border border-amber-900/30" :
                    alert.type === "success" ? "bg-green-950/20 border border-green-900/30" :
                    "bg-blue-950/20 border border-blue-900/30"
                  }`}
                >
                  <div className="mr-3">
                    <AlertCircle className={`h-5 w-5 ${
                      alert.type === "error" ? "text-red-400" :
                      alert.type === "warning" ? "text-amber-400" :
                      alert.type === "success" ? "text-green-400" :
                      "text-blue-400"
                    }`} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-slate-200">{alert.message}</p>
                    <p className="text-xs text-slate-400 mt-1">{alert.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Recent tickets table */}
      <Card className="card-gradient border border-cyan-900/30">
        <CardHeader>
          <CardTitle className="text-cyber-green">Recent Tickets</CardTitle>
          <CardDescription className="text-slate-400">Latest support tickets</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Ticket ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Issue</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Update</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentTickets.map((ticket) => (
                <TableRow key={ticket.id}>
                  <TableCell className="font-medium">{ticket.id}</TableCell>
                  <TableCell>{ticket.customer}</TableCell>
                  <TableCell>{ticket.issue}</TableCell>
                  <TableCell>
                    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                      ticket.priority === "high" ? "bg-red-500/20 text-red-400" :
                      ticket.priority === "medium" ? "bg-amber-500/20 text-amber-400" :
                      "bg-green-500/20 text-green-400"
                    }`}>
                      {ticket.priority}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                      ticket.status === "open" ? "bg-blue-500/20 text-blue-400" :
                      "bg-yellow-500/20 text-yellow-400"
                    }`}>
                      {ticket.status}
                    </span>
                  </TableCell>
                  <TableCell>{ticket.lastUpdate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
