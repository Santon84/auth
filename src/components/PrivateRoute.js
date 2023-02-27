import React from 'react'
import { Navigate } from 'react-router'
import { useAuth } from '../context/AuthContext'

export default function PrivateRoute({ Component, ...rest}) {
  const {currentUser}  = useAuth();
        return currentUser ? <Component {...rest} /> : <Navigate to='/login'></Navigate>
}
