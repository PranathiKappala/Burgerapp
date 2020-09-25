import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://react-myburger-514b5.firebaseio.com/",
});

export default axiosInstance;
