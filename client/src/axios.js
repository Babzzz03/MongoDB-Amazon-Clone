import axios from "axios";

const instance = axios.create({
  baseURL: "https://babz-amazonn.herokuapp.com/",
});

export default instance;