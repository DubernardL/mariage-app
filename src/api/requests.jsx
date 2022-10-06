import { fetchApi } from "./index";

export const getGuestsList = () => async (dispatch) => {
  const data = await dispatch(
    fetchApi(`${process.env.REACT_APP_BASE_URL}api/v1/guests`)
  );

  return data;
};

export const addGuest = (payload) => async (dispatch) => {
  const data = await dispatch(
    fetchApi(`${process.env.REACT_APP_BASE_URL}api/v1/guests`, "POST", payload)
  );

  return data;
};

export const updateGuest = (payload) => async (dispatch) => {
  const data = await dispatch(
    fetchApi(
      `${process.env.REACT_APP_BASE_URL}api/v1/guests/${payload.id}`,
      "PUT",
      payload
    )
  );

  return data;
};
export const deleteGuest = (id) => async (dispatch) => {
  const data = await dispatch(
    fetchApi(`${process.env.REACT_APP_BASE_URL}api/v1/guests/${id}`, "DELETE")
  );

  return data;
};

export const checkEmail = (email) => async (dispatch) => {
  const data = await dispatch(
    fetchApi(
      `${process.env.REACT_APP_BASE_URL}api/v1/check_email?email=${email}`
    )
  );

  return data;
};
