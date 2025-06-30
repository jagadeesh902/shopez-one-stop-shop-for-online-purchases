// src/hooks/useAuth.js
import { useEffect, useState } from 'react';

const useAuth = () => {
  const [userToken, setUserToken] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('userToken');
    setUserToken(token);
  }, []);

  return { isLoggedIn: !!userToken, userToken };
};

export default useAuth;
