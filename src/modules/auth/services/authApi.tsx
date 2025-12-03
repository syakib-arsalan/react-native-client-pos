import apiClient from "../../../core/network/api/apiClient";

export async function login(payload: string) {
    return apiClient.post(`/auth/login/${payload}`);
}
export async function logout() {
    return apiClient.post(`/auth/logout`);
}
export async function me() {
    return apiClient.get(`/auth/me`);
}