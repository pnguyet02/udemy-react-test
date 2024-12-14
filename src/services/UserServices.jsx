// import Axios from "axios";
import axios from "./Customize-axios";
const fetchAllUser = () => {
  return axios.get("/api/users?page=1");
};

export { fetchAllUser };
