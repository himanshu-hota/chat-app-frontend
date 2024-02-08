import React, { useEffect, useState } from 'react';
import GenderBox from './GenderBox';
import { Link, useNavigate } from 'react-router-dom';
import useSignUp from '../../hooks/useSignUp';
import Loader from '../../components/Loader/Loader';
import { useAuthContext } from '../../context/AuthContext';

const SignUp = () => {

    const [pageLoading, setPageLoading] = useState(true);
    const { authUser } = useAuthContext();

    const [inputs, setInputs] = useState({
        fullName: '',
        username: '',
        password: '',
        confirmPassword: '',
        gender: ''
    });

    const { loading, signUp } = useSignUp();

    const navigate = useNavigate();


    useEffect(() => {
        if (authUser) {
            return navigate('/');
        }

        const timeOutId = setTimeout(() => {
            setPageLoading(false);
        }, 500);

        return () => clearTimeout(timeOutId);

    }, [authUser]);


    const handleCheckBoxChange = (gender) => {
        setInputs({
            ...inputs, gender
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        await signUp(inputs);

    }


    return (
        <div className="w-full h-screen flex flex-col items-center justify-center min-w-96 mx-auto" onSubmit={handleSubmit}>
            {pageLoading && <Loader />}
            {!pageLoading && <div className="h-full w-full flex justify-center items-center flex-col p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
                <h1 className="text-3xl font-semibold text-center text-gray-300">Sign up
                    {' '} <span className="text-blue-500">Chat-App</span>
                </h1>

                <form className='w-[80%] md:w-[50%] flex flex-col justify-center items-center gap-3 mt-4'>
                    <div className=" w-full label p-2 flex flex-col items-start gap-2">
                        <span className="text-base label-text">Full Name</span>
                        <input type="text" placeholder="Full Name" value={inputs.fullName} onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })} className="input input-bordered w-full max-w-full" />
                    </div>

                    <div className="w-full  label p-2 flex flex-col items-start gap-2">
                        <span className="text-base label-text">Username</span>
                        <input type="text" placeholder="Username" value={inputs.username} onChange={(e) => setInputs({ ...inputs, username: e.target.value })} className="input input-bordered w-full max-w-full" />
                    </div>


                    <div className="w-full  label p-2 flex flex-col items-start gap-2">
                        <span className="text-base label-text">Password</span>
                        <input type="password" placeholder="Password" value={inputs.password} onChange={(e) => setInputs({ ...inputs, password: e.target.value })} className="input input-bordered w-full max-w-full" />
                    </div>

                    <div className="w-full  label p-2 flex flex-col items-start gap-2">
                        <span className="text-base label-text">Confirm Password</span>
                        <input type="password" placeholder="Confirm password" value={inputs.confirmPassword} onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })} className="input input-bordered w-full max-w-full" />
                    </div>

                    <GenderBox onCheckboxChange={handleCheckBoxChange} selectedGender={inputs.gender} />

                    <Link to="/login" className='text-sm hover:underline hover:text-blue-500 inline-block'>Already have an account?</Link>

                    <div className="w-full text-center">
                        <button className={`btn btn-primary`} disabled={loading}>{loading ? <Loader /> : 'Sign Up'}</button>
                    </div>

                </form>
            </div>}
        </div>
    )
}

export default SignUp;