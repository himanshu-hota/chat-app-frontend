import React from 'react';
import SearchInput from './SearchInput';

import Conversations from './Conversations';


const Sidebar = ({ classes }) => {
    return (
        <div className={` w-full max-h-[90vh] flex flex-col border-r border-slate-500 p-4 ${classes} `}>
            <SearchInput />
            <div className="divider px-3"></div>
            <Conversations />

        </div>
    )
}

export default Sidebar;