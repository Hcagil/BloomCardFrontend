import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

interface SocialLinkListProps {
  links: { type: string; url: string; title: string }[];
  onEdit: (index: number) => void;
  onDelete: (index: number) => void;
}

const SocialLinkList: React.FC<SocialLinkListProps> = ({ links, onEdit, onDelete }) => {
  const openLink = (linkUrl: string) => {
    window.open(linkUrl, "_blank");
  };

  return (
    <>
      {links.map((link, index) => (
        <div key={link.url} className="flex items-center justify-between rounded-lg border border-gray-500  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <button
            className="flex items-center p-3 text-base font-medium text-white"
            onClick={() => openLink(link.url)}
            type="button"
          >
            {link.type === 'Instagram' && <FontAwesomeIcon icon={faInstagram} className="mr-2" />}
            {link.type === 'Twitter' && <FontAwesomeIcon icon={faTwitter} className="mr-2" />}
            {link.type === 'Facebook' && <FontAwesomeIcon icon={faFacebook} className="mr-2" />}
            {link.type === 'Linkedin' && <FontAwesomeIcon icon={faLinkedin} className="mr-2" />}
            {link.title}
          </button>
          <div className='flex space-x-2 mr-5'>
            <button onClick={() => onEdit(index)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 hover:text-green" color="white">
                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
              </svg>
            </button>
            <button onClick={() => onDelete(index)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 hover:text-[#E1306C]" color="white">
                <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default SocialLinkList;
