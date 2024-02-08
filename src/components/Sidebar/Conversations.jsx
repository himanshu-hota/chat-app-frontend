import React from 'react';
import Conversation from './Conversation';
import useGetConversation from '../../hooks/useGetConversation';
import { getRandomEmoji } from '../../utils/emojis';
import Loader from '../Loader/Loader';

const Conversations = () => {

    const { loading, conversation } = useGetConversation();

    return (
        <div className="py-2 flex flex-col overflow-auto">
            {loading && <Loader />}
            {!loading && (
                conversation.map((con, idx) => (
                    <Conversation key={con?._id.toString()} conversation={con} emoji={getRandomEmoji()} lastIdx={idx} />
                ))
            )}

        </div>
    )
}

export default Conversations;