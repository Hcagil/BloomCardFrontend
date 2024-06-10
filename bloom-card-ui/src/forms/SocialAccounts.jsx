import React, { useState, useEffect } from 'react';
import { Formik, Form } from 'formik';
import axios from 'axios';
import Input from "../components/form/Input";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebook, faLinkedin, faGlobe } from '@fortawesome/free-brands-svg-icons';

const SocialAccounts = ({ socialAccounts, setSocialAccounts }) => {
  const [type, setType] = useState('');
  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');
  const [showInput, setShowInput] = useState(false);
  const [editingIndex, setEditingIndex] = useState(-1);

  useEffect(() => {
    const savedSocialAccounts = localStorage.getItem('socialAccounts');
    if (savedSocialAccounts) {
      setSocialAccounts(JSON.parse(savedSocialAccounts));
    }
  }, [setSocialAccounts]);

  const handleTypeSelection = (selectedType, defaultUrl) => {
    setType(selectedType);
    setUrl(defaultUrl);
  };

  const handleAddLink = () => {
    if (!type || !url || !title) return;
    const newLink = { type, url, title };
    let newLinks;
    if (editingIndex >= 0) {
      newLinks = [...socialAccounts.links];
      newLinks[editingIndex] = newLink;
      setEditingIndex(-1);
    } else {
      newLinks = socialAccounts.links ? socialAccounts.links.concat(newLink) : [newLink];
    }
    setSocialAccounts({ ...socialAccounts, links: newLinks });
    localStorage.setItem('socialAccounts', JSON.stringify({ ...socialAccounts, links: newLinks }));
    setType('');
    setUrl('');
    setTitle('');
    setShowInput(false);

    axios.post('http://localhost:8080/api/socialInfo/', newLink, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error.response);
      });
  };

  const handleEditLink = (index) => {
    const link = socialAccounts.links[index];
    setType(link.type);
    setUrl(link.url);
    setTitle(link.title);
    setEditingIndex(index);
    setShowInput(true);
  };

  const handleDeleteLink = (index) => {
    const newLinks = socialAccounts.links.filter((_, i) => i !== index);
    setSocialAccounts({ ...socialAccounts, links: newLinks });
    localStorage.setItem('socialAccounts', JSON.stringify({ ...socialAccounts, links: newLinks }));
  };

  const openLink = (linkUrl) => {
    window.open(linkUrl, "_blank");
  };

  return (
    <div className="bg-darkgrey px-6 py-2">
      <Formik
        initialValues={socialAccounts}
      >
        {() => (
          <Form
            action="http://localhost:8080/api/socialInfo/"
            method="POST"
            className="p-6 m-4 grid rounded mx-auto gap-y-4 max-w-xl shadow-lg"
          >
            {socialAccounts.links && socialAccounts.links.map((link, index) => (
              <div key={link.url} className="flex items-center justify-between rounded-lg bg-gray-300 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <button
                  className="flex items-center p-3 text-base font-bold text-darkgrey"
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
                <button onClick={() => handleEditLink(index)}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                  </svg>
                </button>
                <button onClick={() => handleDeleteLink(index)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </button>
                </div>
              </div>
            ))}
            <div className="bg-darkgrey px-6 py-2">
              {!showInput && (
                <button
                  className="block w-full rounded-md bg-green px-3.5 py-2.5 text-center text-sm font-semibold text-darkgrey shadow-sm hover:bg-darkgreen focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  onClick={() => setShowInput(true)}
                  type="button"
                >
                  Yeni Link Ekle
                </button>
              )}
              {showInput && (
                <div className="bg-darkgrey px-6 py-2">
                  <div className="flex flex-col w-full h-full gap-6 lg:grid ">
                    <div className="w-full flex justify-around">
                      <button onClick={() => handleTypeSelection('Instagram', 'https://www.instagram.com/')}>
                        <FontAwesomeIcon icon={faInstagram} className="text-2xl" color="white"/>
                      </button>
                      <button onClick={() => handleTypeSelection('Twitter', 'https://twitter.com/')}>
                        <FontAwesomeIcon icon={faTwitter} className="text-2xl" color="white"/>
                      </button>
                      <button onClick={() => handleTypeSelection('Facebook', 'https://www.facebook.com/')}>
                        <FontAwesomeIcon icon={faFacebook} className="text-2xl" color="white"/>
                      </button>
                      <button onClick={() => handleTypeSelection('Linkedin', 'https://linkedin.com/')}>
                        <FontAwesomeIcon icon={faLinkedin} className="text-2xl" color="white"/>
                      </button>
                      <button onClick={() => handleTypeSelection('Web', 'https://')} className="text-2xl" >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8" color="white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                      </svg>

                      </button>
                    </div>
                    <div className='w-full gap-y-4'>
                      <Input
                        label="Link"
                        name="url"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                      />
                      <Input
                        label="Başlık"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </div>
                    <div>
                      <button
                        className="block w-full rounded-md bg-green px-3.5 py-2.5 text-center text-sm font-semibold text-darkgrey shadow-sm hover:bg-darkgreen focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        onClick={handleAddLink}
                        type="button"
                      >
                        Kaydet
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SocialAccounts;
