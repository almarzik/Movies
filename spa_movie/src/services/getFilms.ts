import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export const getFilms = (): Promise<AxiosResponse> => {
     const options: AxiosRequestConfig = {
          method: "GET",
          url: `https://api.tvmaze.com/search/shows?q=book`,
     };

     return axios.request(options);
};



export default getFilms;
