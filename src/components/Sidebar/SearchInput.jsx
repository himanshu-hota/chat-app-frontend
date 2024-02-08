import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import useConversation from '../../zustand/useConversation';
import useGetConversation from '../../hooks/useGetConversation';
import { toast } from 'react-hot-toast';

const SearchInput = () => {
    const [search, setSearch] = useState('');
    const { setSelectedConversation } = useConversation();
    const { conversation } = useGetConversation();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!search) return;
        if (search.length < 3) {
            toast('Search must be at least 3 characters!', {
                icon: '👩‍💻',
            });
            return;
        }

        const con = conversation?.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));

        if (con) {
            setSelectedConversation(con);
            setSearch('');
        } else {
            toast.error('No such user found');
        }

    }

    return (
        <form className='w-full flex items-center justify-between gap-2' onSubmit={handleSubmit}>
            <input type="text" placeholder='Search...' value={search} onChange={(e) => setSearch(e.target.value)} className='input input-bordered rounded-full w-full' />
            <button type="submit" className='btn btn-circle bg-sky-500 text-white' ><FaSearch /></button>
        </form>
    )
}

export default SearchInput;