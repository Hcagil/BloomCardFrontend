import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../UserContext';

const ProtectedRoute = ({ element }) => {
  const { user } = useContext(UserContext);

  if (!user || !user.email) {
    return <Navigate to="/login" />;
  }

  return element;
};

export default ProtectedRoute;
