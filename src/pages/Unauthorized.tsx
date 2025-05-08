
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

const Unauthorized = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const message = location.state?.message || "You don't have permission to access this page.";

  return (
    <div className="h-screen w-full flex items-center justify-center bg-cyber-navy">
      <div className="max-w-md p-8 text-center space-y-6">
        <div className="flex justify-center">
          <Shield className="text-red-500 h-20 w-20" />
        </div>
        <h1 className="text-3xl font-bold text-cyber-green">Access Denied</h1>
        <p className="text-slate-300">{message}</p>
        <div className="space-y-4">
          <Button 
            onClick={() => navigate(-1)} 
            className="w-full bg-cyber-green text-cyber-darkNavy hover:bg-cyber-green/90"
          >
            Go Back
          </Button>
          <Button 
            onClick={() => navigate("/signin")} 
            variant="outline" 
            className="w-full border-cyan-900/30 text-slate-300 hover:bg-cyber-darkBlue/70"
          >
            Sign In
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;
