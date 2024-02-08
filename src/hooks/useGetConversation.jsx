import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useSocketContext } from '../context/SocketContext';

const useGetConversation = () => {
    const [loading, setLoading] = useState(false);
    const [conversation, setConversation] = useState([]);


    useEffect(() => {
        const getConversation = async () => {
            setLoading(true);
            try {
                const token = localStorage.getItem('chat-user-token');
                const ENDPOINT = import.meta.env.VITE_ENDPOINT;
                const url = ENDPOINT + `/api/users`;
                const options = {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`, // Replace with your actual 
                    },

                }
                const res = await fetch(url, options);
                const data = await res.json();

                if (!res.ok || data.error) {
                    throw new Error(data.error);
                }

                setConversation(data);
            } catch (err) {
                toast.error(err.message);
            } finally {
                setLoading(false);
            }
        }

        getConversation();

    }, [])



    return { loading, conversation };
}

export default useGetConversation;





// import React, { useEffect, useState } from 'react';
// import { toast } from 'react-hot-toast';

// const useGetConversation = () => {
//     const [loading, setLoading] = useState(false);
//     const [conversation, setConversation] = useState([]);


//     useEffect(() => {
//         const getConversation = async () => {
//             setLoading(true);
//             try {
//                 const url = '/api/users';
//                 const res = await fetch(url);
//                 const data = await res.json();

//                 if (!res.ok || data.error) {
//                     throw new Error(data.error);
//                 }

//                 setConversation(data);
//             } catch (err) {
//                 toast.error(err.message);
//             } finally {
//                 setLoading(false);
//             }
//         }

//         getConversation();



//     }, [])

//     return { loading, conversation };
// }

// export default useGetConversation;