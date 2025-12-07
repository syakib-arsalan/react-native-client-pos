
import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { logout as apiLogout } from '../modules/auth/services/AuthApi';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }: any) => {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);

  const login = async (token: any) => {
    setIsLoading(true);
    setUserToken(token);
    await AsyncStorage.setItem('token', token);
    setIsLoading(false);
  };

  const logout = async () => {
    try {
        await apiLogout();
    } catch (error) {
        console.error("Gagal logout dari server:", error);
    } finally {
        setIsLoading(true);
        setUserToken(null);
        await AsyncStorage.removeItem('token');
        setIsLoading(false);
    }
  };

  useEffect(() => {
    const checkToken = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        setUserToken(token);
      } catch (error: any) {
        console.error(`Failed to load token. ${error}`);
      } finally {
        setIsLoading(false);
      }
    };

    checkToken();
  }, []);

  return (
    <AuthContext.Provider value={{ login, logout, isLoading, userToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};