import axios from "axios";

export const instance = axios.create({
  baseURL: "https://kinopoiskapiunofficial.tech/",
  headers: {
    "X-API-KEY": "25eaf476-5a6a-4298-b9f9-1ab420f06426",
  },
});

export const filmAPI = {
  filmProfile(id: number | string) {
    return instance.get(`api/v2.2/films/${id}`);
  },
};
