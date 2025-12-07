import apiClient from '../../../core/network/api/ApiClient';

export async function login(payload: {email: string, password: string}) {
  return apiClient.post(`/auth/login`, payload);
}
export async function logout() {
  return apiClient.post(`/auth/logout`);
}
export async function me() {
  return apiClient.get(`/auth/me`);
}
