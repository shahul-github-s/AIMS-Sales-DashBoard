import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Perform logout logic
    localStorage.removeItem("isAuthenticated");
    setIsAuthenticated(false);

    // Redirect to sign-in page
    navigate("/sign-in");
  }, [navigate, setIsAuthenticated]);

  return null; // No UI needed
};

export default Logout;
