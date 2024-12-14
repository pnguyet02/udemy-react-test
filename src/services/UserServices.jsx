// import Axios from "axios";
import axios from "./Customize-axios";
const fetchAllUser = (page) => {
  return axios.get(`/api/users?page=${page}`);
};

export { fetchAllUser };
