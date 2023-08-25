import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  return axios.get(baseUrl);
};

const create = (newObject) => {
  return axios.post(baseUrl, newObject);
};

const update = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject);
};

const Delete = (id, newObject) => {
  const request = axios.delete(`${baseUrl}/${id}`, newObject);
  return request.then(() => getAll());
};

export default {
  getAll,
  create,
  update,
  Delete,
};
