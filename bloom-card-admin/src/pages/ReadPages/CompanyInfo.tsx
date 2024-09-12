import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faMapMarkerAlt, faPhone, faEnvelope, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { getCompanyInfo } from '../../services/api'; // Axios üzerinden API çağrısı

interface CompanyInfo {
    companyName: string;
    companyLocationLink: string;
    email: string;
    phone: string;
    iban: string;
    taxAdministrationNumber: string;
    taxadministration: string;
    accept: boolean;
}

const CompanyInfoTab: React.FC = () => {
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo | null>(null);

  useEffect(() => {
    // API'den şirket bilgilerini çekiyoruz
    getCompanyInfo()
      .then((response) => {
        setCompanyInfo(response.data); // API'den dönen veriyi state'e atıyoruz
      })
      .catch((error) => {
        console.error('Error fetching company info:', error);
      });
  }, []);

  // Adresi Google Maps linkine çevirme fonksiyonu
  const getGoogleMapsLink = (address: string) => {
    const encodedAddress = encodeURIComponent(address); // Adresi URL dostu hale getiriyoruz
    return `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
  };

  return (
    <div className="space-y-4 text-sm text-gray-700">
      {companyInfo && (
        <>
          <div className="flex items-center border border-gray-700 text-white p-2 rounded-lg">
            <FontAwesomeIcon icon={faBuilding} className="mr-2 text-lg" />
            <span>{companyInfo.companyName}</span>
          </div>

          <div className="flex items-center border border-gray-700 text-white p-2 rounded-lg">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-lg" />
            <span>{companyInfo.email}</span>
          </div>

          <div className="flex items-center border border-gray-700 text-white p-2 rounded-lg">
            <FontAwesomeIcon icon={faPhone} className="mr-2 text-lg" />
            <span>{companyInfo.phone}</span>
          </div>

          <div className="flex items-center border border-gray-700 text-white p-2 rounded-lg">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-lg" />
            <span>{companyInfo.companyLocationLink}</span>
            <a
              href={getGoogleMapsLink(companyInfo.companyLocationLink)}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 text-blue-500 hover:text-blue-700"
            >
              <FontAwesomeIcon icon={faExternalLinkAlt} className="text-lg" />
            </a>
          </div>

          <div className="flex items-center border border-gray-700 text-white p-2 rounded-lg">
            <FontAwesomeIcon icon={faPhone} className="mr-2 text-lg" />
            <span>{companyInfo.iban}</span>
          </div>
          
          <div className="flex items-center border border-gray-700 text-white p-2 rounded-lg">
            <FontAwesomeIcon icon={faPhone} className="mr-2 text-lg" />
            <span>{companyInfo.taxAdministrationNumber}</span>
          </div>

          <div className="flex items-center border border-gray-700 text-white p-2 rounded-lg">
            <FontAwesomeIcon icon={faPhone} className="mr-2 text-lg" />
            <span>{companyInfo.taxadministration}</span>
          </div>
        </>
      )}
    </div>
  );
};

export default CompanyInfoTab;
