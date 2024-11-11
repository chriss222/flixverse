import api from "./axios";

export const fetchTrendingData = async (page = 1, path = "all") => {
  try {
    const response = await api.get(`/trending/${path}/week?page=${page}`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
