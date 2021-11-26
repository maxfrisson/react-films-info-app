import axios from "axios";

export const instance = axios.create({
  baseURL: "https://kinopoiskapiunofficial.tech/",
  headers: {
    "X-API-KEY": "25eaf476-5a6a-4298-b9f9-1ab420f06426",
    "Content-Type": "application/json",
  },
});

export const filmAPI = {
  getFilmById(id: number | string) {
    return instance.get(`api/v2.2/films/${id}`);
  },
  getFilmsByKeyword(keyword: number | string) {
    return instance.get(`/api/v2.1/films/search-by-keyword?keyword=${keyword}&page=1`);
  },
};
