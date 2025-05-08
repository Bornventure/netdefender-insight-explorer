
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

// Mock data for demonstration
const SERVICE_PACKAGES = [
  {
    id: 1,
    name: "Home Basic",
    speed: "25 Mbps",
    price: "$39.99",
    features: ["Unlimited data", "Basic technical support", "Single device connection", "Standard modem"],
    popular: false
  },
  {
    id: 2,
    name: "Home Plus",
    speed: "100 Mbps",
    price: "$59.99",
    features: ["Unlimited data", "24/7 technical support", "Multiple device connections", "Wi-Fi router included", "Parental controls"],
    popular: true
  },
  {
    id: 3,
    name: "Business Standard",
    speed: "250 Mbps",
    price: "$99.99",
    features: ["Unlimited data", "Priority technical support", "Up to 10 static IPs", "Enterprise-grade router", "99.5% uptime guarantee"],
    popular: false
  },
  {
    id: 4,
    name: "Enterprise",
    speed: "1 Gbps",
    price: "$299.99",
    features: ["Unlimited data", "Dedicated account manager", "Unlimited static IPs", "Enterprise networking equipment", "99.9% uptime SLA", "24/7 premium support"],
    popular: false
  }
];

export const ServicePackages = () => {
  return (
    <div className="space-y-6">
      <Card className="card-gradient border border-cyan-900/30">
        <CardHeader>
          <CardTitle className="text-cyber-green">Service Packages</CardTitle>
          <CardDescription>Manage available service packages and pricing</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICE_PACKAGES.map((pkg) => (
              <Card 
                key={pkg.id} 
                className={`relative border ${pkg.popular ? 'border-cyber-green' : 'border-cyan-900/30'} bg-cyber-darkBlue/50`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-cyber-green text-cyber-darkNavy text-xs font-medium px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-lg">{pkg.name}</CardTitle>
                  <CardDescription className="text-xl font-bold text-cyber-green">
                    {pkg.price}<span className="text-xs text-slate-400 font-normal">/month</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-slate-300">Speed: <span className="font-medium text-white">{pkg.speed}</span></p>
                  <Separator className="my-4 bg-cyan-900/30" />
                  <ul className="space-y-2 text-left">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="text-sm flex items-start">
                        <span className="mr-2 text-cyber-green">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className={`w-full ${pkg.popular ? 'bg-cyber-green text-cyber-darkNavy hover:bg-cyber-green/90' : 'bg-slate-700 hover:bg-slate-600'}`}>
                    {pkg.popular ? 'Select Package' : 'View Details'}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="card-gradient border border-cyan-900/30">
        <CardHeader>
          <CardTitle className="text-cyber-green">Add-On Services</CardTitle>
          <CardDescription>Additional services that can be added to any package</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "Security Suite", description: "Advanced firewall and malware protection", price: "$9.99" },
              { name: "Static IP", description: "Fixed IP address for your connection", price: "$4.99" },
              { name: "Premium Support", description: "Priority customer service with 24/7 access", price: "$14.99" },
            ].map((addon, idx) => (
              <div key={idx} className="flex items-start justify-between p-4 border border-cyan-900/30 rounded-lg bg-cyber-darkBlue/30">
                <div>
                  <h4 className="font-medium text-slate-200">{addon.name}</h4>
                  <p className="text-xs text-slate-400">{addon.description}</p>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-sm font-medium text-cyber-green">{addon.price}/mo</span>
                  <Button size="sm" variant="outline" className="mt-2 border-cyan-900/30 text-xs">
                    Add
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
