import axios from "axios";

const api = axios.create({
  baseURL: "http://headprize.me:21073/api/"
});

export default api;
