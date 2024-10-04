import React, { useState } from 'react';
import LogoutButton from '../../logout/LogoutButton';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-darkgrey shadow-xl">
      <div className="mx-auto max-w px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
            <h1 className=" text-white text-xl lg:text-2xl font-bold flex-shrink-0">
              <b className='text-green'>Bloom</b>Card
            </h1>
          </div>

          {/* Profile Picture and Menu Section */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* Profile Picture as Button */}
            <button
              onClick={toggleMenu}
              className="bg-gray border border-green p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <img
                className="h-8 w-8 rounded-full"
                src="https://via.placeholder.com/150"
                alt="User profile"
              />
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
              <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-darkgrey ring-1 ring-black ring-opacity-5 text-white focus:outline-none top-full">
                <LogoutButton />
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
