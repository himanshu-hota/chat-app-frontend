import React from 'react';
import { TbLogout2 } from "react-icons/tb";
import useLogout from '../../hooks/useLogout';
import Loader from '../Loader/Loader';

const Logout = () => {

    const { loading, logout } = useLogout();
    return (
        <div className='mt-auto text-xl w-6 h-6 text-white flex items-center justify-start absolute right-5 top-'>
            {!loading && <TbLogout2 onClick={() => logout()} className='cursor-pointer hover:text-red-300 text-2xl ' />}
            {loading && <Loader />}
        </div >
    )
}

export default Logout;