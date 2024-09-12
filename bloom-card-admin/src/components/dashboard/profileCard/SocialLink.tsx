import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface SocialLinkProps {
  link: { url: string; title: string };
  icon: any;
}

const SocialLink: React.FC<SocialLinkProps> = ({ link, icon }) => {
  return (
    <div className="flex items-center border border-gray-700 text-white p-2 rounded-lg">
      <FontAwesomeIcon icon={icon} className="mr-2 text-lg" />
      <span>{link.title}</span>
    </div>
  );
};

export default SocialLink;
