import axios, { AxiosRequestConfig } from "axios";

interface Data<T> {
  number: number;
  offset: number;
  results: T[];
}

const axiosBase = axios.create({
  baseURL: "https://api.spoonacular.com",
  headers: {
    "x-api-key": "320257234ef641e490b92f02e0617585",
  },
});

class ApiClient<T> {
  constructor(private endPoint: string) {}

  getAll(config: AxiosRequestConfig) {
    return axiosBase
      .get<Data<T>>(this.endPoint, config)
      .then((res) => res.data);
  }
}

export default ApiClient;
