import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ReadPersonal() {
  const [userData, setUserData] = useState([]); // State to hold user data

  useEffect(() => {
    // Load data from your JSON file using Axios
    axios.get('https://jsonplaceholder.typicode.com/users') // Replace if using a real DB
      .then(response => setUserData(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const filteredUser = userData.find(user => user.id === 1);

  const openEmail = () => {
    if (filteredUser) {
      const emailLink = `mailto:${filteredUser.email}`; // Construct email link
      window.location.href = emailLink; // Open email client
    } else {
      console.error('User with ID 1 not found'); // Handle user not found
    }
  };

  const makeCall = () => {
    if (filteredUser) {
      const phoneNumber = filteredUser.phone; // Extract phone number
      const phoneLink = `tel:${phoneNumber}`; // Construct phone call link
      window.location.href = phoneLink; // Open phone app
      
    } else {
      console.error('User with ID 1 not found');
    }
  };

  return (
    <div className="me-2 w-full max-w-sm p-4">
      <ul className="my-4 space-y-3">
        <li>
          {filteredUser && (
            <div key={filteredUser.id}>
              <button
                className="flex items-center p-3 text-base font-bold text-white rounded-lg bg-gray-600 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={openEmail}
              >
                 <span className="flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                </span>
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Mail Gönder
                </span>
              </button>
            </div>
          )}
        </li>
        <li>
          {filteredUser && (
            <div key={filteredUser.id}>
              <button
                className="flex items-center p-3 text-base font-bold text-white rounded-lg bg-gray-600 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={makeCall}
              >
                 <span className="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                </span>
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Ara!
                </span>
              </button>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
}

export default ReadPersonal;
