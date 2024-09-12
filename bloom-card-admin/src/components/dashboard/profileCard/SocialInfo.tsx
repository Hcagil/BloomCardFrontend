import React from 'react';
import SocialLink from './SocialLink';

interface SocialInfoProps {
  links: { type: string; url: string; title: string }[];
  getSocialIcon: (url: string) => any;
}

const SocialInfo: React.FC<SocialInfoProps> = ({ links, getSocialIcon }) => {
  return (
    <div className="text-sm text-gray-700 space-y-4">
      {links.length === 0 ? (
        <p>Sosyal medya bağlantısı yok.</p>
      ) : (
        links.map((link, index) => (
          <SocialLink key={`${link.url}-${index}`} link={link} icon={getSocialIcon(link.url)} />
        ))
      )}
    </div>
  );
};

export default SocialInfo;
