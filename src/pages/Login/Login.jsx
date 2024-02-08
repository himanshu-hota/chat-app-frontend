import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useLogin from '../../hooks/useLogin';
import Loader from '../../components/Loader/Loader';
import { useAuthContext } from '../../context/AuthContext';

const Login = () => {

    const navigate = useNavigate();
    const { authUser } = useAuthContext()
    const [pageLoading, setPageLoading] = useState(true);



    const [inputs, setinputs] = useState({
        username: '',
        password: ''
    });

    const { loading, login, success } = useLogin();


    useEffect(() => {
        if (authUser) {
            return navigate('/');
        }

        const timeOutId = setTimeout(() => {
            setPageLoading(false);
        }, 500);

        return () => clearTimeout(timeOutId);

    }, [authUser]);



    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(inputs);
    }

    return (
        <div className=" h-screen w-full flex flex-col justify-center items-center mx-auto">
            {pageLoading && <Loader />}
            {!pageLoading && <div className="w-full flex flex-col justify-center items-center p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
                <h1 className="text-3xl font-semibold text-center text-gray-300">Login
                    {' '}   <span className="text-blue-500">Chat-App</span>
                </h1>

                <form className='w-[80%] md:w-[50%] flex flex-col gap-3 mt-4' onSubmit={handleSubmit}>
                    <div className="w-full label p-2 flex flex-col items-start gap-2">
                        <span className="text-base label-text">Username</span>
                        <input type="text" placeholder="Username" value={inputs.username} onChange={(e) => setinputs({ ...inputs, username: e.target.value })} className="input input-bordered w-full " />
                    </div>


                    <div className="w-full label p-2 flex flex-col items-start gap-2">
                        <span className="text-base label-text">Password</span>
                        <input type="password" placeholder="Password" value={inputs.password} onChange={(e) => setinputs({ ...inputs, password: e.target.value })} className="input input-bordered w-full " />
                    </div>

                    <Link to="/signup" className='text-sm hover:underline hover:text-blue-500 inline-block mx-auto'>{"Don't"} have an account?</Link>

                    <div className="w-full text-center">
                        <button className="btn btn-primary w-36" disabled={loading}>{loading ? <Loader /> : 'Login'}</button>
                    </div>

                </form>
            </div>}
        </div>
    )
}

export default Login;