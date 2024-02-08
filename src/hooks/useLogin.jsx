import React from 'react';
import { useAuthContext } from '../context/AuthContext';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const useLogin = () => {

    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const navigate = useNavigate()

    const login = async (formData) => {
        const success = validateInputs(formData);
        if (!success) return;

        try {
            setLoading(true);
            const ENDPOINT = import.meta.env.VITE_ENDPOINT;
            const url = ENDPOINT + '/api/auth/login';
            const options = {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            };

            const res = await fetch(url, options);
            const data = await res.json();

            if (!res.ok || data.error) {
                throw new Error(data.message);
            }

            localStorage.setItem('chat-user', JSON.stringify(data));
            setAuthUser(data);
            toast.success('Login successful')
            navigate('/');
            return;
        } catch (err) {
            toast.error("Invalid credentials");
        } finally {
            setLoading(false);
        }


    }

    return { loading, login };
}


const validateInputs = ({ username, password }) => {

    const invalidUsername = !username || username.trim().length == 0;
    const invalidPassword = !password || password.trim().length == 0;

    if (username.length == 0 || password.length == 0) {
        toast.error('Please enter your credentials');
        return false;
    }

    if (invalidUsername || invalidPassword) return false;

    return true;

}

export default useLogin;