import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import {
  addGuest,
  checkEmail,
  updateGuest,
  deleteGuest,
} from "../api/requests";
import { addGuestsToStore } from "../store/guestsReducer";
import { replaceGuestsFromGuest } from "../store/guestsFromGuestReducer";
import store from "../store";
import deleteTrash from "../assets/delete-trash.svg";
import addGuestIcon from "../assets/add-guest.svg";
import homeIcon from "../assets/flower-img.svg";
import { getGuestPrice } from "../helpers/price";

const GuestsList = ({ activeTab }) => {
  const dispatch = useDispatch();
  const guestFromStore = store.getState().guestsReducer;
  const { guestsFromGuestReducer } = store.getState();
  const [guest, setGuest] = useState(guestFromStore);
  const [moreGuest, setMoreGuest] = useState(guestsFromGuestReducer);

  useEffect(() => {
    dispatch(addGuestsToStore(guest));
  }, [dispatch, guest]);

  useEffect(() => {
    setGuest({
      ...guest,
      additionalGuests: moreGuest.length,
    });
    // eslint-disable-next-line
  }, [moreGuest]);

  useEffect(() => {
    setGuest({
      ...guest,
      price: getGuestPrice(guest),
    });
    // eslint-disable-next-line
  }, [
    guest.nights,
    guest.meals,
    guest.nightPreference,
    guest.additionalGuests,
  ]);

  useEffect(() => {
    dispatch(replaceGuestsFromGuest(moreGuest));
    // eslint-disable-next-line
  }, [dispatch, moreGuest]);

  const handleSubmit = (event) => {
    dispatch(checkEmail(guest.email)).then(() => {
      if (guest.id) {
        dispatch(updateGuest(guest));
        if (moreGuest.length > 0) {
          moreGuest.forEach((g) => {
            g.id
              ? dispatch(updateGuest(g))
              : dispatch(addGuest({ ...g, email: guest.email }));
          });
        }
      } else {
        dispatch(addGuest(guest));
        if (moreGuest.length > 0) {
          moreGuest.forEach((g) => {
            dispatch(addGuest({ ...g, email: guest.email }));
          });
        }
      }
    });
    event.preventDefault();
  };

  const handleChangeRadio = (event, nightPref = false) => {
    nightPref
      ? setGuest({
          ...guest,
          nightPreference: event.target.value,
        })
      : setGuest({
          ...guest,
          isPresent: event.target.value === "yes" ? true : false,
        });
  };

  const handleChangeRadioMoreGuest = (event, index, child = false) => {
    const newGuest = {
      ...moreGuest[index],
    };
    newGuest[child ? "isChild" : "isPresent"] =
      event.target.value === "yes" ? true : false;
    let newMoreGuest = [...moreGuest];
    newMoreGuest[index] = newGuest;
    setMoreGuest(newMoreGuest);
  };

  const handleNightsChange = (v) => {
    const night = v.nativeEvent.target.name;
    let newNights = [];
    if (!guest.nights.includes(night)) {
      newNights = [...guest.nights, night];
    } else {
      newNights = guest.nights.filter((e) => e !== night);
    }
    setGuest({ ...guest, nights: newNights });
  };

  const handleMealsChange = (v) => {
    const meal = v.nativeEvent.target.name;
    let newMeals = [];
    if (!guest.meals.includes(meal)) {
      newMeals = [...guest.meals, meal];
    } else {
      newMeals = guest.meals.filter((e) => e !== meal);
    }
    setGuest({ ...guest, meals: newMeals });
  };

  const validateEmail = (mail) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    return false;
  };

  const submitBtnDisplay = () => {
    return (guest.firstName && guest.lastName) || !guest.isPresent;
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-line">
          <label>Email</label>
          <input
            type="text"
            value={guest.email || ""}
            onChange={(event) => {
              setGuest({ ...guest, email: event.target.value });
              validateEmail(event.target.value) &&
                dispatch(checkEmail(event.target.value)).then((res) => {
                  if (res.length > 0) {
                    let guestsFromGuest = [];
                    res.forEach((g) => {
                      g.fromEmailGuest ? guestsFromGuest.push(g) : setGuest(g);
                    });
                    setMoreGuest(guestsFromGuest);
                  } else {
                    setGuest({
                      email: event.target.value,
                      price: 0,
                      isChild: false,
                      nights: [],
                      meals: [],
                    });
                    setMoreGuest([]);
                  }
                });
            }}
          />
        </div>
        {validateEmail(guest.email) && (
          <div>
            <div className="form-line">
              <label>Prénom</label>
              <input
                type="text"
                value={guest.firstName || ""}
                onChange={(event) =>
                  setGuest({ ...guest, firstName: event.target.value })
                }
              />
            </div>
            <div className="form-line">
              <label>Nom</label>
              <input
                type="text"
                value={guest.lastName || ""}
                onChange={(event) =>
                  setGuest({ ...guest, lastName: event.target.value })
                }
              />
            </div>
          </div>
        )}
        {guest.firstName && guest.lastName && (
          <div style={{ display: "flex", flex: 1, flexDirection: "column" }}>
            <div className="form-line">
              <label>Présence</label>
              <div>
                <p>
                  <input
                    type="radio"
                    value={"yes"}
                    checked={guest.isPresent}
                    onChange={handleChangeRadio}
                  />
                  Oui
                </p>
                <p>
                  <input
                    type="radio"
                    value={"no"}
                    checked={
                      typeof guest.isPresent === "boolean"
                        ? !guest.isPresent
                        : false
                    }
                    onChange={handleChangeRadio}
                  />
                  Non
                </p>
              </div>
            </div>
            {guest.isPresent && (
              <div>
                <div className="form-line">
                  <label>Nuits</label>
                  <p>
                    <input
                      type="checkbox"
                      name="Vendredi"
                      checked={guest.nights.includes("Vendredi")}
                      onChange={(v) => handleNightsChange(v)}
                    />
                    Vendredi
                  </p>
                  <p>
                    <input
                      type="checkbox"
                      name="Samedi"
                      checked={guest.nights.includes("Samedi")}
                      onChange={(v) => handleNightsChange(v)}
                    />
                    Samedi
                  </p>
                  <p>
                    <input
                      type="checkbox"
                      name="Dimanche"
                      checked={guest.nights.includes("Dimanche")}
                      onChange={(v) => handleNightsChange(v)}
                    />
                    Dimanche
                  </p>
                </div>
                <div className="form-line">
                  <label>Préférence pour la/les nuits</label>
                  <p>
                    <input
                      type="radio"
                      value={"gîte"}
                      checked={guest.nightPreference === "gîte"}
                      onChange={(e) => handleChangeRadio(e, true)}
                    />
                    Gîte (chambre)
                  </p>
                  <p>
                    <input
                      type="radio"
                      value={"dortoir"}
                      checked={guest.nightPreference === "dortoir"}
                      onChange={(e) => handleChangeRadio(e, true)}
                    />
                    Dortoir
                  </p>
                  <p>
                    <input
                      type="radio"
                      value={"no"}
                      checked={guest.nightPreference === "no"}
                      onChange={(e) => handleChangeRadio(e, true)}
                    />
                    Pas de préférences
                  </p>
                </div>
                <div className="form-line">
                  <label>Repas</label>
                  <p>
                    <input
                      type="checkbox"
                      name="Vendredi soir"
                      checked={guest.meals.includes("Vendredi soir")}
                      onChange={(v) => handleMealsChange(v)}
                    />
                    Vendredi soir
                  </p>
                  <p>
                    <input
                      type="checkbox"
                      name="Samedi midi"
                      checked={guest.meals.includes("Samedi midi")}
                      onChange={(v) => handleMealsChange(v)}
                    />
                    Samedi midi
                  </p>
                  <p>
                    <input
                      type="checkbox"
                      name="Dimanche soir"
                      checked={guest.meals.includes("Dimanche soir")}
                      onChange={(v) => handleMealsChange(v)}
                    />
                    Dimanche soir
                  </p>
                </div>
                <div className="form-line">
                  <label>Allergies</label>
                  <textarea
                    type="text"
                    value={guest.allergies || ""}
                    onChange={(event) =>
                      setGuest({ ...guest, allergies: event.target.value })
                    }
                  />
                </div>
                <div className="form-line">
                  <label>Régime</label>
                  <textarea
                    type="text"
                    value={guest.diets || ""}
                    onChange={(event) =>
                      setGuest({ ...guest, diets: event.target.value })
                    }
                  />
                </div>
              </div>
            )}
            {moreGuest.map((guestAdded, index) => {
              return (
                <div>
                  <div className="home-border-container">
                    <div className="home-border" />
                    <img
                      style={{ width: 60, height: 60 }}
                      src={homeIcon}
                      alt="home-icon"
                    />
                    <div className="home-border" />
                  </div>
                  <div className="invitCard" key={index}>
                    <div className="form-line">
                      <label>Prénom</label>
                      <input
                        type="text"
                        value={moreGuest[index].firstName || ""}
                        onChange={(event) => {
                          const newGuest = {
                            ...moreGuest[index],
                            from_email_guest: guest.email,
                            isPresent: true,
                            isChild: false,
                            firstName: event.target.value,
                          };
                          let newMoreGuest = [...moreGuest];
                          newMoreGuest[index] = newGuest;
                          setMoreGuest(newMoreGuest);
                        }}
                      />
                      <label>Nom</label>
                      <input
                        type="text"
                        value={moreGuest[index].lastName || ""}
                        onChange={(event) => {
                          const newGuest = {
                            ...moreGuest[index],
                            lastName: event.target.value,
                          };
                          let newMoreGuest = [...moreGuest];
                          newMoreGuest[index] = newGuest;
                          setMoreGuest(newMoreGuest);
                        }}
                      />
                    </div>
                    {moreGuest[index].firstName && moreGuest[index].lastName && (
                      <div className="form-line">
                        <label>Présence</label>
                        <input
                          type="radio"
                          value={"yes"}
                          checked={moreGuest[index].isPresent}
                          onChange={(e) => handleChangeRadioMoreGuest(e, index)}
                        />
                        Oui
                        <input
                          type="radio"
                          value={"no"}
                          checked={
                            moreGuest[index].isPresent
                              ? !moreGuest[index].isPresent
                              : false
                          }
                          onChange={(e) => handleChangeRadioMoreGuest(e, index)}
                        />
                        Non
                      </div>
                    )}
                    {moreGuest[index].firstName &&
                      moreGuest[index].lastName &&
                      moreGuest[index].isPresent && (
                        <div>
                          <div className="form-line">
                            <label>Enfant</label>
                            <input
                              type="radio"
                              value={"yes"}
                              checked={moreGuest[index].isChild}
                              onChange={(e) =>
                                handleChangeRadioMoreGuest(e, index, true)
                              }
                            />
                            Oui
                            <input
                              type="radio"
                              value={"no"}
                              checked={!moreGuest[index].isChild}
                              onChange={(e) =>
                                handleChangeRadioMoreGuest(e, index, true)
                              }
                            />
                            Non
                          </div>
                          <div className="form-line">
                            <label>Allergies</label>
                            <textarea
                              type="text"
                              value={moreGuest[index].allergies || ""}
                              onChange={(event) => {
                                const newGuest = {
                                  ...moreGuest[index],
                                  allergies: event.target.value,
                                };
                                let newMoreGuest = [...moreGuest];
                                newMoreGuest[index] = newGuest;
                                setMoreGuest(newMoreGuest);
                              }}
                            />
                          </div>
                          <div className="form-line">
                            <label>Régime</label>
                            <textarea
                              type="text"
                              value={moreGuest[index].diets || ""}
                              onChange={(event) => {
                                const newGuest = {
                                  ...moreGuest[index],
                                  diets: event.target.value,
                                };
                                let newMoreGuest = [...moreGuest];
                                newMoreGuest[index] = newGuest;
                                setMoreGuest(newMoreGuest);
                              }}
                            />
                          </div>
                        </div>
                      )}
                    <button
                      type="button"
                      id="trash-icon"
                      onClick={() => {
                        if (guestAdded.id) {
                          dispatch(deleteGuest(guestAdded.id)).then(() => {
                            const test = [...moreGuest];
                            test.splice(index, 1);
                            setMoreGuest(test);
                          });
                        } else {
                          const test = [...moreGuest];
                          test.splice(index, 1);
                          setMoreGuest(test);
                        }
                      }}
                    >
                      <img
                        style={{ width: 25, height: 25 }}
                        src={deleteTrash}
                        alt="trash-icon"
                      />
                    </button>
                  </div>
                </div>
              );
            })}
            {submitBtnDisplay() && guest.isPresent && (
              <div>
                <button
                  type="button"
                  id="add-guest-icon"
                  onClick={() => setMoreGuest([...moreGuest, {}])}
                >
                  <img
                    style={{ width: 25, height: 25 }}
                    src={addGuestIcon}
                    alt="add-guest-icon"
                  />
                  Ajouter un invité
                </button>
              </div>
            )}

            {guest.isPresent && (
              <div>
                <p>Préstations :</p>
                <p>
                  Vous serez{" "}
                  {guest.additionalGuests ? guest.additionalGuests + 1 : 1}{" "}
                  invité{guest.additionalGuests + 1 > 1 && "s"}.
                </p>
                <div className="row">
                  <p>Nuits : </p>
                  {guest.nights.length !== 0 ? (
                    guest.nights.map((n, i) => (
                      <p>
                        {n}
                        {i !== guest.nights.length - 1 ? "," : "."}
                      </p>
                    ))
                  ) : (
                    <p> Pas de nuit supplémentaire.</p>
                  )}
                </div>
                <div className="row">
                  <p>Repas : </p>
                  {guest.meals.length !== 0 ? (
                    guest.meals.map((m, i) => (
                      <p>
                        {m}
                        {i !== guest.meals.length - 1 ? "," : "."}
                      </p>
                    ))
                  ) : (
                    <p>Pas de repas supplémentaire.</p>
                  )}
                </div>

                {guest.meals.length !== 0 ||
                  (guest.nights.length !== 0 && (
                    <p>
                      Prix :{" "}
                      {guest?.price /
                        (guest.additionalGuests
                          ? guest.additionalGuests + 1
                          : 1)}{" "}
                      €/personne, soit {guest?.price} € au total
                    </p>
                  ))}
              </div>
            )}

            {submitBtnDisplay() && (
              <div id="submit-btn-container">
                <button id="submit-btn" type="submit">
                  Enregistrer mes infos
                </button>
              </div>
            )}
          </div>
        )}
      </form>
    </div>
  );
};

export default GuestsList;
