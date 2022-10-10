import { fetchApi } from "./index";
import useToast from "../hooks/useToast";

export const getGuestsList = () => async (dispatch) => {
  const data = await dispatch(
    fetchApi(`${process.env.REACT_APP_BASE_URL}api/v1/guests`)
  );

  return data;
};

export const addGuest =
  (payload, toast = true) =>
  async (dispatch) => {
    const data = await dispatch(
      fetchApi(
        `${process.env.REACT_APP_BASE_URL}api/v1/guests`,
        "POST",
        payload
      )
    ).then((res) => {
      toast && useToast("Vous êtes bien enregistrez");
      return res;
    });

    return data;
  };

export const updateGuest =
  (payload, toast = true) =>
  async (dispatch) => {
    const data = await dispatch(
      fetchApi(
        `${process.env.REACT_APP_BASE_URL}api/v1/guests/${payload.id}`,
        "PUT",
        payload
      )
    ).then((res) => {
      toast && useToast("Modifications enregistrées");
      return res;
    });

    return data;
  };
export const deleteGuest = (id) => async (dispatch) => {
  const data = await dispatch(
    fetchApi(`${process.env.REACT_APP_BASE_URL}api/v1/guests/${id}`, "DELETE")
  );

  return data;
};

export const checkEmail =
  (email, toast = true) =>
  async (dispatch) => {
    const data = await dispatch(
      fetchApi(
        `${process.env.REACT_APP_BASE_URL}api/v1/check_email?email=${email}`
      )
    ).then((res) => {
      toast && res.length > 0 && useToast("On vous a retrouvé !");
      return res;
    });

    return data;
  };
