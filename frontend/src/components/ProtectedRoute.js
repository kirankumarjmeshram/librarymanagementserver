import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";  // Using custom hook to get user context

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();  // Get user from context

  // If the user is not logged in, redirect to login page
  if (!user) {
    return <Navigate to="/login" />;
  }

  // If the user is logged in, render the children (MyBooks component)
  return children;
};

export default ProtectedRoute;
