import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3000/api";

export const getHotels = () => axios.get(`${API_URL}/hotels`);
export const createHotel = (data) => axios.post(`${API_URL}/hotels`, data);
export const updateHotel = (id, data) =>
  axios.put(`${API_URL}/hotels/${id}`, data);
export const deleteHotel = (id) => axios.delete(`${API_URL}/hotels/${id}`);

export const getUsers = () => axios.get(`${API_URL}/users`);
export const createUser = (data) => axios.post(`${API_URL}/users`, data);
export const updateUser = (id, data) =>
  axios.put(`${API_URL}/users/${id}`, data);
export const deleteUser = (id) => axios.delete(`${API_URL}/users/${id}`);
