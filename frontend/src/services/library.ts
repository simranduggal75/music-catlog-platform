import api from "@/lib/axios";
import { Album } from "@/types/library";

export const getLibrary = async (): Promise<Album[]> => {
  const response = await api.get("/api/library");
  return response.data;
};

export const addAlbum = async (album: Album) => {
  const response = await api.post("/api/library", album);
  return response.data;
};

export const updateAlbum = async (
  id: number,
  album: Album
) => {
  const response = await api.put(`/api/library/${id}`, album);
  return response.data;
};

export const deleteAlbum = async (id: number) => {
  await api.delete(`/api/library/${id}`);
};