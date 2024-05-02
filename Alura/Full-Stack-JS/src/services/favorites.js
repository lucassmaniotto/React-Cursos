import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/favorites",
});

const getFavoriteBooks = async () => {
  const response = await api.get("/");
  return response.data;
};

const postFavoriteBook = async (id) => {
  const response = await api.post(`/${id}`);
  return response.data;
}

const deleteFavoriteBook = async (id) => {
  const response = await api.delete(`/${id}`);
  return response.data;
}

export {
  getFavoriteBooks,
  postFavoriteBook,
  deleteFavoriteBook,
}