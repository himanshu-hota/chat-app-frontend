import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const useSignUp = () => {

    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const navigate = useNavigate();

    const signUp = async (formData) => {

        const success = validateInputs(formData);

        if (!success) return;

        // const { username, fullName, password, confirmPassword, gender } = formData;

        try {
            setLoading(true);
            const ENDPOINT = import.meta.env.VITE_ENDPOINT;
            const url = ENDPOINT + '/api/auth/signup';
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`, // Replace with your actual 
                },
                body: JSON.stringify(formData)
            }
            const res = await fetch(url, options);
            const data = await res.json();

            if (!res.ok || data.error) throw new Error('Something went wrong');

            localStorage.setItem('chat-user', JSON.stringify(data));
            localStorage.setItem('chat-user-token', data?.token);
            setAuthUser(data);
            toast.success(`Fantastic, Signup Successful`);
            navigate('/');
            return;

        } catch (err) {
            toast.error(err.message);
        } finally {
            setLoading(false);
        }


    }

    return { loading, signUp }
}

const validateInputs = ({ username, fullName, password, confirmPassword, gender }) => {

    const invalidUsername = !username || username.trim().length == 0;
    const invalidFullName = !fullName || fullName.trim().length == 0;
    const Password = !password || password.trim().length == 0;
    const ConfirmPassword = !confirmPassword || confirmPassword.trim().length == 0;
    const invalidPassword = Password || ConfirmPassword;
    const passwordDidNotMatch = (password != confirmPassword)
    const invalidGender = !gender || gender.trim().length == 0


    if (passwordDidNotMatch) {
        toast.error("Password didn't match");
        return false;
    }

    if (invalidUsername || invalidFullName || invalidPassword || invalidGender) {
        toast.error("Please fill all the fields")
        return false;
    }

    if (password.trim().length < 6) {
        toast.error("Password must be atleast 6 characters long");
        return false;
    }

    return true;


}

export default useSignUp;