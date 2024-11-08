import api from "./axios";

export const fetchTrendingData = async (page = 1) => {
  try {
    const response = await api.get(`/trending/all/week?page=${page}`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
