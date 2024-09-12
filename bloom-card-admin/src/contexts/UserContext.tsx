// src/contexts/UserContext.tsx
import React, { createContext, useContext, useState } from 'react';
import { useKeycloak } from '@react-keycloak/web';

interface UserContextProps {
  user: any;
}

const UserContext = createContext<UserContextProps | null>(null);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { keycloak } = useKeycloak();
  const [user, setUser] = useState(keycloak.tokenParsed);

  return (
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
