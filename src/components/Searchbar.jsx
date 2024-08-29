    import React from 'react';
    import { IoSearch } from "react-icons/io5";

    const Searchbar = ({ searchQuery, setSearchQuery }) => {
        return (
            <div className=''>
                <form>
                    <div className='relative'>
                        <input
                            className='p-2 rounded-sm bg-slate-950 italic font-medium text-gray-400'
                            onChange={(e) => setSearchQuery(e.target.value)}
                            type="search"
                            placeholder='Search...'
                            value={searchQuery}
                        />
                        <IoSearch className='absolute right-2 top-3 text-gray-400' />
                    </div>
                </form>
            </div>
        );
    };

    export default Searchbar;
