// hooks/usePersistedState.js
import { useState, useEffect } from 'react';

const usePersistedState = (key, initialState) => {
  const [state, setState] = useState(() => {
    const savedState = localStorage.getItem(key);
    return savedState ? JSON.parse(savedState) : initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};

export default usePersistedState;
