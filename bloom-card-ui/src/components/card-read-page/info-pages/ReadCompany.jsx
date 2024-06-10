import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


function ReadCompanyInfo() {
  const [companyData, setCompanyData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/`)
      .then(response => setCompanyData(response.data))
      .catch(error => console.error('Error fetching company data:', error));
  }, [id]);

  if (!companyData) return <p>Loading...</p>;

  const { name, address, email, phone, website, company, iban, taxNumber } = companyData;

  const handleMailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${phone}`;
  };

  const handleWebsiteClick = () => {
    window.open(`http://${website}`, '_blank');
  };

  return (
    <div className="me-2 w-full max-w-sm p-4">
      <ul className="my-4 space-y-3">
        <li>
          <div className="flex items-center justify-between rounded-lg bg-gray-300 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span className="flex-1 p-3 text-base font-medium text-gray-700">
              {name}
            </span>
          </div>
        </li>
        {iban && (
          <li>
            <div className="flex items-center justify-between rounded-lg bg-gray-300 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <span className="flex-1 p-3 text-base font-medium text-gray-700">
                IBAN: {iban}
              </span>
            </div>
          </li>
        )}
        {phone && (
          <li>
            <div className="flex items-center justify-between rounded-lg bg-gray-300 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <span className="flex-1 p-3 text-base font-medium text-gray-700">
                Telefon: {phone}
              </span>
            </div>
          </li>
        )}
        {taxNumber && (
          <li>
            <div className="flex items-center justify-between rounded-lg bg-gray-300 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <span className="flex-1 p-3 text-base font-medium text-gray-700">
                Vergi Numarası: {taxNumber}
              </span>
            </div>
          </li>
        )}
        <li>
          <div className="flex items-center justify-between rounded-lg bg-gray-300 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span className="flex-1 p-3 text-base font-medium text-gray-700">
              Konum
            </span>
            <a
              href={`https://www.google.com/maps/place/${encodeURIComponent(address.street + ', ' + address.city)}`}
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 hover:text-blue-700 p-3"
            >
              Google Maps
            </a>
          </div>
        </li>
        <li onClick={handleMailClick} style={{ cursor: 'pointer' }}>
          <div className="flex items-center justify-between rounded-lg bg-gray-300 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span className="flex-1 p-3 text-base font-medium text-gray-700">
              Mail Gönder
            </span>
          </div>
        </li>
        <li onClick={handlePhoneClick} style={{ cursor: 'pointer' }}>
          <div className="flex items-center justify-between rounded-lg bg-gray-300 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span className="flex-1 p-3 text-base font-medium text-gray-700">
              Ara!
            </span>
          </div>
        </li>
        <li onClick={handleWebsiteClick} style={{ cursor: 'pointer' }}>
          <div className="flex items-center justify-between rounded-lg bg-gray-300 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span className="flex-1 p-3 text-base font-medium text-gray-700">
              Web Sitesi
            </span>
          </div>
        </li>
        <li>
          <div className="flex items-center justify-between rounded-lg bg-gray-300 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span className="flex-1 p-3 text-base font-medium text-gray-700">
              Şirket Bilgisi: {company.name}, {company.catchPhrase}, {company.bs}
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default ReadCompanyInfo;
