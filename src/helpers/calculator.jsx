export const calculator = (guestList) => {
  const data = {
    nights: {
      Vendredi: 0,
      Samedi: 0,
      Dimanche: 0,
    },
    meals: {
      "Vendredi soir": 0,
      "Samedi midi": 0,
      "Dimanche soir": 0,
    },
  };
  guestList.forEach((guest) => {
    guest.nights.map((n) =>
      guest.additionalGuests
        ? (data.nights[n] += guest.additionalGuests + 1)
        : (data.nights[n] += 1)
    );
    guest.meals.map((m) =>
      guest.additionalGuests
        ? (data.meals[m] += guest.additionalGuests + 1)
        : (data.meals[m] += 1)
    );
  });

  return data;
};
