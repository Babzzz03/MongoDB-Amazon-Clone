import axios from "axios"


export const axiosInstance = axios.create({
  baseURL: "https://courageous-garment-colt.cyclic.app/api/",
});
