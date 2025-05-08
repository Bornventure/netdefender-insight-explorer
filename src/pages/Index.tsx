
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowUp, ArrowDown, Shield, Users, Calendar } from "lucide-react";
import { useState } from "react";
import { CustomersList } from "@/components/customers/CustomersList";
import { NetworkStatus } from "@/components/network/NetworkStatus";
import { ServicePackages } from "@/components/services/ServicePackages";
import { BillingOverview } from "@/components/billing/BillingOverview";

const Index = () => {
  const [currentTab, setCurrentTab] = useState("overview");

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyber-navy to-cyber-darkNavy">
      <header className="border-b border-cyan-900/30 bg-cyber-darkBlue/50 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-cyber-green">ISP Management System</h1>
            <p className="text-sm text-slate-400">NetDefender Operations Dashboard</p>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="border-cyber-green/30 text-cyber-green">
              <Shield className="mr-2 h-4 w-4" /> Security Status: Good
            </Button>
            <Button variant="outline" size="sm" className="border-cyan-600/30">Admin</Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto py-6 px-4">
        <Tabs defaultValue="overview" value={currentTab} onValueChange={setCurrentTab}>
          <div className="flex justify-between items-center mb-6">
            <TabsList className="bg-cyber-darkBlue/60 border border-cyan-900/30">
              <TabsTrigger value="overview" className="data-[state=active]:bg-cyber-blue data-[state=active]:text-cyber-green">
                Overview
              </TabsTrigger>
              <TabsTrigger value="customers" className="data-[state=active]:bg-cyber-blue data-[state=active]:text-cyber-green">
                Customers
              </TabsTrigger>
              <TabsTrigger value="network" className="data-[state=active]:bg-cyber-blue data-[state=active]:text-cyber-green">
                Network
              </TabsTrigger>
              <TabsTrigger value="services" className="data-[state=active]:bg-cyber-blue data-[state=active]:text-cyber-green">
                Services
              </TabsTrigger>
              <TabsTrigger value="billing" className="data-[state=active]:bg-cyber-blue data-[state=active]:text-cyber-green">
                Billing
              </TabsTrigger>
            </TabsList>

            <div className="flex gap-2">
              <Button size="sm" className="bg-cyber-green text-cyber-darkNavy hover:bg-cyber-green/90">
                New Customer
              </Button>
            </div>
          </div>

          <TabsContent value="overview" className="mt-0 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="card-gradient border border-cyan-900/30">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-slate-300">Active Customers</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-white">2,345</div>
                    <div className="text-xs px-2 py-1 rounded bg-green-500/20 text-green-400 flex items-center">
                      <ArrowUp className="h-3 w-3 mr-1" /> 12%
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-gradient border border-cyan-900/30">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-slate-300">Network Uptime</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-white">99.8%</div>
                    <div className="text-xs px-2 py-1 rounded bg-green-500/20 text-green-400 flex items-center">
                      <ArrowUp className="h-3 w-3 mr-1" /> 0.2%
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-gradient border border-cyan-900/30">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-slate-300">Bandwidth Usage</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-white">78.5 TB</div>
                    <div className="text-xs px-2 py-1 rounded bg-amber-500/20 text-amber-400 flex items-center">
                      <ArrowUp className="h-3 w-3 mr-1" /> 8%
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-gradient border border-cyan-900/30">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-slate-300">Monthly Revenue</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-white">$156,290</div>
                    <div className="text-xs px-2 py-1 rounded bg-green-500/20 text-green-400 flex items-center">
                      <ArrowUp className="h-3 w-3 mr-1" /> 4%
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2 card-gradient border border-cyan-900/30">
                <CardHeader>
                  <CardTitle className="text-cyber-green">Network Traffic</CardTitle>
                  <CardDescription>Live traffic monitoring across all nodes</CardDescription>
                </CardHeader>
                <CardContent className="h-[300px] flex items-center justify-center border-t border-cyan-900/20 mt-2">
                  <div className="text-sm text-slate-400">
                    Network traffic visualization will be displayed here
                  </div>
                </CardContent>
              </Card>
              
              <Card className="card-gradient border border-cyan-900/30">
                <CardHeader>
                  <CardTitle className="text-cyber-green">Recent Alerts</CardTitle>
                  <CardDescription>System and security notifications</CardDescription>
                </CardHeader>
                <CardContent className="h-[300px] overflow-auto border-t border-cyan-900/20 mt-2">
                  <div className="space-y-4 pt-4">
                    {[
                      { title: "DDoS Protection Activated", time: "35m ago", severity: "high" },
                      { title: "New Zone Update", time: "2h ago", severity: "medium" },
                      { title: "Bandwidth Cap Reached - User #5623", time: "4h ago", severity: "medium" },
                      { title: "System Update Completed", time: "8h ago", severity: "low" },
                    ].map((alert, i) => (
                      <div key={i} className="flex items-start space-x-3 pb-3 border-b border-cyan-900/20">
                        <div className={`p-1.5 rounded-full mt-0.5 ${
                          alert.severity === "high" ? "bg-red-500/20" : 
                          alert.severity === "medium" ? "bg-amber-500/20" : "bg-blue-500/20"
                        }`}>
                          <Shield className={`h-3 w-3 ${
                            alert.severity === "high" ? "text-red-400" : 
                            alert.severity === "medium" ? "text-amber-400" : "text-blue-400"
                          }`} />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-slate-200">{alert.title}</p>
                          <p className="text-xs text-slate-400 mt-0.5">{alert.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="customers">
            <CustomersList />
          </TabsContent>
          
          <TabsContent value="network">
            <NetworkStatus />
          </TabsContent>
          
          <TabsContent value="services">
            <ServicePackages />
          </TabsContent>
          
          <TabsContent value="billing">
            <BillingOverview />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;
