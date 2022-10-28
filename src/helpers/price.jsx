import store from "../store/index";

export const getGuestPrice = () => {
  const { nights, meals, nightPreference } = store.getState().guestsReducer;
  const additionalsGuests = store
    .getState()
    .guestsFromGuestReducer.filter((g) => !g.isChild);
  const nightPrice =
    nightPreference === "gîte"
      ? process.env.REACT_APP_NIGHT_BEDROOM_PRICE
      : process.env.REACT_APP_NIGHT_PRICE;
  const guestNumber =
    additionalsGuests.length === 0 ? 1 : additionalsGuests.length + 1;
  const price =
    ((nights.length ? nightPrice * nights.length : 0) +
      (meals.length ? process.env.REACT_APP_MEAL_PRICE * meals.length : 0)) *
    guestNumber;

  return Math.round(price);
};
