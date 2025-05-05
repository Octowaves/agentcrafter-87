
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AuthNav = () => {
  return (
    <div className="flex items-center gap-4">
      <Link to="/sign-in">
        <Button variant="outline">Sign In</Button>
      </Link>
      <Link to="/sign-up">
        <Button>Get Started</Button>
      </Link>
    </div>
  );
};

export default AuthNav;
