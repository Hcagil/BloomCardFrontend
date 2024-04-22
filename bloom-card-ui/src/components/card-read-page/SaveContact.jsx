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
    <div>
     
      <button 
        className="flex items-center p-3 text-base  text-white rounded-lg bg-gray-600 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={() => handleSaveContact(userData[0].name, userData[0].phone, userData[0].email)}>Kişilere Kaydet</button>
    </div>
  );
}

export default Contact;
