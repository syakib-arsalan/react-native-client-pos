import apiClient from "../../../core/network/api/apiClient";

export async function getUsers(params: any) {
    return apiClient.get('/user', params);
}
export async function getUser(id: number) {
    return apiClient.get(`/user/${id}`);
}
export async function createUser(data: any) {
    return apiClient.post('/user', data);
}
export async function updateUser(id: number, data: any) {
    return apiClient.put(`/user${id}`, data);
}
export async function deleteUser(id: number) {
    return apiClient.delete(`/user/${id}`);
}