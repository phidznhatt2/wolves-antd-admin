import axios from "axios";
import { get } from "./localStorage";

const instance = axios.create({
  baseURL: "https://twp-api.herokuapp.com/api/",
});

instance.interceptors.request.use(
  (config) => {
    //const token = get("accessToken");
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjUwMDEiLCJpZCI6MSwiZW1haWwiOiJwaG9uZ2hpYXZhbkBnbWFpbC5jb20iLCJ1c2VyVHlwZSI6IkFkbWluIiwiaWF0IjoxNjEzODE3NzA3LCJleHAiOjE2NDUzNzUzMDd9.S96l4MuZhMcOECVJmvtCvObSou0pToTvAaa2_yGWXPs";
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (err) => err
);

export default instance;
