import React from 'react';

interface TabNavigationProps {
  activeTab: 'personal' | 'company' | 'social';
  setActiveTab: (tab: 'personal' | 'company' | 'social') => void;
}

const TabNavigation: React.FC<TabNavigationProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex justify-around mt-4">
      <button
        onClick={() => setActiveTab('personal')}
        className={`text-sm py-2 px-4 ${activeTab === 'personal' ? 'bg-green text-darkgrey border-b-4 border-green rounded-sm' : 'bg-transparent text-white hover:text-green border-b-2 border-transparent'}`}
      >
        Kişisel Bilgiler
      </button>
      <button
        onClick={() => setActiveTab('company')}
        className={`text-sm py-2 px-4 ${activeTab === 'company' ? 'bg-green text-darkgrey border-b-4 border-green rounded-sm' : 'bg-transparent text-white hover:text-green border-b-2 border-transparent'}`}
      >
        Şirket Bilgileri
      </button>
      <button
        onClick={() => setActiveTab('social')}
        className={`text-sm py-2 px-4 ${activeTab === 'social' ? 'bg-green text-darkgrey border-b-4 border-green rounded-sm' : 'bg-transparent text-white hover:text-green border-b-2 border-transparent'}`}
      >
        Sosyal Medya
      </button>
    </div>
  );
};

export default TabNavigation;
