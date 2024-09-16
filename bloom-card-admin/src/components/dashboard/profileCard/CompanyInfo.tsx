import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faMapMarkerAlt, faPhone, faMoneyBill, faFileInvoice } from '@fortawesome/free-solid-svg-icons';

interface CompanyInfoProps {
  companyInfo: {
    companyName: string;
    companyAddress: string;
    email: string;
    phone: string;
    iban?: string;
    taxAdministrationNumber?: string;
    taxadministration?: string;
  };
}

const CompanyInfo: React.FC<CompanyInfoProps> = ({ companyInfo }) => {
  return (
    <div className="text-sm text-gray-700 space-y-4">
      {/* Şirket ismi */}
      {companyInfo.companyName && (
        <div className="flex items-center border border-gray-700 text-white p-2 rounded-lg">
          <FontAwesomeIcon icon={faBuilding} className="mr-2 text-lg" />
          <span>{companyInfo.companyName}</span>
        </div>
      )}
      
      {/* Şirket adresi */}
      {companyInfo.companyAddress && (
        <div className="flex items-center border border-gray-700 text-white p-2 rounded-lg">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-lg" />
          <span>{companyInfo.companyAddress}</span>
        </div>
      )}

      {/* Telefon numarası */}
      {companyInfo.phone && (
        <div className="flex items-center border border-gray-700 text-white p-2 rounded-lg">
          <FontAwesomeIcon icon={faPhone} className="mr-2 text-lg" />
          <span>{companyInfo.phone}</span>
        </div>
      )}

      {/* IBAN */}
      {companyInfo.iban && (
        <div className="flex items-center border border-gray-700 text-white p-2 rounded-lg">
          <FontAwesomeIcon icon={faMoneyBill} className="mr-2 text-lg" />
          <span>{companyInfo.iban}</span>
        </div>
      )}

      {/* Vergi numarası */}
      {companyInfo.taxAdministrationNumber && (
        <div className="flex items-center border border-gray-700 text-white p-2 rounded-lg">
          <FontAwesomeIcon icon={faFileInvoice} className="mr-2 text-lg" />
          <span>{companyInfo.taxAdministrationNumber}</span>
        </div>
      )}

      {/* Vergi dairesi */}
      {companyInfo.taxadministration && (
        <div className="flex items-center border border-gray-700 text-white p-2 rounded-lg">
          <FontAwesomeIcon icon={faFileInvoice} className="mr-2 text-lg" />
          <span>{companyInfo.taxadministration}</span>
        </div>
      )}
    </div>
  );
};

export default CompanyInfo;
