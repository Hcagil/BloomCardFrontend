import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Savebutton() {
  const [userData, setUserData] = useState([]); // State to hold user data

  useEffect(() => {
    // Load data from your JSON file using Axios
    axios.get('https://jsonplaceholder.typicode.com/users') // Replace if using a real DB
      .then(response => setUserData(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const filteredUser = userData.find(user => user.id === 1); // Filter for ID 1

  const addToAddressBookPrompt = () => {
    if (filteredUser) {
      const contactInfo = {
        name: filteredUser.name,
        email: filteredUser.email,
        phone: filteredUser.phone,
      }; // Create contact object

      // Prompt user to add contact
      const promptMessage = `Lütfen bu kişiyi rehberinize ekleyin:\n${filteredUser.name}\n${filteredUser.email}\n${filteredUser.phone}`;
      const promptResult = window.prompt(promptMessage); // Get user input

      // Check if user provided input
      if (promptResult) {
        // Attempt to open native address book app
        window.open('tel:'); // Replace with appropriate URI for address book app

        // Fill contact details with provided input (implementation depends on specific app)
        // This might require using device APIs or third-party libraries
      } else {
        console.log('User canceled adding contact');
      }
    } else {
      console.error('User with ID 1 not found');
    }
  };

  return (
    <div className="w-full max-w-sm p-4">
      <ul className="my-4 space-y-3">
        <li>
          {filteredUser && (
            <div key={filteredUser.id}>
              <button
                className="fixed flex items-center rounded-full p-3 text-base font-bold text-white rounded-lg bg-gray-600 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={addToAddressBookPrompt}
              >
                <span className="flex-1 ms-3 whitespace-nowrap">Rehbere Ekle</span>
                <span className="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-gray-400">
                  Popular
                </span>
              </button>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
}

export default Savebutton;
