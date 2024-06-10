import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../components/UserContext';

export default function HomePageName() {
  const { user } = useContext(UserContext);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  useEffect(() => {
    // Get stored values from localStorage
    const storedFirstName = localStorage.getItem('firstName');
    const storedLastName = localStorage.getItem('lastName');

    // If stored values exist, set the state with these values
    if (storedFirstName) {
      setFirstName(storedFirstName);
    } else {
      // If no stored value, save the user context value to localStorage
      localStorage.setItem('firstName', user.firstname);
      setFirstName(user.firstname);
    }

    if (storedLastName) {
      setLastName(storedLastName);
    } else {
      // If no stored value, save the user context value to localStorage
      localStorage.setItem('lastName', user.lastname);
      setLastName(user.lastname);
    }
  }, []);

  useEffect(() => {
    // Update local storage whenever user context changes
    if (user.firstname !== firstName) {
      localStorage.setItem('firstName', user.firstname);
      setFirstName(user.firstname);
    }

    if (user.lastname !== lastName) {
      localStorage.setItem('lastName', user.lastname);
      setLastName(user.lastname);
    }
  }, [user.firstname, user.lastname]);

  return (
    <div className="flex flex-col content-around">
      <div className="justify-items-end">
        <h3 className="text-2xl font-large text-white">{firstName}</h3>
        <span className="text-sm text-white">{lastName}</span>
      </div>
    </div>
  );
}
