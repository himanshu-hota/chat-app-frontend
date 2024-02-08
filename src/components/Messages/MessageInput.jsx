import React, { useState } from 'react';
import { BsSend } from 'react-icons/bs';
import useSendMessage from '../../hooks/useSendMessage';
import Loader from '../Loader/Loader';


const MessageInput = () => {

    const [message, setMessage] = useState('');
    const { loading, sendMessage } = useSendMessage();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!message) return;

        await sendMessage(message);
        setMessage('');
    }
    return (
        <form className="px-6 my-3 flex justify-between items-center gap-4 " onSubmit={handleSubmit}>
            <div className="w-full">
                <input type="text" value={message} onChange={e => setMessage(e.target.value)} className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white' placeholder='Send a message' />
            </div>


            <button type="submit" className=' text-black rounded-full bg-sky-600 p-3 hover:text-white'>{loading ? <Loader /> : <BsSend className='text-2xl font-bold' />}</button>

        </form >
    )
}




export default MessageInput;