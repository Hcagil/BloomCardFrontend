import React, { useEffect, useState } from 'react';
import Header from './elements/Header';
import Tabs from './elements/Tabs';
import Button from './elements/Button'
import { getPersonalInfo } from '../../services/api'; // Backend'den veri çekmek için API fonksiyonunu import edin

const ProfilePage: React.FC = () => {
  const [profileData, setProfileData] = useState({
    coverImage: '',
    profileImage: '',
    name: '',
    surname: '',
    email: '',
    phone: '',
    userInitial: '',
  });

  useEffect(() => {
    // Backend'den profil verilerini çekiyoruz
    const fetchProfileData = async () => {
      try {
        const response = await getPersonalInfo(); // API çağrısı
        const data = response.data;

        // API'den gelen verileri state'e koyuyoruz
        setProfileData({
          coverImage: data.coverImage,
          profileImage: data.profileImage,
          name: data.name,
          surname: data.surname,
          email: data.email,
          phone: data.phone,
          userInitial: data.name.charAt(0), // İsim baş harfi
        });
      } catch (error) {
        console.error('Profil verileri alınamadı:', error);
      }
    };

    fetchProfileData();
  }, []);

  return (
    <div className="bg-grey min-h-screen flex justify-center items-start py-10">
      
      <div className="bg-darkgrey shadow-md rounded-lg w-full max-w-4xl mx-auto p-6">
        
        {/* Header bileşenine backend'den gelen verileri gönderiyoruz */}
        <Header
          coverImage={profileData.coverImage}
          profileImage={profileData.profileImage}
          name={profileData.name}
          surname={profileData.surname}
          email={profileData.email}
          phone={profileData.phone}
          userInitial={profileData.userInitial}
        />
        <Tabs />
        <Button
          name={profileData.name}
          surname={profileData.surname}
          email={profileData.email}
          phone={profileData.phone}
        />
      </div>
    </div>
  );
};

export default ProfilePage;
