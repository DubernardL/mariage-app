import axios from "axios";

export const getGuestsList = async () => {
  return await axios
    .get("http://localhost:3000/api/v1/guests")
    .then((res) => {
      return res.data;
    })
    .catch((error) => console.log(error));
};

export const addGuest = async (payload) => {
  return await axios
    .post("http://localhost:3000/api/v1/guests", payload)
    .then((res) => {
      return res.data;
    })
    .catch((error) => console.log(error));
};

export const updateGuest = async (payload) => {
  return await axios
    .put(`http://localhost:3000/api/v1/guests/${payload.id}`, payload)
    .then((res) => {
      return res.data;
    })
    .catch((error) => console.log(error));
};

export const deleteGuest = async (id) => {
  return await axios
    .delete(`http://localhost:3000/api/v1/guests/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => console.log(error));
};

export const checkEmail = async (email) => {
  return await axios
    .get(`http://localhost:3000/api/v1/check_email?email=${email}`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => console.log(error));
};
