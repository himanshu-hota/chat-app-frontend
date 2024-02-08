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
                const url = `/api/messages/${selectedConversation._id.toString()}`;
                const res = await fetch(url);
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