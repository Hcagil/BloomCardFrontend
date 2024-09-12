import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import FormInput from '../elements/FormInput';
import FormButton from '../elements/FormButton';

interface SocialLinkInputProps {
    editingIndex: number | null;
    onAddLink: (link: { type: string; url: string; title: string }) => void;
    onCancel: () => void;
    existingLink?: { type: string; url: string; title: string };
}

const SocialLinkInput: React.FC<SocialLinkInputProps> = ({ editingIndex, onAddLink, onCancel, existingLink }) => {
    const [type, setType] = useState(existingLink?.type || '');
    const [url, setUrl] = useState(existingLink?.url || '');
    const [title, setTitle] = useState(existingLink?.title || '');

    const handleTypeSelection = (selectedType: string, defaultUrl: string) => {
        setType(selectedType);
        setUrl(defaultUrl);
    };

    const handleAddLink = () => {
        if (!type || !url || !title) return;
        onAddLink({ type, url, title });
    };

    return (
        <div className=" px-6 py-2">
            <div className="flex flex-col w-full h-full gap-6 lg:grid">
                <div className="w-full flex justify-around">
                    <button onClick={() => handleTypeSelection('Instagram', 'https://www.instagram.com/')}>
                        <FontAwesomeIcon icon={faInstagram} className="text-2xl hover:text-[#E1306C]" color="white" />
                    </button>
                    <button onClick={() => handleTypeSelection('Twitter', 'https://twitter.com/')}>
                        <FontAwesomeIcon icon={faTwitter} className="text-2xl hover:text-[#1DA1F2]" color="white" />
                    </button>
                    <button onClick={() => handleTypeSelection('Facebook', 'https://www.facebook.com/')}>
                        <FontAwesomeIcon icon={faFacebook} className="text-2xl hover:text-[#4267B2]" color="white" />
                    </button>
                    <button onClick={() => handleTypeSelection('Linkedin', 'https://linkedin.com/')}>
                        <FontAwesomeIcon icon={faLinkedin} className="text-2xl hover:text-[#2867B2]" color="white" />
                    </button>
                    <button onClick={() => handleTypeSelection('Web', 'https://')} className="text-2xl">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 hover:text-[#c7f650]" color="white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                        </svg>
                    </button>
                </div>
                <div className='w-full gap-y-4'>
                    <FormInput
                        label="Link"
                        name="url"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                    />
                    <FormInput
                        label="Başlık"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <FormButton 
                        text="Ekle"
                        onClick={() => handleAddLink()}
                        isSubmitting={false}
                        type="button"
                    />
                </div>
               
            </div>
        </div>
    );
};

export default SocialLinkInput;
