import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../services/Auth/AuthContext';

export const PrivateRoute = ({ children }) => {

  const auth = useAuth()
  // console.log(`getSessionIsValid: `, auth.getSessionIsValid())

  return (
    auth?.getSessionIsValid() ? children : <Navigate to='/login' replace />
  )
}
