import React, { useState, useRef } from 'react';
import ImageDropzone from './../../forms/elements/ImageDropzone';
import ImageCropper from './../../forms/elements/ImageCropper'; // ImageCropper bileşeni
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';

interface CoverImageProps {
  coverImage?: string;
}

const ProfileImage: React.FC<CoverImageProps> = ({ coverImage}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isCoverImageModalOpen, setIsCoverImageModalOpen] = useState(false);
  const [newCoverImage, setNewCoverImage] = useState<string | undefined>(coverImage);
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
    setNewCoverImage(croppedImage); // Kırpılan resmi profil fotoğrafı olarak ayarla
    setIsCropping(false); // Kırpma modundan çık
    setIsEditing(false); // Modalı kapat
  };

  // Modal dışında bir yere tıklandığında kapatma
  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setIsEditing(false); // Modalı kapat
      setIsCropping(false); // Kırpma işlemini iptal et
    }
  };

  return (
    <div className="relative">
      <div className="relative w-full h-32">
        {newCoverImage ? (
          <img src={newCoverImage} alt="Cover" className="w-full h-full object-cover rounded-t-lg" />
        ) : (
          <div
            className="w-full h-full rounded-t-lg"
            style={{
              backgroundImage: `url('/cover_img.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
        )}
        {/* Kapak fotoğrafı düzenleme ikonu */}
        <button
          onClick={() => setIsEditing(true)}
          className="absolute top-2 right-2 bg-green p-1 rounded-full shadow-md"
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
              <ImageDropzone onImageUpload={handleImageUpload} label="Kapak Fotoğrafı" />
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
