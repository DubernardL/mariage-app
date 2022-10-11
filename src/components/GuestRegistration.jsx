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
import Alert from "./Alert";

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
    dispatch(checkEmail(guest.email, false)).then(() => {
      if (guest.id) {
        dispatch(updateGuest(guest));
        if (moreGuest.length > 0) {
          moreGuest.forEach((g) => {
            g.id
              ? dispatch(updateGuest(g, false))
              : dispatch(addGuest({ ...g, email: guest.email }, false));
          });
        }
      } else {
        dispatch(addGuest(guest));
        if (moreGuest.length > 0) {
          moreGuest.forEach((g) => {
            dispatch(addGuest({ ...g, email: guest.email }, false));
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
        <Alert>
          <p>
            Vous avez jusqu'au 20/02/2023 pour répondre à l'invitation ou
            modifier vos informations.
            <br />
            <p style={{ textIndent: 15 }}>
              Si vous êtes déjà enregistré, entrez votre email pour modifier vos
              informations.
            </p>
            <p style={{ textIndent: 15 }}>
              Si vous n'êtes pas encore enregistré, renseignez un email et vos
              informations.
            </p>
          </p>
        </Alert>
        <table className="form-table">
          <tbody>
            <tr>
              <td>Email</td>
              <td>
                <input
                  type="text"
                  value={guest.email || ""}
                  onChange={(event) => {
                    setGuest({ ...guest, email: event.target.value });
                    validateEmail(event.target.value) &&
                      dispatch(checkEmail(event.target.value)).then((res) => {
                        if (res && res.length > 0) {
                          let guestsFromGuest = [];
                          res.forEach((g) => {
                            g.fromEmailGuest
                              ? guestsFromGuest.push(g)
                              : setGuest(g);
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
              </td>
            </tr>
            {validateEmail(guest.email) && (
              <>
                <tr>
                  <td>Prénom</td>
                  <td>
                    <input
                      type="text"
                      value={guest.firstName || ""}
                      onChange={(event) =>
                        setGuest({ ...guest, firstName: event.target.value })
                      }
                    />
                  </td>
                </tr>
                <tr>
                  <td>Nom</td>
                  <td>
                    <input
                      type="text"
                      value={guest.lastName || ""}
                      onChange={(event) =>
                        setGuest({ ...guest, lastName: event.target.value })
                      }
                    />
                  </td>
                </tr>
              </>
            )}
            {guest.firstName && guest.lastName && (
              <>
                <tr>
                  <td>Présence</td>
                  <td>
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
                  </td>
                </tr>
                <tr>
                  <td>Nuits</td>
                  <td>
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
                  </td>
                </tr>
                <tr>
                  <td>Préférence pour la/les nuits</td>
                  <td>
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
                  </td>
                </tr>
                <tr>
                  <td>Repas</td>
                  <td>
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
                  </td>
                </tr>
                <tr>
                  <td>Allergies</td>
                  <td>
                    <textarea
                      type="text"
                      style={{ maxWidth: 250, maxHeight: 120 }}
                      value={guest.allergies || ""}
                      onChange={(event) =>
                        setGuest({ ...guest, allergies: event.target.value })
                      }
                    />
                  </td>
                </tr>
                <tr>
                  <td>Régime</td>
                  <td>
                    <textarea
                      type="text"
                      style={{ maxWidth: 250, maxHeight: 120 }}
                      value={guest.diets || ""}
                      onChange={(event) =>
                        setGuest({ ...guest, diets: event.target.value })
                      }
                    />
                  </td>
                </tr>
              </>
            )}
          </tbody>
        </table>

        {moreGuest.map((guestAdded, index) => {
          return (
            <div className="invit-card-container">
              <div className="home-border-container">
                <div className="home-border" />
                <img
                  style={{ width: 60, height: 60 }}
                  src={homeIcon}
                  alt="home-icon"
                />
                <div className="home-border" />
              </div>
              <div className="invit-card" key={index}>
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
                <table className="form-table">
                  <tbody>
                    {moreGuest[index].firstName && moreGuest[index].lastName && (
                      <tr>
                        <td>Présence</td>
                        <td>
                          <input
                            type="radio"
                            value={"yes"}
                            checked={moreGuest[index].isPresent}
                            onChange={(e) =>
                              handleChangeRadioMoreGuest(e, index)
                            }
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
                            onChange={(e) =>
                              handleChangeRadioMoreGuest(e, index)
                            }
                          />
                          Non
                        </td>
                      </tr>
                    )}
                    {moreGuest[index].firstName &&
                      moreGuest[index].lastName &&
                      moreGuest[index].isPresent && (
                        <>
                          <tr>
                            <td>Enfant</td>
                            <td>
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
                            </td>
                          </tr>
                          <tr>
                            <td>Allergies</td>
                            <td>
                              <textarea
                                type="text"
                                style={{ maxWidth: 250, maxHeight: 120 }}
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
                            </td>
                          </tr>
                          <tr>
                            <td>Régime</td>
                            <td>
                              <textarea
                                type="text"
                                style={{ maxWidth: 250, maxHeight: 120 }}
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
                            </td>
                          </tr>
                        </>
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
                        style={{ width: 20, height: 20 }}
                        src={deleteTrash}
                        alt="trash-icon"
                      />
                    </button>
                  </tbody>
                </table>
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
          <div className="presta-table">
            <h2>Résumé des préstations sélectionnées:</h2>
            <table>
              <tbody>
                <tr>
                  <td>
                    <h4 className="presta-title">Nombre d'invité(s) : </h4>
                  </td>
                  <td>
                    <p>
                      {guest.additionalGuests ? guest.additionalGuests + 1 : 1}{" "}
                      invité
                      {guest.additionalGuests + 1 > 1 && "s"}.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4 className="presta-title">Nuits : </h4>
                  </td>
                  <td>
                    {guest.nights.length !== 0 ? (
                      <p>
                        {guest.nights.map((n, i) => (
                          <span>
                            {`${n}${
                              i !== guest.nights.length - 1 ? ", " : "."
                            }`}
                          </span>
                        ))}
                      </p>
                    ) : (
                      <p>Pas de nuit supplémentaire.</p>
                    )}
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4 className="presta-title">Repas :</h4>
                  </td>
                  <td>
                    {guest.meals.length !== 0 ? (
                      <p>
                        {guest.meals.map((m, i) => (
                          <span>
                            {`${m}${i !== guest.meals.length - 1 ? ", " : "."}`}
                          </span>
                        ))}
                      </p>
                    ) : (
                      <p>Pas de repas supplémentaire.</p>
                    )}
                  </td>
                </tr>

                {(guest.meals.length !== 0 || guest.nights.length !== 0) && (
                  <tr>
                    <td>
                      <h4 className="presta-title">Prix :</h4>
                    </td>
                    <td>
                      <p>
                        {guest?.price /
                          (guest.additionalGuests
                            ? guest.additionalGuests + 1
                            : 1)}{" "}
                        € /personne, soit {guest?.price} € au total
                      </p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
        {submitBtnDisplay() && (
          <div id="submit-btn-container">
            <button id="submit-btn" type="submit">
              Enregistrer mes infos
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default GuestsList;
