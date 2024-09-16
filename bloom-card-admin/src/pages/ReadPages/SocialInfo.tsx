import React, { useState, useEffect } from 'react';
import { getSocialInfo } from '../../services/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'; // Sosyal medya ikonları

interface SocialLink {
  type: string;
  url: string;
  title: string;
}

interface SocialInfo {
  links: SocialLink[];
}

const SocialAccountsTab: React.FC = () => {
  const [socialInfo, setSocialInfo] = useState<SocialInfo | null>(null);

  useEffect(() => {
    // API'den sosyal medya bilgilerini çekiyoruz
    getSocialInfo()
      .then((response) => {
        setSocialInfo(response.data); // API'den dönen veriyi state'e atıyoruz
      })
      .catch((error) => {
        console.error('Error fetching social info:', error);
      });
  }, []);

  // Sosyal medya ikonunu tipine göre seçme fonksiyonu
  const getSocialIcon = (type: string) => {
    switch (type) {
      case 'LinkedIn':
        return faLinkedin;
      case 'Twitter':
        return faTwitter;
      case 'GitHub':
        return faGithub;
        case 'Instagram':
        return faInstagram;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-4 text-sm text-gray-700">
      {socialInfo?.links.map((link) => (
        <div key={link.url} className="flex items-center bg-custom-background border border-gray-700 text-white p-2 rounded-lg">
          {getSocialIcon(link.type) && (
            <FontAwesomeIcon icon={getSocialIcon(link.type)!} className="mr-2 text-lg" />
          )}
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            {link.title}
          </a>
        </div>
      ))}
    </div>
  );
};

export default SocialAccountsTab;
