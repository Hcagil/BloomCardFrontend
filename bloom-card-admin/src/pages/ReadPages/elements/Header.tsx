import React from 'react';
import ProfileImage from '../../../components/dashboard/profileCard/ProfileImage';

interface HeaderProps {
  coverImage?: string;
  profileImage?: string;
  name: string;
  surname: string;
  userInitial: string;
  email: string;
  phone: string;
}

const Header: React.FC<HeaderProps> = ({ coverImage, profileImage, name, surname, userInitial, email, phone }) => {

  return (
    <div className="w-full relative">
      {/* Kapak Görseli */}
      <div className="relative w-full h-56 md:h-64 rounded-lg shadow-sm">
        <img
          src={coverImage ? coverImage : '/cover_img.png'}
          alt="Cover"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Profil Fotoğrafı ya da Kullanıcı İsim Baş Harfi */}
      <ProfileImage profileImage={profileImage} userInitial={userInitial} />

      {/* İsim ve Soyisim */}
      <h1 className="text-center text-2xl font-bold text-white mt-20 text-transform: capitalize ">{name} {surname}</h1>

      
      
    </div>
  );
};

export default Header;
