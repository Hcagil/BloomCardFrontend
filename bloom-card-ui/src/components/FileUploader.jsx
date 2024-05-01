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
    if (!selectedFile) return; // Check if a file is selected before submitting

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', formData, {
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
            <span className="text-gray-500">Profil fotoğrafı seç</span>
          </label>
        </div>
      )}

      <button className="mt-4" onClick={handleSubmit} disabled={!selectedFile}>
        Yükle
      </button>
    </div>
  );
};

export default ProfilePhotoUploader;
 