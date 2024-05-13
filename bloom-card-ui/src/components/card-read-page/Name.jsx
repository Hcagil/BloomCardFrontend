import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Name() {
  const [userData, setUserData] = useState([]); // State to hold user data

  useEffect(() => {
    // Load data from your JSON file using Axios
    axios.get('https://jsonplaceholder.typicode.com/users') 
      .then(response => setUserData(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const filteredUser = userData.find(user => user.id === 1); // Filter for id=1


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
