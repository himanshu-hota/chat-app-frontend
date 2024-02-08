import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

const useLogout = () => {

    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const logout = async () => {
        try {
            setLoading(true);

            const url = '/api/auth/logout';
            const options = {
                method: 'POST',
                headers: { "Content-Type": "application/json" }
            };

            const res = await fetch(url, options);
            const data = await res.json();

            if (!res.ok || data.error) throw new Error(data.error);

            localStorage.removeItem('chat-user');
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