import React, { useContext } from 'react';
import { UserContext } from '../components/UserContext';

export default function HomePageName() {
  const { user } = useContext(UserContext);

  return (
    <div className="flex flex-col content-around">
      <div className="justify-items-end">
        <h3 className="text-2xl font-large text-white">{user.firstname}</h3>
        <span className="text-sm text-white">{user.lastname}</span>
      </div>
    </div>
  );
}
