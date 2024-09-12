import React, { useState } from 'react';
import PersonalInfo from '../PersonalInfo';
import CompanyInfo from '../CompanyInfo';
import SocialInfo from '../SocialInfo';

const ProfileTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('personalInfo');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'personalInfo':
        return <PersonalInfo />;
      case 'companyInfo':
        return <CompanyInfo />;
      case 'socialAccounts':
        return <SocialInfo />;
      default:
        return <PersonalInfo />;
    }
  };

  return (
    <div>
      <div className="flex justify-center mt-4 space-x-4">
        <button
          onClick={() => setActiveTab('personalInfo')}
          className={`text-sm py-2 px-4 ${
            activeTab === 'personalInfo'
              ? 'bg-green text-darkgrey border-b-4 border-green rounded-lg'
              : 'bg-transparent text-white hover:text-green border rounded-lg border-green'
          }`}
        >
          Kişisel Bilgiler
        </button>
        <button
          onClick={() => setActiveTab('companyInfo')}
          className={`text-sm py-2 px-4 ${
            activeTab === 'companyInfo'
              ? 'bg-green text-darkgrey border-b-4 border-green rounded-lg'
              : 'bg-transparent text-white hover:text-green border rounded-lg border-green'
          }`}
        >
          Şirket Bilgileri
        </button>
        <button
          onClick={() => setActiveTab('socialAccounts')}
          className={`text-sm py-2 px-4 ${
            activeTab === 'socialAccounts'
              ? 'bg-green text-darkgrey border-b-4 border-green rounded-lg'
              : 'bg-transparent text-white hover:text-green border rounded-lg border-green'
          }`}
        >
          Sosyal Hesaplar
        </button>
      </div>
      <div className="mt-4">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default ProfileTabs;
