import axios from "axios";

const instance = axios.create({
  baseURL: "https://babzzz-amazon-clone.herokuapp.com/",
});

export default instance;