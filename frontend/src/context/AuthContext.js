import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext(); // Create context for authentication

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Check for existing user on initial load
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Error parsing user data:", error);
        setUser(null);
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children} {/* Render children components */}
    </AuthContext.Provider>
  );
};

// Custom hook to access AuthContext
export const useAuth = () => useContext(AuthContext);
