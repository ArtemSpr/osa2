import axios from "axios";

const getAll = () => {
  return axios.get("http://localhost:3001/persons");
};

const addNew = (name, number) => {
  return axios.post("http://localhost:3001/persons", {
    name: name,
    number: number,
  });
};

const removeChip = (id) => {
  return axios.delete(`http://localhost:3001/persons/${id}`);
};

export { getAll, addNew, removeChip };
