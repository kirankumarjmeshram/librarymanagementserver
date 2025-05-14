import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem('token'); // Adjust based on your auth implementation
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
