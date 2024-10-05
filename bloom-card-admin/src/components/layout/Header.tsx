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

          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* Logout Button */}
            <LogoutButton />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
