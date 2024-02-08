import React, { useState } from 'react';
import useConversation from '../zustand/useConversation';
import { toast } from 'react-hot-toast';

const useSendMessage = () => {
    const [loading, setLoading] = useState(false);
    const { selectedConversation, messages, setMessages } = useConversation();

    const sendMessage = async (message) => {
        try {
            setLoading(true);

            const url = `/api/messages/send/${selectedConversation?._id.toString()}`
            const options = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message })
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