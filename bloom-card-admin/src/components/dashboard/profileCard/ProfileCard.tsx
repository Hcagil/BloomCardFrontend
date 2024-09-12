import React, { useState } from 'react';
import ProfileImage from './ProfileImage';
import TabNavigation from './TabNavigation';
import PersonalInfo from './PersonalInfo';
import CompanyInfo from './CompanyInfo';
import SocialInfo from './SocialInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons'; // Varsayılan ikon
import { faInstagram, faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'; // Sosyal medya ikonları


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
    <div className="bg-darkgrey shadow-md rounded-lg relative max-w-xs overflow-hidden h-[500px]">
      {coverImage ? (
        <img src={coverImage} alt="Cover" className="w-full h-32 object-cover rounded-t-lg" />
      ) : (
        <div
          className="w-full h-32 rounded-t-lg"
          style={{
            backgroundImage: `url('/cover_img.png')`, // Resim yolunu burada belirtiyorsun
            backgroundSize: 'cover', // Görselin tam olarak sığmasını sağlar
            backgroundPosition: 'center', // Görselin ortalanmasını sağlar
    }}
  ></div>
      )}
      <ProfileImage profileImage={profileImage} userInitial={userInitial} />
      <div className="mt-12 pt-6 text-center">
        <h2 className="text-xl font-semibold text-white">{contactInfo.name} {contactInfo.surname}</h2>
      </div>
      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="mt-4 px-4 h-[200px] overflow-auto space-y-4">
        {activeTab === 'personal' && <PersonalInfo contactInfo={contactInfo} />}
        {activeTab === 'company' && <CompanyInfo companyInfo={companyInfo} />}
        {activeTab === 'social' && <SocialInfo links={socialAccounts.links} getSocialIcon={getSocialIcon} />}
      </div>
    </div>
  );
};

export default ProfileCard;
