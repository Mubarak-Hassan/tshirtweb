// src/Dropdown.js

import React, { useState } from 'react';

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(prevIsOpen => !prevIsOpen);
    };

    const closeDropdown = (event) => {
        if (!event.target.closest('.dropdown')) {
            setIsOpen(false);
        }
    };

    // Attach event listener to close dropdown when clicking outside
    React.useEffect(() => {
        document.addEventListener('click', closeDropdown);
        return () => {
            document.removeEventListener('click', closeDropdown);
        };
    }, []);

    return (
        <div className="relative inline-block text-left dropdown">
            <div>
                <button 
                    onClick={toggleDropdown}
                    className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Options
                    <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
                    </svg>
                </button>
            </div>

            {isOpen && (
                <div className="absolute right-0 z-10 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical">
                    <div className="py-1" role="none">
                        <a href="#" className="text-black block px-4 py-2 text-lg hover:bg-gray-100">Profile</a>
                        <a href="#" className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100">Settings</a>
                        <a href="#" className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100">Logout</a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
{/* <div className="border-2 border-red-600   py-4 px-4 rounded-3xl">
<div className="flex space-x-40">
  <p className="font-bold text-2xl">Smart Tracking</p>
  <button
    className="text-2xl"
    onClick={() => setActiveContentIndex(0)}
  >
    &#11167;
  </button>
</div>
<TabContent onSelect={activeContentIndex} />
</div>

<div className="border-2 border-red-600 flex space-x-40 py-4 px-4 rounded-3xl">
<p className="font-bold text-2xl">Smart Tracking</p>
<button className="text-2xl" onClick={() => setActiveContentIndex(1)}>
  &#11167;
</button>
</div>
<div className="border-2 border-red-600 flex space-x-40 py-4 px-4 rounded-3xl">
<p className="font-bold text-2xl">Smart Tracking</p>
<button className="text-2xl" onClick={() => setActiveContentIndex(2)}>
  &#11167;
</button>
</div> */}
