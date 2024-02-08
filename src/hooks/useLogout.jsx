import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

const useLogout = () => {

    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const logout = async () => {
        try {
            setLoading(true);
            const token = localStorage.getItem('chat-user-token');
            const ENDPOINT = import.meta.env.VITE_ENDPOINT;
            const url = ENDPOINT + '/api/auth/logout';
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`, // Replace with your actual 
                },
            };

            const res = await fetch(url, options);
            const data = await res.json();

            if (!res.ok || data.error) throw new Error(data.error);

            localStorage.removeItem('chat-user');
            localStorage.removeItem('chat-user-token');
            setAuthUser(null);
            toast.success('Logout successful');

        } catch (err) {
            toast.error('Failed to logout');
        } finally {
            setLoading(false);
        }
    }

    return { logout, loading };
}

export default useLogout;