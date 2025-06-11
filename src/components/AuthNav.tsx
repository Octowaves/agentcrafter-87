
import { Link } from "react-router-dom";
import AgentCrafterButton from "./AgentCrafterButton";

const AuthNav = () => {
  return (
    <div className="flex items-center gap-4">
      <Link to="/sign-in">
        <AgentCrafterButton variant="outline">Sign In</AgentCrafterButton>
      </Link>
      <Link to="/sign-up">
        <AgentCrafterButton>Start Building - $5.99/month</AgentCrafterButton>
      </Link>
    </div>
  );
};

export default AuthNav;
