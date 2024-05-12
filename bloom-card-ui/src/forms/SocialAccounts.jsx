import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import axios from 'axios';
import Input from "../components/form/Input";

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
    } else {
      setUrl('');
    }
  };

  const handleSubmit = (values, { resetForm }) => {
    axios.post('https://jsonplaceholder.typicode.com/posts', values)
      .then(response => {
        setLinks([...links, response.data]);
        resetForm();
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const handleAddLink = () => {
    if (!type || !url || !title) return;
    const newLink = { type, url, title };
    setLinks([...links, newLink]);
    setType('');
    setUrl('');
    setTitle('');
    setShowInput(false);
  };

  return (
    <div className="bg-darkgrey px-6 py-2">
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Form className="p-6 m-4 grid rounded mx-auto gap-y-4 max-w-xl shadow-lg">
          {!showInput && (
            <button
              className="block w-full rounded-md bg-green px-3.5 py-2.5 text-center text-sm font-semibold text-darkgrey shadow-sm hover:bg-darkgreen focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={() => setShowInput(true)}
            >
              Yeni Link Ekle
            </button>
          )}
          {showInput && (
            <div className="flex flex-col w-full h-full gap-6 lg:grid lg:grid-cols-2">
              <div className="w-full">
              <select
                className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={type}
                onChange={handleChangeType}
              >
                <option value="">Seçiniz</option>
                <option value="Instagram">Instagram</option>
                <option value="Twitter">Twitter</option>
                <option value="Facebook">Facebook</option>
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
                >
                  Kaydet
                </button>
                </div>
              </div>
            
          )}
          {links && links.map((link, index) => (
            <div key={index} className="mt-4 p-4">
              <p>Type: {link.type}</p>
              <p>URL: {link.url}</p>
              <p>Title: {link.title}</p>
            </div>
          ))}
        </Form>
      </Formik>
    </div>
  );
};

export default SocialAccounts;
