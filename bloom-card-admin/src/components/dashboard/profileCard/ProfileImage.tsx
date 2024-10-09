import React, { useState, useRef } from 'react';
import ImageDropzone from './../../forms/elements/ImageDropzone';
import ImageCropper from './../../forms/elements/ImageCropper'; // ImageCropper bileşeni
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';

interface ProfileImageProps {
  profileImage?: string;
  userInitial: string;
}

const ProfileImage: React.FC<ProfileImageProps> = ({ profileImage, userInitial }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newProfileImage, setNewProfileImage] = useState<string | undefined>(profileImage);
  const [imageToCrop, setImageToCrop] = useState<string | null>(null);
  const [isCropping, setIsCropping] = useState(false);
  
  // Ref ile modal içeriğini yakalama
  const modalRef = useRef<HTMLDivElement>(null);

  // Fotoğraf yüklendiğinde kırpma için resmi ayarla
  const handleImageUpload = (imageBase64: string) => {
    setImageToCrop(imageBase64); // Yüklenen resmi kırpmak için ImageCropper'a gönderiyoruz
    setIsCropping(true); // Kırpma moduna geçiş yap
  };

  // Kırpma işlemi tamamlandığında kırpılan resmi kaydet
  const handleCropComplete = (croppedImage: string) => {
    setNewProfileImage(croppedImage); // Kırpılan resmi profil fotoğrafı olarak ayarla
    setIsCropping(false); // Kırpma modundan çık
    setIsEditing(false); // Modalı kapat
  };

  // Modal dışında bir yere tıklandığında kapatma
  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setIsEditing(false); 
      setIsCropping(false);
    }
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

      {/* Modal: Fotoğraf Yükleme ve Kırpma */}
      {isEditing && (
        <div
          className="fixed inset-0 bg-gray-700 bg-opacity-75 flex justify-center items-center z-50"
          onClick={handleClickOutside} // Modal dışına tıklamayı algılar
        >
          <div ref={modalRef} className="relative bg-darkgrey w-80 p-6 rounded-lg shadow-lg">
            {/* Modal kapatma ikonu */}
            <button
              onClick={() => {
                setIsEditing(false);
                setIsCropping(false); // Kırpma işlemini iptal et
              }}
              className="absolute top-2 right-2 text-white"
            >
              <FontAwesomeIcon icon={faTimes} className="text-xl" />
            </button>

            {/* Fotoğraf yüklenmişse kırpma işlemi yapılacak, yüklenmemişse yükleme yapılacak */}
            {!isCropping ? (
              <ImageDropzone onImageUpload={handleImageUpload} label="Profil Fotoğrafı" />
            ) : (
              <ImageCropper imageSrc={imageToCrop!} onCropComplete={handleCropComplete} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileImage;
