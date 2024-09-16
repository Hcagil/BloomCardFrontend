import React, { useState } from 'react';
import ImageDropzone from './../../forms/elements/ImageDropzone';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faEdit } from '@fortawesome/free-solid-svg-icons';

interface ProfileImageProps {
  profileImage?: string;
  userInitial: string;
}

const ProfileImage: React.FC<ProfileImageProps> = ({ profileImage, userInitial }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newProfileImage, setNewProfileImage] = useState<string | undefined>(profileImage);

  // Profil fotoğrafını güncelleme işlemi
  const handleImageUpload = (imageBase64: string) => {
    setNewProfileImage(imageBase64);
    setIsEditing(false); // Modalı kapat
  };

  return (
    <div className="relative">
      <div className="absolute top-25 left-1/2 transform -translate-x-1/2 -translate-y-12">
        {newProfileImage ? (
          <img
            src={newProfileImage}
            alt="User Profile"
            className="w-24 h-24 rounded-full border-4 border-white shadow-md object-cover"
          />
        ) : (
          <div className="w-24 h-24 bg-gray-300 text-black-100 rounded-full flex items-center justify-center text-4xl font-bold border-4 border-white shadow-md">
            {userInitial}
          </div>
        )}

        {/* Profil fotoğrafını düzenleme ikonu */}
        <button
          onClick={() => setIsEditing(true)}
          className="absolute bottom-0 right-0 bg-green p-1 rounded-full shadow-md"
        >
          <FontAwesomeIcon icon={faEdit} className="text-darkgrey w-4 h-4" />
        </button>
      </div>

      {/* Modal ve ImageDropzone */}
      {isEditing && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <ImageDropzone
              onImageUpload={handleImageUpload}
              label="Profil Fotoğrafı"
            />
            <button
              onClick={() => setIsEditing(false)}
              className="mt-4 bg-green text-darkgrey px-4 py-2 rounded"
            >
              İptal
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileImage;
