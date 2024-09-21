import React, { useState, useCallback } from 'react';
import Cropper, { Area } from 'react-easy-crop';
import getCroppedImg from './getCroppedImg'; // Kırpılan resmi alacak fonksiyon
import { submitImage } from '../../../services/api'; // API'den submitImage fonksiyonunu alıyoruz
import FormButton from './FormButton'; // FormButton bileşenini alıyoruz

interface ImageCropperProps {
  imageSrc: string;
  onCropComplete: (croppedImage: string) => void;
}

const ImageCropper: React.FC<ImageCropperProps> = ({ imageSrc, onCropComplete }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false); // Yükleme durumu

  const onCropCompleteCallback = useCallback((croppedArea: Area, croppedAreaPixels: Area) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  // Resmi backend'e gönderme fonksiyonu
  const uploadToBackend = async (file: File) => {
    try {
      const response = await submitImage(file); // submitImage fonksiyonunu kullanarak resmi yüklüyoruz
      console.log('Yüklenen resim başarılı:', response.data);
    } catch (error) {
      console.error('Resim yükleme hatası:', error);
    }
  };

  const handleSave = async () => {
    if (croppedAreaPixels) {
      setIsSubmitting(true); // Yükleme başladığında buton durumu değiştir
      const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels);

      // Blob'dan bir File oluşturma
      const file = new File([croppedImage], 'cropped-image.jpg', { type: 'image/jpeg' });

      onCropComplete(croppedImage); // Kırpılan resmi frontend'de kullanmak için
      await uploadToBackend(file); // Resmi backend'e yükleme
      setIsSubmitting(false); // Yükleme tamamlandığında durumu güncelle
    }
  };

  return (
    <div>
      <div className="relative w-full h-64">
        <Cropper
          image={imageSrc}
          crop={crop}
          zoom={zoom}
          aspect={1}
          onCropChange={setCrop}
          onZoomChange={setZoom}
          onCropComplete={onCropCompleteCallback}
        />
      </div>
      <div className="mt-4 flex justify-between">
        <FormButton
          isSubmitting={isSubmitting} // Yükleme durumu
          text="Kaydet" // Buton metni
          onClick={handleSave} // Butona tıklanıldığında çalışacak fonksiyon
          className="bg-green text-darkgrey px-4 py-2 rounded"
        />
      </div>
    </div>
  );
};

export default ImageCropper;
