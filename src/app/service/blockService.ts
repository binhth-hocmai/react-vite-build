// import { Block } from "@/types/Block";
import { createServiceNoToken } from "./axios";

export interface Block {
  precent: number;
  description: string;
}

const instance = createServiceNoToken(import.meta.env.VITE_BASE_URL);

export const getBlocks = async () => {
  const url = '/binhth/resource/blocks';
  const response = await instance.get(url);
  return response.data.data;
}

export const createBlocks = async (data: Block) => {
  const url = '/binhth/resource/blocksádwda'
  const response = await instance.post(url, data)
  return response.data;
}
