
import { SignInForm } from "@/components/auth/SignInForm";

const SignIn = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-cyber-navy">
      <div className="w-full max-w-md p-4">
        <SignInForm />
      </div>
    </div>
  );
};

export default SignIn;
