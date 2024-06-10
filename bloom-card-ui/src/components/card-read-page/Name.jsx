import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function Name() {
  const [userData, setUserData] = useState([]); // State to hold user data
  const { id } = useParams(); // URL'den userId'yi alın

  useEffect(() => {
    // Load data from your JSON file using Axios
    axios.get('https://jsonplaceholder.typicode.com/users') 
      .then(response => setUserData(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, [id]);

  const filteredUser = userData.find(user => user.id === parseInt(id, 10)); 


  return (
    <div className="flex flex-col content-around">
      {filteredUser && ( // Check if filteredUser exists
        <div className="justify-items-end" key={filteredUser.id}>
          <h3 className="text-2xl font-large text-white">{filteredUser.username}</h3>
          <span className="text-sm  text-white">{filteredUser.name}</span>
        </div>
      )}
    </div>
  );
}
