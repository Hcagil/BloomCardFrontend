import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useParams } from 'react-router-dom';


function ReadSocial() {
  const [socialLinks, setSocialLinks] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos') // Örnek bir API adresi
      .then(response => setSocialLinks(response.data))
      .catch(error => console.error('Error fetching social links:', error));
  }, []);

  const openLink = (linkUrl) => {
    window.open(linkUrl, '_blank');
  };

  return (
    <div className="me-2 w-full max-w-sm p-4">
      <ul className="my-4 space-y-3">
        {socialLinks.map((link, index) => (
          <li key={index} onClick={() => openLink(link.url)} style={{ cursor: 'pointer' }}>
            <div className="flex items-center justify-between rounded-lg bg-gray-300 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <span className="flex-1 p-3 text-base font-bold text-darkgrey">
                {link.type == 'Instagram' && <FontAwesomeIcon icon={faInstagram} className="mr-2" />}
                {link.type == 'Twitter' && <FontAwesomeIcon icon={faTwitter} className="mr-2" />}
                {link.type === 'Facebook' && <FontAwesomeIcon icon={faFacebook} className="mr-2" />}
                {link.type === 'Linkedin' && <FontAwesomeIcon icon={faLinkedin} className="mr-2" />}
                {link.title}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReadSocial;
