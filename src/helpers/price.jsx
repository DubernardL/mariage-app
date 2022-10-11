import store from "../store/index";

export const getGuestPrice = () => {
  const { nights, meals, nightPreference } = store.getState().guestsReducer;
  const additionalsGuests = store.getState().guestsFromGuestReducer.length;
  const nightPrice =
    nightPreference === "gîte"
      ? process.env.REACT_APP_NIGHT_BEDROOM_PRICE
      : process.env.REACT_APP_NIGHT_PRICE;
  const guestNumber = additionalsGuests === 0 ? 1 : additionalsGuests + 1;
  const price =
    ((nights.length ? nightPrice * nights.length : 0) +
      (meals.length ? process.env.REACT_APP_MEAL_PRICE * meals.length : 0)) *
    guestNumber;

  return price;
};
