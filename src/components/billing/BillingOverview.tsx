
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const BillingOverview = () => {
  return (
    <div className="space-y-6">
      <Card className="card-gradient border border-cyan-900/30">
        <CardHeader>
          <CardTitle className="text-cyber-green">Billing Overview</CardTitle>
          <CardDescription>Financial summary and revenue tracking</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-cyber-darkBlue/50 p-4 rounded-lg border border-cyan-900/30">
              <p className="text-sm text-slate-300">Monthly Revenue</p>
              <p className="text-2xl font-bold text-white mt-1">$156,290</p>
              <p className="text-xs text-green-400 flex items-center mt-1">
                <svg className="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 14l5-5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                4.2% from last month
              </p>
            </div>
            
            <div className="bg-cyber-darkBlue/50 p-4 rounded-lg border border-cyan-900/30">
              <p className="text-sm text-slate-300">Active Subscriptions</p>
              <p className="text-2xl font-bold text-white mt-1">2,345</p>
              <p className="text-xs text-green-400 flex items-center mt-1">
                <svg className="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 14l5-5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                27 new this month
              </p>
            </div>
            
            <div className="bg-cyber-darkBlue/50 p-4 rounded-lg border border-cyan-900/30">
              <p className="text-sm text-slate-300">Overdue Accounts</p>
              <p className="text-2xl font-bold text-white mt-1">78</p>
              <p className="text-xs text-red-400 flex items-center mt-1">
                <svg className="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                12 more than last month
              </p>
            </div>
            
            <div className="bg-cyber-darkBlue/50 p-4 rounded-lg border border-cyan-900/30">
              <p className="text-sm text-slate-300">Average Revenue Per User</p>
              <p className="text-2xl font-bold text-white mt-1">$66.65</p>
              <p className="text-xs text-green-400 flex items-center mt-1">
                <svg className="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 14l5-5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                $1.20 increase
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card className="card-gradient border border-cyan-900/30">
        <CardHeader>
          <CardTitle className="text-cyber-green">Invoice Management</CardTitle>
          <CardDescription>Track and manage customer invoices</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="recent">
            <TabsList className="bg-cyber-darkBlue/60 border border-cyan-900/30 mb-4">
              <TabsTrigger value="recent" className="data-[state=active]:bg-cyber-blue data-[state=active]:text-cyber-green">
                Recent Invoices
              </TabsTrigger>
              <TabsTrigger value="overdue" className="data-[state=active]:bg-cyber-blue data-[state=active]:text-cyber-green">
                Overdue
              </TabsTrigger>
              <TabsTrigger value="paid" className="data-[state=active]:bg-cyber-blue data-[state=active]:text-cyber-green">
                Paid
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="recent">
              <div className="rounded-md border border-cyan-900/30 overflow-hidden">
                <table className="w-full">
                  <thead className="bg-cyber-darkBlue">
                    <tr>
                      <th className="text-left px-4 py-2 text-sm font-medium text-slate-300">Invoice #</th>
                      <th className="text-left px-4 py-2 text-sm font-medium text-slate-300">Customer</th>
                      <th className="text-left px-4 py-2 text-sm font-medium text-slate-300">Amount</th>
                      <th className="text-left px-4 py-2 text-sm font-medium text-slate-300">Date</th>
                      <th className="text-left px-4 py-2 text-sm font-medium text-slate-300">Status</th>
                      <th className="text-right px-4 py-2 text-sm font-medium text-slate-300">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { id: "INV-2025-004", customer: "John Smith", amount: "$79.99", date: "2025-05-01", status: "Paid" },
                      { id: "INV-2025-003", customer: "Sarah Johnson", amount: "$59.99", date: "2025-05-01", status: "Pending" },
                      { id: "INV-2025-002", customer: "Michael Brown", amount: "$299.99", date: "2025-04-30", status: "Paid" },
                      { id: "INV-2025-001", customer: "Emily Davis", amount: "$39.99", date: "2025-04-28", status: "Overdue" },
                    ].map((invoice) => (
                      <tr key={invoice.id} className="border-b border-cyan-900/30 hover:bg-cyber-blue/20">
                        <td className="px-4 py-3 text-sm text-slate-300">{invoice.id}</td>
                        <td className="px-4 py-3 text-sm">{invoice.customer}</td>
                        <td className="px-4 py-3 text-sm">{invoice.amount}</td>
                        <td className="px-4 py-3 text-sm">{invoice.date}</td>
                        <td className="px-4 py-3 text-sm">
                          <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                            invoice.status === "Paid" ? "bg-green-500/20 text-green-400" :
                            invoice.status === "Overdue" ? "bg-red-500/20 text-red-400" :
                            "bg-amber-500/20 text-amber-400"
                          }`}>
                            {invoice.status}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm text-right">
                          <Button variant="ghost" size="sm" className="h-8 text-slate-400 hover:text-cyber-green">
                            View
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>
            
            <TabsContent value="overdue">
              <div className="rounded-md border border-cyan-900/30 overflow-hidden">
                <div className="flex items-center justify-center p-8">
                  <p className="text-slate-400">Overdue invoices will be displayed here</p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="paid">
              <div className="rounded-md border border-cyan-900/30 overflow-hidden">
                <div className="flex items-center justify-center p-8">
                  <p className="text-slate-400">Paid invoices will be displayed here</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="card-gradient border border-cyan-900/30">
          <CardHeader>
            <CardTitle className="text-cyber-green">Revenue by Package</CardTitle>
            <CardDescription>Distribution of revenue across service packages</CardDescription>
          </CardHeader>
          <CardContent className="h-64 flex items-center justify-center">
            <p className="text-slate-400">Revenue distribution chart will be displayed here</p>
          </CardContent>
        </Card>
        
        <Card className="card-gradient border border-cyan-900/30">
          <CardHeader>
            <CardTitle className="text-cyber-green">Payment Methods</CardTitle>
            <CardDescription>Most popular customer payment methods</CardDescription>
          </CardHeader>
          <CardContent className="h-64 flex items-center justify-center">
            <p className="text-slate-400">Payment methods chart will be displayed here</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
