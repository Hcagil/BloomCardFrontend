import React, { useState } from 'react';
import ProfileImage from './ProfileImage';
import CoverImage from './CoverImage';
import TabNavigation from './TabNavigation';
import PersonalInfo from './PersonalInfo';
import CompanyInfo from './CompanyInfo';
import SocialInfo from './SocialInfo';
import { faGlobe, faEdit } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

interface ProfileCardProps {
  contactInfo: {
    name: string;
    surname: string;
    email: string;
    phone: string;
  };
  companyInfo: {
    companyName: string;
    companyAddress: string;
    email: string;
    phone: string;
    iban?: string;
    taxAdministrationNumber?: string;
    taxadministration?: string;
  };
  socialAccounts: {
    links: { type: string; url: string; title: string }[];
  };
  profileImage?: string;
  coverImage?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ contactInfo, companyInfo, socialAccounts, profileImage, coverImage }) => {
  const [activeTab, setActiveTab] = useState<'personal' | 'company' | 'social'>('personal');
  const userInitial = contactInfo.name ? contactInfo.name.charAt(0).toUpperCase() : 'U';

 
  // Sosyal medya platformları için ikon eşlemesi
  const getSocialIcon = (url: string) => {
    if (url.includes('instagram.com')) {
      return faInstagram;
    } else if (url.includes('facebook.com')) {
      return faFacebook;
    } else if (url.includes('twitter.com')) {
      return faTwitter;
    } else if (url.includes('linkedin.com')) {
      return faLinkedin;
    } else {
      return faGlobe; // Varsayılan ikon
    }
  };

  return (
    <div className="bg-darkgrey shadow-md rounded-lg relative max-w-xs overflow-hidden h-[700px]">
      {/* Kapak Görseli */}
      <CoverImage coverImage={coverImage}/>
      {/* Profil Fotoğrafı */}
      <ProfileImage profileImage={profileImage} userInitial={userInitial} />

      <div className="mt-12 pt-6 text-center">
        <h2 className="text-xl font-semibold text-white">{contactInfo.name} {contactInfo.surname}</h2>
      </div>

      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="mt-4 px-4 h-[300px] overflow-auto space-y-4">
        {activeTab === 'personal' && <PersonalInfo contactInfo={contactInfo} />}
        {activeTab === 'company' && <CompanyInfo companyInfo={companyInfo} />}
        {activeTab === 'social' && <SocialInfo links={socialAccounts.links} getSocialIcon={getSocialIcon} />}
      </div>
    </div>
  );
};

export default ProfileCard;
