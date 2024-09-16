import React, { useState } from 'react';
import ProfileImage from './ProfileImage';
import TabNavigation from './TabNavigation';
import PersonalInfo from './PersonalInfo';
import CompanyInfo from './CompanyInfo';
import SocialInfo from './SocialInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faEdit } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import ImageDropzone from './../../forms/elements/ImageDropzone'; // ImageDropzone importu

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
  const [isCoverImageModalOpen, setIsCoverImageModalOpen] = useState(false);
  const [newCoverImage, setNewCoverImage] = useState<string | undefined>(coverImage); // Kapak resmi state
  const userInitial = contactInfo.name ? contactInfo.name.charAt(0).toUpperCase() : 'U';

  // Kapak fotoğrafı güncelleme işlemi
  const handleCoverImageUpload = (imageBase64: string) => {
    setNewCoverImage(imageBase64);
    setIsCoverImageModalOpen(false); // Modalı kapat
  };

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
      <div className="relative w-full h-32">
        {newCoverImage ? (
          <img src={newCoverImage} alt="Cover" className="w-full h-full object-cover rounded-t-lg" />
        ) : (
          <div
            className="w-full h-full rounded-t-lg"
            style={{
              backgroundImage: `url('/cover_img.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
        )}
        {/* Kapak fotoğrafı düzenleme ikonu */}
        <button
          onClick={() => setIsCoverImageModalOpen(true)}
          className="absolute top-2 right-2 bg-green p-1 rounded-full shadow-md"
        >
          <FontAwesomeIcon icon={faEdit} className="text-darkgrey w-4 h-4" />
        </button>
      </div>

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

      {/* Kapak Resmi İçin Modal */}
      {isCoverImageModalOpen && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-darkgrey p-6 rounded-lg shadow-lg">
            <ImageDropzone
              onImageUpload={handleCoverImageUpload}
              label="Kapak Fotoğrafı"
              isCover
            />
            <button
              onClick={() => setIsCoverImageModalOpen(false)}
              className="mt-4 bg-green text-darkgrey px-4 py-2 rounded"
            >
              İptal
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileCard;
