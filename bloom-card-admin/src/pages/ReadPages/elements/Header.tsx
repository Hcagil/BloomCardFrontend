import React from 'react';

interface HeaderProps {
  coverImage?: string;
  profileImage?: string;
  name: string;
  surname: string;
  userInitial: string;
  email: string;
  phone: string;
}

const Header: React.FC<HeaderProps> = ({ coverImage, profileImage, name, surname }) => {
  return (
    <div className="w-full relative">
      {/* Cover Image */}
      <div className="w-full h-56 md:h-64 rounded-lg shadow-sm">
        <img
          src={coverImage ? coverImage : '/cover_img.png'}
          alt="Cover"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Profile Image - Overlaps the Cover Image */}
      <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-12">
        <img
          src={profileImage}
          alt="User Profile"
          className="w-24 h-24 rounded-full border-4 border-white shadow-md object-cover"
        />
      </div>

      {/* Name and Surname */}
      <h1 className="text-center text-2xl font-bold text-white mt-16 capitalize">
        {name} {surname}
      </h1>
    </div>
  );
};

export default Header;
