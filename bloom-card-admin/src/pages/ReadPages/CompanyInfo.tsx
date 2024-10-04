import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faMapMarkerAlt, faPhone, faEnvelope, faExternalLinkAlt, faMoneyBill, faFileInvoice } from '@fortawesome/free-solid-svg-icons';
import { getCompanyInfo } from '../../services/api'; // Axios üzerinden API çağrısı

interface CompanyInfo {
    companyName: string;
    companyAddress: string;
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
          <div className="flex items-center bg-custom-background border border-bordergrey text-white p-2 rounded-lg">
            <FontAwesomeIcon icon={faBuilding} className="mr-2 text-lg" />
            <span>{companyInfo.companyName}</span>
          </div>

          <div className="flex items-center bg-custom-background border border-bordergrey text-white p-2 rounded-lg">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-lg" />
            <span>{companyInfo.email}</span>
          </div>

          <div className="flex items-center bg-custom-background border border-bordergrey text-white p-2 rounded-lg">
            <FontAwesomeIcon icon={faPhone} className="mr-2 text-lg" />
            <span>{companyInfo.phone}</span>
          </div>

          <div className="flex items-center justify-between bg-custom-background border border-bordergrey text-white p-2 rounded-lg">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-lg" />
            <span>{companyInfo.companyAddress}</span>
          </div>
            <a
              href={getGoogleMapsLink(companyInfo.companyAddress)}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 text-white hover:text-darkgreen"
            >
              <FontAwesomeIcon icon={faExternalLinkAlt} className="mr-2 items-center text-lg" />
            </a>
          </div>

          <div className="flex items-center bg-custom-background border border-bordergrey text-white p-2 rounded-lg">
            <FontAwesomeIcon icon={faMoneyBill} className="mr-2 text-lg" />
            <span>{companyInfo.iban}</span>
          </div>
          
          <div className="flex items-center bg-custom-background border border-bordergrey text-white p-2 rounded-lg">
            <FontAwesomeIcon icon={faFileInvoice} className="mr-2 text-lg" />
            <span>{companyInfo.taxAdministrationNumber}</span>
          </div>

          <div className="flex items-center  bg-custom-background border border-bordergrey text-white p-2 rounded-lg">
            <FontAwesomeIcon icon={faBuilding} className="mr-2 text-lg" />
            <span>{companyInfo.taxadministration}</span>
          </div>
        </>
      )}
    </div>
  );
};

export default CompanyInfoTab;
