import React from 'react';

interface ProfileImageProps {
  profileImage?: string;
  userInitial: string;
}

const ProfileImage: React.FC<ProfileImageProps> = ({ profileImage, userInitial }) => {
  return (
    <div className="absolute top-25 left-1/2 transform -translate-x-1/2 -translate-y-12">
      {profileImage ? (
        <img
          src={profileImage}
          alt="User Profile"
          className="w-24 h-24 rounded-full border-4 border-white shadow-md object-cover"
        />
      ) : (
        <div className="w-24 h-24 bg-gray-300 text-black-100 rounded-full flex items-center justify-center text-4xl font-bold border-4 border-white shadow-md">
          {userInitial}
        </div>
      )}
    </div>
  );
};

export default ProfileImage;
