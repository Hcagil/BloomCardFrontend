import React, { useState } from 'react';
import axios from 'axios';

const ProfilePhotoUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onload = (e) => setImageUrl(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await axios.post('/upload-profile-photo', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Fotoğraf başarıyla yüklendi!', response);
    } catch (error) {
      console.error('Fotoğraf yükleme hatası:', error);
    }
  };

  return (
    <div className="flex flex-col items-center">
      {imageUrl ? (
        <img
          src={imageUrl}
          alt="Profil Fotoğrafı"
          className="w-48 h-48 rounded-full object-cover"
        />
      ) : (
        <div className="w-48 h-48 rounded-full bg-gray-300 flex items-center justify-center">
          <label className="cursor-pointer">
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
            <span className="text-gray-500">Dosya Seç</span>
          </label>
        </div>
      )}
      

      <button className="mt-4" onClick={handleSubmit}>

      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
      </svg>
      </button>
    </div>
  );
};

export default ProfilePhotoUploader;
