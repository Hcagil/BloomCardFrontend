import React, { useState } from 'react';
import ReadPersonal from './info-pages/ReadPersonal';
import ReadCompany from './info-pages/ReadCompany';
import ReadSocial from './info-pages/ReadSocial';

export default function Tabs() {
  const [activeTab, setActiveTab] = useState('Kişisel Bilgiler');

  const handleButtonClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <>
    <div className='items-center flex justify-between space-x-2'>
      <button
        type="button"
        data-ripple-light="true"
        className={`align-middle select-none font-sans font-bold text-center  transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-6 rounded-lg ${activeTab === 'Kişisel Bilgiler' ? 'bg-blue-500 text-white' : 'bg-gray-500 text-white'} shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none`}
        onClick={() => handleButtonClick('Kişisel Bilgiler')}
      >
        Kişisel Bilgiler
      </button>

      <button
        type="button"
        data-ripple-light="true"
        className={`align-middle select-none font-sans font-bold text-center  transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-6 rounded-lg ${activeTab === 'Şirket Bilgileri' ? 'bg-blue-500 text-white' : 'bg-gray-500 text-white'} shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none`}
        onClick={() => handleButtonClick('Şirket Bilgileri')}
      >
        Şirket Bilgileri
      </button>

      <button
        type="button"
        data-ripple-light="true"
        className={`align-middle select-none font-sans font-bold text-center  transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-6 rounded-lg ${activeTab === 'Sosyal Medya' ? 'bg-blue-500 text-white' : 'bg-gray-500 text-white'} shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none`}
        onClick={() => handleButtonClick('Sosyal Medya')}
      >
        Sosyal Medya
      </button>
      </div>
      <div className='w-full flex justify-between'>
      {activeTab === 'Kişisel Bilgiler' && <ReadPersonal />}
      {activeTab === 'Şirket Bilgileri' && <ReadCompany />}
      {activeTab === 'Sosyal Medya' && <ReadSocial />}
    </div>
    
    </>
    );
    {/* All components are now nested within the main return statement */}
    
  
}
