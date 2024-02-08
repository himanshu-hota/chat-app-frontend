import React, { useEffect, useState } from 'react';
import useConversation from '../zustand/useConversation';
import { toast } from 'react-hot-toast';

const useGetMessages = () => {
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedConversation } = useConversation();

    useEffect(() => {
        const getMessages = async () => {

            try {
                setLoading(true);
                const token = localStorage.getItem('chat-user-token');
                const ENDPOINT = import.meta.env.VITE_ENDPOINT;
                const url = ENDPOINT + `/api/messages/${selectedConversation._id.toString()}`;
                const options = {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`, // Replace with your actual 
                    },
                    credentials: 'include',
                }
                const res = await fetch(url, options);
                const data = await res.json();
                setMessages(data);

            } catch (err) {
                toast.error(data.error);
            } finally {
                setLoading(false);
            }
        }

        if (selectedConversation?._id.toString()) {
            getMessages();
        }
    }, [selectedConversation?._id.toString()])


    return { loading, messages };
}

export default useGetMessages;