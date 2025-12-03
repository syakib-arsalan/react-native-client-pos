import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

const apiClient = axios.create({
  baseURL: 'http://laravel-pos.test/api',
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

apiClient.interceptors.request.use(
  async (config: AxiosRequestConfig) => {
    const token = await AsyncStorage.getItem('token');
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  error => {
    if (error.response) {
      const { status, data } = error.response;
      switch (status) {
        case 401:
          AsyncStorage.removeItem('authToken');
          Alert.alert('Sesi Berakhir', 'Silakan login kembali.');
          break;
        case 403:
          Alert.alert(
            'Akses Ditolak',
            'Anda tidak memiliki izin untuk mengakses ini.',
          );
          break;
        case 404:
          Alert.alert('Error', 'Data yang diminta tidak ditemukan.');
          break;
        case 500:
          Alert.alert(
            'Server Error',
            'Terjadi masalah di server. Silakan coba lagi nanti.',
          );
          break;
        default:
          const errorMessage =
            data?.message || 'Terjadi kesalahan yang tidak diketahui.';
          Alert.alert('Error', errorMessage);
          break;
      }
    } else if (error.request) {
      Alert.alert(
        'Koneksi Error',
        'Tidak dapat terhubung ke server. Periksa koneksi internet Anda.',
      );
    } else {
      Alert.alert('Error', 'Terjadi kesalahan dalam konfigurasi request.');
    }
    return Promise.reject(error);
  },
);

export default apiClient;
