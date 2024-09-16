import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import { getPersonalInfo } from '../../services/api'; // Axios'u api.ts'den import ediyoruz

interface PersonalInfo {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  profileImage: string;
  coverImage: string;
}

const ReadPersonal: React.FC = () => {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo | null>(null); // State to hold user data
  const { id } = useParams<{ id: string }>(); // URL'den userId'yi alın

  useEffect(() => {
    // API'den kullanıcı bilgilerini çekiyoruz
    getPersonalInfo()
      .then((response) => {
        setPersonalInfo(response.data); // API'den dönen veriyi state'e atıyoruz
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, [id]);

  const openEmail = () => {
    if (personalInfo) {
      const emailLink = `mailto:${personalInfo.email}`; // Construct email link
      window.location.href = emailLink; // Open email client
    }
  };

  const makeCall = () => {
    if (personalInfo) {
      const phoneLink = `tel:${personalInfo.phone}`; // Construct phone call link
      window.location.href = phoneLink; // Open phone app
    }
  };

  return (
    <div className=" space-y-4 text-sm ">
      {personalInfo && (
        <>
      
          {/* Email satırı */}
          <div
            className="flex items-center shadow-xl border border-bordergrey text-white p-2 rounded-lg cursor-pointer"
            onClick={openEmail}
          >
            <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-lg hover:text-green" />
            <span>{personalInfo.email}</span>
          </div>

          {/* Telefon satırı */}
          <div
            className="flex items-center shadow-xl border border-bordergrey text-white p-2 rounded-lg cursor-pointe"
            onClick={makeCall}
          >
            <FontAwesomeIcon icon={faPhone} className="mr-2 text-lg hover:text-green" />
            <span>{personalInfo.phone}</span>
          </div>
        </>
      )}
    </div>
  );
};

export default ReadPersonal;
