import React, { useState } from 'react';
import useConversation from '../zustand/useConversation';
import { toast } from 'react-hot-toast';

const useSendMessage = () => {
    const [loading, setLoading] = useState(false);
    const { selectedConversation, messages, setMessages } = useConversation();

    const sendMessage = async (message) => {
        try {
            setLoading(true);
            const token = localStorage.getItem('chat-user-token');
            const ENDPOINT = import.meta.env.VITE_ENDPOINT;
            const url = ENDPOINT + `/api/messages/send/${selectedConversation?._id.toString()}`
            const options = {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`, // Replace with your actual 
                },
                body: JSON.stringify({ message }),

            }
            const res = await fetch(url, options);
            const data = await res.json();

            if (!res.ok || data.error) {
                throw new Error(data.err);
            }

            setMessages([...messages, data])
        } catch (err) {
            toast.error(err.message);
        } finally {
            setLoading(false);
        }
    }


    return { sendMessage, loading };
}

export default useSendMessage;