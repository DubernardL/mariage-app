export const getGuestPrice = (guest) => {
  const { nights, meals, nightPreference } = guest;
  const nightPrice =
    nightPreference === "gîte"
      ? process.env.REACT_APP_NIGHT_BEDROOM_PRICE
      : process.env.REACT_APP_NIGHT_PRICE;
  const guestNumber =
    !guest.additionalGuests || guest.additionalGuests === 0
      ? 1
      : guest.additionalGuests + 1;
  const price =
    ((nights.length ? nightPrice * nights.length : 0) +
      (meals.length ? process.env.REACT_APP_MEAL_PRICE * meals.length : 0)) *
    guestNumber;

  return price;
};
