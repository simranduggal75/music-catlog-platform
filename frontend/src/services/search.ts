import api from "@/lib/axios";

export const searchMusic = async (
  query: string,
  type: string
) => {
  const response = await api.get("/api/search", {
    params: {
      query,
      type,
    },
  });

  return response.data;
};