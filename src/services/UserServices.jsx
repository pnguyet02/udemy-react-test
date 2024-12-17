// import Axios from "axios";
import axios from "./Customize-axios";
const fetchAllUser = (page) => {
  return axios.get(`/api/users?page=${page}`);
};
const postCreateUser = (name, job) => {
  return axios.post("/api/users", { name, job });
};
const putUpdateUser = (name, job) => {
  return axios.put("/api/users", { name, job });
};
const deleteUser = (id) => {
  return axios.delete(`/api/users/${id}`);
};
export { fetchAllUser, postCreateUser, putUpdateUser, deleteUser };
