import React, { useState } from 'react';
import { useAuthContext } from '../../context/AuthContext';
import { convertDateFormat } from '../../utils/extractTime';

const Profile = () => {

    const { authUser } = useAuthContext();


    return (
        <section className="h-screen md:h-[80vh] w-full flex justify-center items-center" >

            <div className="profile flex items-center flex-col md:flex-row w-[90%] h-[90%] md:w-[70%] md:h-[70%] bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">

                <div className="profilePic basis-[40%] h-full p-3 md:border-r md:border-sky-300">
                    <img src={authUser?.profilePic} alt={authUser?.fullName} className='w-full h-full object-contain' />
                </div>
                <div className="profileInfo basis-[50%] p-4 w-full h-full flex justify-between flex-col text-white text-2xl font-light">
                    <p className="border-b border-sky-500 p-2 font-semibold">Name : <span className='font-extralight text-gray-200'>{authUser?.fullName}</span></p>
                    <p className="border-b border-sky-500 p-2 font-semibold">Username : <span className='font-extralight text-gray-200'>@{authUser?.username}</span></p>
                    <p className="border-b border-sky-500 p-2 font-semibold">Gender : <span className='font-extralight text-gray-200'>{authUser?.gender}</span></p>
                    <p className="border-b border-sky-500 p-2 font-semibold">Member Since : <span className='font-extralight text-gray-200'>{convertDateFormat(authUser?.createdAt)}</span></p>


                </div>

            </div>


        </section>
    )
}

export default Profile;