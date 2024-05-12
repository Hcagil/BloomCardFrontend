import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PhotoGallery({ id='2' }) {
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`);
        setPhoto(response.data);
      } catch (error) {
        console.error('Error fetching photo:', error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="p-4">
      {photo && (
        <div className="p-2 mr-2">
          <img src={photo.url} alt={photo.title} className="w-full h-full rounded-full" />
        </div>
      )}
    </div>
  );
}

export default PhotoGallery;
