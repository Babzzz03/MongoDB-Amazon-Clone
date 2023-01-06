import axios from "axios";

const instance = axios.create({
  baseURL: "https://courageous-garment-colt.cyclic.app/api/",
});

export default instance;
