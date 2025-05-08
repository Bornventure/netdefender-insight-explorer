
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/sonner";
import { useAuth } from "@/context/AuthContext";

export function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [systemType, setSystemType] = useState<"isp" | "main" | "portal">("isp");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulating authentication flow - replace with your actual authentication logic
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simple validation
      if (!email || !password) {
        throw new Error("Please enter both email and password");
      }

      // In real implementation, this would be an API call to authenticate
      console.log("Authenticating with:", { email, systemType });
      
      // Mock successful authentication
      const mockUserRoles = {
        isp: ["admin", "support"],
        main: ["manager"],
        portal: ["user"]
      };
      
      if (systemType === "isp" && mockUserRoles.isp.length) {
        const userData = { 
          email, 
          roles: mockUserRoles.isp,
          system: systemType,
          token: "mock-jwt-token"
        };
        
        // Use the login function from AuthContext instead of just setting localStorage
        login(userData);
        
        toast.success("Authentication successful", {
          description: "Welcome to the ISP Management System"
        });
        
        // Ensure navigation happens after login is complete
        setTimeout(() => {
          navigate("/dashboard");
        }, 100);
      } else {
        toast.error("Authentication failed", {
          description: `You don't have access to the ${systemType} system.`
        });
      }
    } catch (error) {
      console.error("Authentication error:", error);
      toast.error("Authentication failed", {
        description: error instanceof Error ? error.message : "Invalid credentials"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSystemChange = (newSystem: "isp" | "main" | "portal") => {
    setSystemType(newSystem);
  };

  return (
    <Card className="w-full max-w-md mx-auto border-cyan-900/30 card-gradient">
      <CardHeader className="space-y-2">
        <div className="flex justify-center mb-2">
          <Shield className="h-12 w-12 text-cyber-green" />
        </div>
        <CardTitle className="text-2xl text-center text-cyber-green">Sign In</CardTitle>
        <CardDescription className="text-center text-slate-300">
          Access the ISP Management System
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="system" className="text-slate-300">System</Label>
            <div className="flex space-x-2 bg-cyber-darkNavy p-1 rounded-md">
              <Button 
                type="button"
                variant={systemType === "isp" ? "default" : "ghost"} 
                className={systemType === "isp" ? "bg-cyber-green text-cyber-darkNavy" : "text-slate-400"} 
                onClick={() => handleSystemChange("isp")}
                size="sm"
              >
                ISP System
              </Button>
              <Button 
                type="button"
                variant={systemType === "main" ? "default" : "ghost"}
                className={systemType === "main" ? "bg-cyber-green text-cyber-darkNavy" : "text-slate-400"}
                onClick={() => handleSystemChange("main")}
                size="sm"
              >
                Main System
              </Button>
              <Button 
                type="button"
                variant={systemType === "portal" ? "default" : "ghost"}
                className={systemType === "portal" ? "bg-cyber-green text-cyber-darkNavy" : "text-slate-400"}
                onClick={() => handleSystemChange("portal")}
                size="sm"
              >
                Web Portal
              </Button>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-slate-300">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              autoComplete="email"
              required
              className="bg-cyber-darkNavy/50 border-cyan-900/30 text-slate-200"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-slate-300">Password</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                autoComplete="current-password"
                required
                className="bg-cyber-darkNavy/50 border-cyan-900/30 text-slate-200 pr-10"
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0 h-full px-3 text-slate-400 hover:text-cyber-green"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
              </Button>
            </div>
          </div>
          <Button 
            type="submit" 
            className="w-full bg-cyber-green text-cyber-darkNavy hover:bg-cyber-green/90"
            disabled={isLoading}
          >
            {isLoading ? "Authenticating..." : "Sign In"}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex items-center justify-center border-t border-cyan-900/30 py-4">
        <div className="text-sm text-slate-400">
          Protected by NetDefender Security
        </div>
      </CardFooter>
    </Card>
  );
}
