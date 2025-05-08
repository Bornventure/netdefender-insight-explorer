
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

interface ProtectedRouteProps {
  requiredSystem?: "isp" | "main" | "portal";
  requiredRoles?: string[];
}

export const ProtectedRoute = ({
  requiredSystem = "isp",
  requiredRoles = []
}: ProtectedRouteProps) => {
  const { user, isAuthenticated, isLoading } = useAuth();
  const location = useLocation();

  // Show loading state or spinner while checking authentication
  if (isLoading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-cyber-navy">
        <div className="text-cyber-green">Loading authentication...</div>
      </div>
    );
  }

  // If not authenticated, redirect to login
  if (!isAuthenticated || !user) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  // Check system access
  if (user.system !== requiredSystem) {
    return <Navigate to="/unauthorized" state={{ message: `You don't have access to the ${requiredSystem} system.` }} replace />;
  }

  // If roles are required, check if user has at least one of them
  if (requiredRoles.length > 0 && !requiredRoles.some(role => user.roles.includes(role))) {
    return <Navigate to="/unauthorized" state={{ message: "You don't have the required role to access this resource." }} replace />;
  }

  // If all checks pass, render the protected content
  return <Outlet />;
};
