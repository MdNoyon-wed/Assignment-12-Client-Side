 import React from 'react';
// import useAuth from '../Hooks/useAuth';
import useAuth from '../Hook/useAuth';
import { Navigate, useLocation } from 'react-router';

const PivateRoute = ({children}) => {
  const {user,loading} = useAuth();
  const location = useLocation()

  if(loading) {
    return <span className="loading loading-spinner loading-xl"></span>
  }
  if(!user) {
    return <Navigate state={{from : location.pathname}} to='/signIn'></Navigate>
  }
    return children;
};

export default PivateRoute;