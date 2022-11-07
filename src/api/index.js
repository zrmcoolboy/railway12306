import axios from "axios";
// 引入进度条
import progress from "nprogress";
import "nprogress/nprogress.css";
const request = axios.create({
  baseURL: "http://127.0.0.1:5005/api", //10.2.165.143
  timeout: 3000,
  headers: {
    "Content-type": "application/json",
  },
});

request.interceptors.request.use((config) => {
  // config.headers.
  progress.start();
  return config;
});
request.interceptors.response.use(
  (res) => {
    progress.done();
    // console.log(res);
    return res.data;
  },
  (err) => {
    console.log(err);
  }
);

export default request;
