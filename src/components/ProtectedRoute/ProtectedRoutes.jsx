import React from 'react';
import { useAuthContext } from '../../context/AuthContext';
import { Navigate } from 'react-router-dom';

const ProtectedRoutes = ({ children }) => {

    const { authUser } = useAuthContext();

    if (!authUser) {

        return <Navigate to='/login' />;
    }

    return (<>{children}</>)
}

export default ProtectedRoutes;