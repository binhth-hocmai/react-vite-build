import { createServiceNoToken } from "./axios";

const instance = createServiceNoToken(import.meta.env.VITE_BASE_URL)

export const getUsers = async () => {
  const url = '/binhth/resource/users';
  const response = await instance.get(url);
  return response.data;
}
