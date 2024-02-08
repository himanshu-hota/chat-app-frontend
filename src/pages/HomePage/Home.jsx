import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import MessageContainer from '../../components/Messages/MessageContainer';

const Home = () => {
    return (
        <div className='flex justify-center items-center h-screen w-[100vw] p-4 '>


            <div className='w-[90vw] h-[90vh] md:w-[80vw] md:h-[80vh] p-4 flex flex-col md:flex-row gap-6 rounded-lg  bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 overflow-y-scroll md:overflow-hidden'>

                <Sidebar classes='basis-1/4' />
                <MessageContainer className='basis-3/4' />

            </div>
        </div>
    )
}

export default Home;