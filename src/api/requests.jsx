import { fetchApi } from "./index";
import useToast from "../hooks/useToast";
import { updateGuestStore } from "../store/guestsReducer";

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

// export const getGuest = (id) => async (dispatch) => {
//   const data = await dispatch(
//     fetchApi(`${process.env.REACT_APP_BASE_URL}api/v1/guests/${id}/`)
//   ).then((res) => {
//     dispatch(updateGuestStore(res));
//     return res;
//   });

//   return data;
// };

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
      if (res.length > 0) {
        toast && useToast("On vous a retrouvé !");
        const guest = res.find((r) => !r.fromEmailGuest);
        guest && dispatch(updateGuestStore(guest));
      }
      return res;
    });

    return data;
  };
