import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import ProfileImage from '../../../components/dashboard/profileCard/ProfileImage';

interface ButtonProps {
  coverImage?: string;
  profileImage?: string;
  name: string;
  surname: string;
  
  email: string;
  phone: string;
}

const Button: React.FC<ButtonProps> = ({ coverImage, profileImage, name, surname, email, phone }) => {
  const [showText, setShowText] = useState(false); // İlk tıklamada yazıyı göstermek için state
  const [saved, setSaved] = useState(false); // Kaydetme işlemi gerçekleştikten sonra durumu tutar

  const handleButtonClick = () => {
    if (!showText) {
      // İlk tıklamada "Rehbere Kaydet" yazısını göster
      setShowText(true);
    } else if (!saved) {
      // İkinci tıklamada rehbere kaydetme fonksiyonunu çalıştır
      handleSaveToContacts(`${name} ${surname}`, phone, email);
      setSaved(true); // Kaydedildiğini işaretle
    }
  };
  
  const handleSaveToContacts = (name: string, phone: string, email: string) => {
    // vCard dosyası oluşturma
    const vcard = `BEGIN:VCARD\nVERSION:4.0\nFN:${name}\nTEL;TYPE=work,voice:${phone}\nEMAIL:${email}\nEND:VCARD`;
    const blob = new Blob([vcard], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);

    // İndirme linki oluştur
    const newLink = document.createElement('a');
    newLink.download = `${name}.vcf`; // Dosya adı
    newLink.href = url;
    newLink.click();
  };
  {/*
  const handleSendInfo = () => {
    console.log('Bilgilerini gönderme fonksiyonu çağrıldı.');
  };
  */}

  return (
    <div className="w-full relative">
      {/* Masaüstü için Butonlar */}
      <div className="hidden md:flex justify-center mt-6 space-x-4">
        <button
          onClick={() => handleSaveToContacts(`${name} ${surname}`, phone, email)}
          className="h-12 rounded bg-green text-darkgrey px-6 flex items-center justify-center shadow-lg hover:bg-darkgreen transition"
          aria-label="Rehbere Kaydet"
        >
          Rehbere Kaydet
        </button>
      {/** 
        <button
          onClick={handleSendInfo}
          className="h-12 rounded bg-green text-darkgrey px-6 flex items-center justify-center shadow-lg hover:bg-darkgreen transition"
          aria-label="Bilgilerini Gönder"
        >
          Bilgilerini Gönder
        </button>
        */}
      </div>



      {/* Mobil için Save Button (Sticky) */}
      <div className="md:hidden fixed bottom-4 right-4 flex items-center space-x-2">
      <button
        onClick={handleButtonClick}
        className="w-12 h-12 rounded-full bg-green text-darkgrey flex items-center justify-center shadow-lg hover:bg-darkgreen transition"
        aria-label="Rehbere Kaydet"
      >
        <FontAwesomeIcon icon={faUserPlus} className="w-6 h-6" />
      </button>
      
      {/* İlk tıklamada "Rehbere Kaydet" yazısını göster */}
      {showText && !saved && (
        
        <button 
        onClick={handleButtonClick}
        className="text-darkgrey bg-green rounded-lg p-2 hover:bg-darkgreen">
          Rehbere Kaydet
        </button>
      )}
      
      {/* Eğer kayıt başarıyla yapıldıysa, "Kaydedildi" yazısı */}
      {saved && (
        <span className="text-green-500 bg-green rounded-lg p-2">
          Kaydedildi!
        </span>
      )}
    </div>

      {/* Mobil için Send Info Button (Altında Görünmeli) 
      <div className="md:hidden mt-4 text-center">
        <button
          onClick={handleSendInfo}
          className="w-full h-12 rounded bg-green text-darkgrey flex items-center justify-center shadow-lg hover:bg-darkgreen transition"
          aria-label="Bilgilerini Gönder"
        >
          Bilgilerini Gönder
        </button>
      </div>
      */}
    </div>
  );
};

export default Button;
