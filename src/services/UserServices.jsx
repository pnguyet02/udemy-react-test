import Axios from "axios";

const fetchAllUser = () => {
  return Axios.get("https://reqres.in/api/users?page=1");
};
export { fetchAllUser };
