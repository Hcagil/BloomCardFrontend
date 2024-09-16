import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

interface PersonalInfoProps {
  contactInfo: {
    email?: string;
    phone?: string;
  };
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({ contactInfo }) => {
  return (
    <div className="text-sm text-gray-700 space-y-4">
      {/* Eğer email mevcutsa göster */}
      {contactInfo.email && (
        <div className="flex items-center border border-gray-700 text-white p-2 rounded-lg">
          <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-lg" />
          <span>{contactInfo.email}</span>
        </div>
      )}

      {/* Eğer telefon numarası mevcutsa göster */}
      {contactInfo.phone && (
        <div className="flex items-center border border-gray-700 text-white p-2 rounded-lg">
          <FontAwesomeIcon icon={faPhone} className="mr-2 text-lg" />
          <span>{contactInfo.phone}</span>
        </div>
      )}
    </div>
  );
};

export default PersonalInfo;
