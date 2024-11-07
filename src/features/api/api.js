import api from "./axios";

export const fetchTrendingData = async () => {
  try {
    const response = await api.get("/trending/all/week");
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
