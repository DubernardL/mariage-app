import axios from "axios";

export const apiMiddleware = () => (next) => async (action) => {
  next(action);

  console.log("action", action);

  if (action.type !== "@fetch/API") return;

  const { url, method = "GET", data } = action.payload;

  return fetchApi(url, method, data);
};

const apiStart = () => ({ type: "@fetch/started" });
const apiEnd = () => ({ type: "@fetch/ended" });
const apiError = (error) => ({
  type: "@fetch/failure",
  payload: error.message,
});

export const fetchApi =
  (url, method = "GET", dataOrParams) =>
  async (dispatch) => {
    axios.defaults.headers.common["Content-Type"] = "application/json";
    const dataOrParamsKey = ["GET", "DELETE"].includes(method)
      ? "params"
      : "data";

    dispatch(apiStart());
    try {
      const response = await axios.request({
        url,
        method,
        [dataOrParamsKey]: dataOrParams,
      });

      return response.data;
    } catch (error) {
      dispatch(apiError(error));
      throw error;
    } finally {
      dispatch(apiEnd());
    }
  };
