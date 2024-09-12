import React, { useState } from 'react';

const SocialAccountsTab: React.FC = () => {
  const [socialAccounts, setSocialAccounts] = useState({
    linkedIn: 'linkedin.com/in/johndoe',
    twitter: 'twitter.com/johndoe',
    instagram: 'instagram.com/johndoe',
  });

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium">LinkedIn:</label>
        <a href={`https://${socialAccounts.linkedIn}`} target="_blank" rel="noopener noreferrer" className="text-blue-500">
          {socialAccounts.linkedIn}
        </a>
      </div>
      <div>
        <label className="block text-sm font-medium">Twitter:</label>
        <a href={`https://${socialAccounts.twitter}`} target="_blank" rel="noopener noreferrer" className="text-blue-500">
          {socialAccounts.twitter}
        </a>
      </div>
      <div>
        <label className="block text-sm font-medium">Instagram:</label>
        <a href={`https://${socialAccounts.instagram}`} target="_blank" rel="noopener noreferrer" className="text-blue-500">
          {socialAccounts.instagram}
        </a>
      </div>
    </div>
  );
};

export default SocialAccountsTab;
