import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-app-b94aa.firebaseio.com/",
});

export default instance;
