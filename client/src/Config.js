import axios from "axios"


export const axiosInstance = axios.create({
  baseURL: "https://babz-amazonn.herokuapp.com/api/",
});