import React from 'react';
import { useAuthContext } from '../context/AuthContext';
import Navbar from '../components/Navbar/Navbar';
import { Navigate, Outlet } from 'react-router-dom';

const RootLayout = ({ children }) => {
    const { authUser } = useAuthContext();

    if (!authUser) return <Navigate to='/login' />;


    return (<>
        <Navbar />
        <Outlet />
    </>)
}

export default RootLayout;