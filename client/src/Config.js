import axios from "axios"


export const axiosInstance = axios.create({
  baseURL: "https://babzzz-amazon-clone.herokuapp.com/api/",
});