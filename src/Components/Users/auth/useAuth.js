import { useState, useEffect } from 'react';
import api from './api';

const useAuth = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [role, setRole] = useState(null);

  useEffect(() => {
    api.get('/me').then((response) => {
      setAuthenticated(true);
      setRole(response.data.role);
    }).catch(() => {
      setAuthenticated(false);
    });
  }, []);

  const login = async (username, password) => {
    try {
      const response = await api.post('/login', { username, password });
      setAuthenticated(true);
      setRole(response.data.role);
    } catch (error) {
      setAuthenticated(false);
    }
  };

  const logout = async () => {
    try {
      await api.post('/logout');
      setAuthenticated(false);
    } catch (error) {
      console.error(error);
    }
  };

  return { authenticated, role, login, logout };
};