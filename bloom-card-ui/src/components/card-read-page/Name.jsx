import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Name() {
  const [userData, setUserData] = useState([]); // State to hold user data

  useEffect(() => {
    // Load data from your JSON file using Axios
    axios.get('https://jsonplaceholder.typicode.com/users') // Replace 'data.json' with your file path
      .then(response => setUserData(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const filteredUser = userData.find(user => user.id === 1); // Filter for id=1


  return (
    <div className="flex flex-col items-center pb-10">
      {filteredUser && ( // Check if filteredUser exists
        <div key={filteredUser.id}>
          <h3 className="mb-1 text-xl font-medium text-gray-900 text-black">{filteredUser.username}</h3>
          <span className="text-sm text-gray-500 text-gray-400">{filteredUser.name}</span>
        </div>
      )}
    </div>
  );
}
