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

  const handleSendInfo = () => {
    console.log('Bilgilerini gönderme fonksiyonu çağrıldı.');
  };

  return (
    <div className="w-full relative">
      {/* Kapak Görseli */}
      <div
        className="relative w-full h-56 bg-cover bg-center rounded-b-lg border-2 border-yellow-500"
        style={{ backgroundImage: coverImage ? `url(${coverImage})` : `url('/cover_img.png')` }}
        
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-yellow-500 to-yellow-400 opacity-50 rounded-b-lg"></div>
      </div>

      {/* Profil Fotoğrafı ya da Kullanıcı İsim Baş Harfi */}
      <ProfileImage profileImage={profileImage} userInitial={userInitial} />

      {/* İsim ve Soyisim */}
      <h1 className="text-center text-2xl font-bold text-white mt-20 text-transform: capitalize ">{name} {surname}</h1>

      {/* Masaüstü için Sticky Butonlar */}
      <div className="hidden md:flex fixed bottom-0 left-0 w-full p-4 bg-blue-600 text-white space-x-4">
        <button
          onClick={() => handleSaveToContacts(`${name} ${surname}`, phone, email)}
          className="w-full h-12 rounded bg-blue-500 text-white flex items-center justify-center shadow-lg hover:bg-blue-700 transition"
          aria-label="Rehbere Kaydet"
        >
          Rehbere Kaydet
        </button>

        <button
          onClick={handleSendInfo}
          className="w-full h-12 rounded bg-green-500 text-white flex items-center justify-center shadow-lg hover:bg-green-700 transition"
          aria-label="Bilgilerini Gönder"
        >
          Bilgilerini Gönder
        </button>
      </div>

      {/* Mobil için Save Button (Sticky) */}
      <div className="md:hidden fixed bottom-4 right-4">
        <button
          onClick={() => handleSaveToContacts(`${name} ${surname}`, phone, email)}
          className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-lg hover:bg-blue-700 transition"
          aria-label="Rehbere Kaydet"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 14.25v6m-6-6v6m12-6v6m1.125-14.25H8.625m9-3.75h.75a2.25 2.25 0 0 1 2.25 2.25v12a2.25 2.25 0 0 1-2.25 2.25H6.375a2.25 2.25 0 0 1-2.25-2.25v-12a2.25 2.25 0 0 1 2.25-2.25h.75" />
          </svg>
        </button>
      </div>

      {/* Mobil için Send Info Button (Altında Görünmeli) */}
      <div className="md:hidden mt-4 text-center">
        <button
          onClick={handleSendInfo}
          className="w-full h-12 rounded bg-green-500 text-white flex items-center justify-center shadow-lg hover:bg-green-700 transition"
          aria-label="Bilgilerini Gönder"
        >
          Bilgilerini Gönder
        </button>
      </div>
    </div>
  );
};

export default Header;
