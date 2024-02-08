import React, { useEffect, useRef } from 'react';

import Message from './Message';
import useGetMessages from '../../hooks/useGetMessages';
import MessageSkeleton from '../skeletons/MessageSkeleton';
import useListenMessages from '../../hooks/useListenMessages';

const Messages = () => {

    const { loading, messages } = useGetMessages();
    useListenMessages();
    const lastMessageRef = useRef();

    useEffect(() => {

        const timeOutId = setTimeout(() => {
            lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
        }, 100)

        return () => clearTimeout(timeOutId);

    }, [messages]);


    return (
        <div className='px-4 flex-1 overflow-auto'>
            {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
            {!loading && messages.length == 0 && (
                <p className="text-center">Send a message to start the conversation</p>
            )}

            {!loading && (
                messages.length > 0 && (
                    messages.map(message => (
                        <div key={message._id.toString()} ref={lastMessageRef}>
                            <Message message={message} />
                        </div>
                    ))
                )
            )}
        </div>


    )
}

export default Messages;