import React from 'react';
import { useAuthContext } from '../../context/AuthContext';
import Loader from '../Loader/Loader';
import Logout from '../Sidebar/Logout';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const { authUser } = useAuthContext();
    const { pathname } = useLocation();

    return (
        <nav className="w-full h-6 p-6 pt-8 flex justify-center items-center rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 ">
            {!authUser && <Loader />}
            {authUser && (
                <>
                    {pathname === '/' && <Link to='/profile' className="p-2 text-2xl">@{authUser?.fullName}</Link>}
                    {pathname === '/profile' && <Link to='/' className="p-2 text-2xl">Home</Link>}
                </>

            )}

            <Logout />
        </nav>
    )
}

export default Navbar;