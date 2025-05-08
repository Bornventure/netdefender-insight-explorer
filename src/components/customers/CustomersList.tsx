
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useState } from "react";

// Mock data for demonstration
const MOCK_CUSTOMERS = [
  { id: "C1001", name: "John Smith", package: "Business Pro", status: "Active", bandwidth: "2.8 TB", lastPayment: "2025-04-28" },
  { id: "C1002", name: "Sarah Johnson", package: "Home Plus", status: "Active", bandwidth: "1.2 TB", lastPayment: "2025-05-01" },
  { id: "C1003", name: "Michael Brown", package: "Enterprise", status: "Active", bandwidth: "8.5 TB", lastPayment: "2025-04-25" },
  { id: "C1004", name: "Emily Davis", package: "Home Basic", status: "Suspended", bandwidth: "0.4 TB", lastPayment: "2025-03-15" },
  { id: "C1005", name: "Daniel Wilson", package: "Business Standard", status: "Active", bandwidth: "3.1 TB", lastPayment: "2025-04-30" },
  { id: "C1006", name: "Olivia Martinez", package: "Enterprise Plus", status: "Active", bandwidth: "12.7 TB", lastPayment: "2025-05-02" },
  { id: "C1007", name: "James Taylor", package: "Home Plus", status: "Pending", bandwidth: "0.0 TB", lastPayment: "Not paid yet" },
  { id: "C1008", name: "Sophia Anderson", package: "Business Pro", status: "Active", bandwidth: "4.3 TB", lastPayment: "2025-04-29" },
];

export const CustomersList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredCustomers = MOCK_CUSTOMERS.filter(customer => 
    customer.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    customer.id.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <Card className="card-gradient border border-cyan-900/30">
      <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <CardTitle className="text-cyber-green">Customer Management</CardTitle>
        <div className="flex items-center gap-2 w-full md:w-auto">
          <Input 
            className="bg-cyber-darkBlue/50 border-cyan-900/30 text-slate-200"
            placeholder="Search customers..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button size="sm" className="bg-cyber-green text-cyber-darkNavy hover:bg-cyber-green/90">
            Add Customer
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border border-cyan-900/30 overflow-hidden">
          <Table>
            <TableHeader className="bg-cyber-darkBlue">
              <TableRow className="hover:bg-cyber-blue/50">
                <TableHead className="text-slate-300">ID</TableHead>
                <TableHead className="text-slate-300">Customer</TableHead>
                <TableHead className="text-slate-300">Package</TableHead>
                <TableHead className="text-slate-300">Status</TableHead>
                <TableHead className="text-slate-300">Bandwidth</TableHead>
                <TableHead className="text-slate-300">Last Payment</TableHead>
                <TableHead className="text-slate-300 text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCustomers.map((customer) => (
                <TableRow key={customer.id} className="hover:bg-cyber-blue/20 border-b border-cyan-900/30">
                  <TableCell className="font-medium text-slate-300">{customer.id}</TableCell>
                  <TableCell>{customer.name}</TableCell>
                  <TableCell>{customer.package}</TableCell>
                  <TableCell>
                    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                      customer.status === "Active" ? "bg-green-500/20 text-green-400" :
                      customer.status === "Suspended" ? "bg-red-500/20 text-red-400" :
                      "bg-amber-500/20 text-amber-400"
                    }`}>
                      {customer.status}
                    </span>
                  </TableCell>
                  <TableCell>{customer.bandwidth}</TableCell>
                  <TableCell>{customer.lastPayment}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm" className="h-8 text-slate-400 hover:text-cyber-green">
                      View
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 text-slate-400 hover:text-cyber-green">
                      Edit
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};
