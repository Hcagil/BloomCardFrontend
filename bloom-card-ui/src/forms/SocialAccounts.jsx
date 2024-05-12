import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import axios from 'axios';
import Input from "../components/form/Input";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const SocialAccounts = () => {
  const initialValues = {
    type: '',
    url: '',
    title: '',
  };

  const [links, setLinks] = useState([]);
  const [type, setType] = useState('');
  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');
  const [showInput, setShowInput] = useState(false);

  const handleChangeType = (e) => {
    const selectedType = e.target.value;
    setType(selectedType);
    if (selectedType === 'Instagram') {
      setUrl('https://www.instagram.com/');
    } else if (selectedType === 'Twitter') {
      setUrl('https://twitter.com/');
    } else if (selectedType === 'Facebook') {
      setUrl('https://www.facebook.com/');
    } else if (selectedType === 'Linkedin') {
      setUrl('https://linkedin.com/');
    } else {
      setUrl('');
    }
  };

  const handleSubmit = (values, { resetForm }) => {
    axios.post('https://jsonplaceholder.typicode.com/posts', values)
      .then(response => {
        setLinks([...links, response.data]); // Use spread operator to create a new array
        resetForm();
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const handleAddLink = () => {
    if (!type || !url || !title) return;
    const newLink = { type, url, title };
    setLinks(links.concat(newLink)); // Use concat to create a new array
    setType('');
    setUrl('');
    setTitle('');
    setShowInput(false);
  };

  const openLink = (linkUrl) => {
    window.open(linkUrl, "_blank");
  };

  return (
    <div className="bg-darkgrey px-6 py-2">
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        {formik => (
          <Form className="p-6 m-4 grid rounded mx-auto gap-y-4 max-w-xl shadow-lg">
            {links.map((link, index) => (
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
                  <div className="flex flex-col w-full h-full gap-6 lg:grid lg:grid-cols-2">
                    <div className="w-full">
                      <select
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={type}
                        onChange={handleChangeType}
                      >
                        <option value="">Seçiniz</option>
                        <option value="Instagram">Instagram</option>
                        <option value="Twitter">Twitter</option>
                        <option value="Facebook">Facebook</option>
                        <option value="Linkedin">Linkedin</option>
                      </select>
                    </div>

                    <div className='w-full gap-y-4'>
                      <Input
                        label="Link"
                        name="Instagram"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                      />

                      <Input
                        label="Başlık"
                        name="Instagram"
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
