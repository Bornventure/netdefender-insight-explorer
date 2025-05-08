
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// We'd use recharts for real visualizations but this is a simplified mock-up
export const NetworkStatus = () => {
  return (
    <div className="space-y-6">
      <Card className="card-gradient border border-cyan-900/30">
        <CardHeader>
          <CardTitle className="text-cyber-green">Network Overview</CardTitle>
          <CardDescription>Real-time monitoring of network infrastructure</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-300">Main Backbone Status</span>
                  <span className="text-green-400">Operational</span>
                </div>
                <Progress value={98} className="h-2 bg-cyber-darkBlue" />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-300">Backup Link Status</span>
                  <span className="text-green-400">Operational</span>
                </div>
                <Progress value={94} className="h-2 bg-cyber-darkBlue" />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-300">Edge Routers</span>
                  <span className="text-amber-400">Partial Alerts</span>
                </div>
                <Progress value={86} className="h-2 bg-cyber-darkBlue" />
              </div>
            </div>
            
            <div className="md:col-span-2 border border-cyan-900/30 rounded-lg p-4">
              <h3 className="text-sm font-medium text-slate-300 mb-3">Network Topology</h3>
              <div className="h-48 bg-cyber-darkBlue/50 rounded flex items-center justify-center">
                <p className="text-slate-400 text-sm">Network topology visualization will be displayed here</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="card-gradient border border-cyan-900/30">
          <CardHeader>
            <CardTitle className="text-cyber-green">Active Threats</CardTitle>
            <CardDescription>Security monitoring and threat detection</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="current">
              <TabsList className="bg-cyber-darkBlue/60 border border-cyan-900/30 mb-4">
                <TabsTrigger value="current" className="data-[state=active]:bg-cyber-blue data-[state=active]:text-cyber-green">
                  Current
                </TabsTrigger>
                <TabsTrigger value="historical" className="data-[state=active]:bg-cyber-blue data-[state=active]:text-cyber-green">
                  Historical
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="current">
                <div className="space-y-4">
                  <div className="flex justify-between p-3 border border-cyan-900/30 rounded bg-cyber-darkBlue/30">
                    <div>
                      <p className="text-sm font-medium text-slate-200">Port Scanning</p>
                      <p className="text-xs text-slate-400">Multiple attempts detected</p>
                    </div>
                    <div className="text-xs px-2 py-1 rounded bg-amber-500/20 text-amber-400 h-fit">Medium</div>
                  </div>
                  
                  <div className="flex justify-between p-3 border border-red-900/30 rounded bg-red-950/10">
                    <div>
                      <p className="text-sm font-medium text-slate-200">DDoS Attempt</p>
                      <p className="text-xs text-slate-400">Mitigated automatically</p>
                    </div>
                    <div className="text-xs px-2 py-1 rounded bg-red-500/20 text-red-400 h-fit">High</div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="historical">
                <div className="h-48 flex items-center justify-center border border-cyan-900/30 rounded">
                  <p className="text-slate-400 text-sm">Historical threat data will be displayed here</p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
        
        <Card className="card-gradient border border-cyan-900/30">
          <CardHeader>
            <CardTitle className="text-cyber-green">Bandwidth Distribution</CardTitle>
            <CardDescription>Current bandwidth allocation by region</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-300">North Region</span>
                  <span className="text-slate-300">32.4 TB (42%)</span>
                </div>
                <Progress value={42} className="h-2 bg-cyber-darkBlue" />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-300">East Region</span>
                  <span className="text-slate-300">18.7 TB (24%)</span>
                </div>
                <Progress value={24} className="h-2 bg-cyber-darkBlue" />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-300">South Region</span>
                  <span className="text-slate-300">15.5 TB (20%)</span>
                </div>
                <Progress value={20} className="h-2 bg-cyber-darkBlue" />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-300">West Region</span>
                  <span className="text-slate-300">10.9 TB (14%)</span>
                </div>
                <Progress value={14} className="h-2 bg-cyber-darkBlue" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
