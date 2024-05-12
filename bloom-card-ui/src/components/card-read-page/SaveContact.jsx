import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Contact() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSaveContact = (name, phone, email) => {
    // Create a vCard file
    const vcard = `BEGIN:VCARD\nVERSION:4.0\nFN:${name}\nTEL;TYPE=work,voice:${phone}\nEMAIL:${email}\nEND:VCARD`;
    const blob = new Blob([vcard], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);

    const newLink = document.createElement('a');
    newLink.download = `${name}.vcf`;
    newLink.textContent = name;
    newLink.href = url;

    newLink.click();
  };

  return (
    <div className='mt-10 mb-5'>
      <button 
        className="fixed bottom-4 right-4 z-10 flex items-center p-3 text-base  text-darkgrey font-bold rounded-full bg-green hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={() => handleSaveContact(userData[0].name, userData[0].phone, userData[0].email)}>
          
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
          </svg>
          </button>
    </div>
  );
}

export default Contact;
