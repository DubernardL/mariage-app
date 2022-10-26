import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addGuest,
  checkEmail,
  updateGuest,
  deleteGuest,
} from "../api/requests";
import {
  updateGuestsFromGuest,
  addGuestsFromGuest,
  replaceGuestsFromGuest,
  getConsultationFields,
  deleteGuestFromStore,
} from "../store/guestsFromGuestReducer";
import { getGuest, updateGuestStore } from "../store/guestsReducer";
import deleteTrash from "../assets/delete-trash.svg";
import addGuestIcon from "../assets/add-guest.svg";
import homeIcon from "../assets/flower-img.svg";
import { getGuestPrice } from "../helpers/price";
import Alert from "./Alert";

const GuestsList = ({ activeTab }) => {
  const dispatch = useDispatch();
  const guestFromStore = useSelector(getGuest);
  const guestsFromGuestReducer = useSelector(getConsultationFields);

  useEffect(() => {
    const newPrice = getGuestPrice();
    guestFromStore.id &&
      (guestFromStore.additionalGuests !== guestsFromGuestReducer.length ||
        guestFromStore.price !== newPrice) &&
      dispatch(
        updateGuest(
          {
            ...guestFromStore,
            price: newPrice,
            additionalGuests: guestsFromGuestReducer.length,
          },
          false
        )
      ).then((res) => dispatch(updateGuestStore(res)));
    (guestFromStore.additionalGuests !== guestsFromGuestReducer.length ||
      guestFromStore.price !== newPrice) &&
      dispatch(
        updateGuestStore({
          ...guestFromStore,
          price: newPrice,
          additionalGuests: guestsFromGuestReducer.length,
        })
      );
  }, [dispatch, guestsFromGuestReducer, guestFromStore]);

  const handleSubmit = (event) => {
    dispatch(checkEmail(guestFromStore.email, false)).then(() => {
      if (guestFromStore.id) {
        dispatch(updateGuest(guestFromStore));
        if (guestsFromGuestReducer.length > 0) {
          guestsFromGuestReducer.forEach((g) => {
            g.id && dispatch(updateGuest(g, false));
          });
        }
      } else {
        dispatch(addGuest(guestFromStore));
        if (guestsFromGuestReducer.length > 0) {
          guestsFromGuestReducer.forEach((g) => {
            g.id && dispatch(updateGuest(g, false));
          });
        }
      }
    });
    event.preventDefault();
  };

  const handleAddGuest = () => {
    dispatch(
      addGuest(
        {
          from_email_guest: guestFromStore.email,
          isPresent: true,
          isChild: false,
        },
        false
      )
    ).then((res) => dispatch(addGuestsFromGuest(res)));
  };

  const handleChangeRadio = (event, nightPref = false) => {
    nightPref
      ? dispatch(
          updateGuestStore({
            ...guestFromStore,
            nightPreference: event.target.value,
          })
        )
      : dispatch(
          updateGuestStore({
            ...guestFromStore,
            isPresent: event.target.value === "yes" ? true : false,
          })
        );
  };

  const handleChangeRadioMoreGuest = (event, index, child = false) => {
    const newGuest = {
      ...guestsFromGuestReducer[index],
    };
    newGuest[child ? "isChild" : "isPresent"] =
      event.target.value === "yes" ? true : false;
    dispatch(updateGuestsFromGuest(newGuest));
  };

  const handleNightsChange = (v) => {
    const night = v.nativeEvent.target.name;
    let newNights = [];
    if (!guestFromStore.nights.includes(night)) {
      newNights = [...guestFromStore.nights, night];
    } else {
      newNights = guestFromStore.nights.filter((e) => e !== night);
    }
    dispatch(
      updateGuestStore({
        ...guestFromStore,
        nights: newNights,
      })
    );
  };

  const handleMealsChange = (v) => {
    const meal = v.nativeEvent.target.name;
    let newMeals = [];
    if (!guestFromStore.meals.includes(meal)) {
      newMeals = [...guestFromStore.meals, meal];
    } else {
      newMeals = guestFromStore.meals.filter((e) => e !== meal);
    }
    dispatch(
      updateGuestStore({
        ...guestFromStore,
        meals: newMeals,
      })
    );
  };

  const validateEmail = (mail) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    return false;
  };

  const submitBtnDisplay = () => {
    return (
      (guestFromStore.firstName && guestFromStore.lastName) ||
      guestFromStore.isPresent
    );
  };

  return (
    <div className="form-container">
      <form className="form undisplay-scroll" onSubmit={handleSubmit}>
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
                  value={guestFromStore.email || ""}
                  onChange={(event) => {
                    dispatch(
                      updateGuestStore({
                        ...guestFromStore,
                        email: event.target.value,
                      })
                    );
                    validateEmail(event.target.value) &&
                      dispatch(checkEmail(event.target.value)).then((res) => {
                        if (res && res.length > 0) {
                          let guestsFromGuest = [];
                          res.forEach((g) => {
                            g.fromEmailGuest
                              ? guestsFromGuest.push(g)
                              : dispatch(updateGuestStore(g));
                          });
                          dispatch(replaceGuestsFromGuest(guestsFromGuest));
                        } else {
                          dispatch(
                            updateGuestStore({
                              email: event.target.value,
                              price: 0,
                              isChild: false,
                              nights: [],
                              meals: [],
                            })
                          );
                          dispatch(replaceGuestsFromGuest([]));
                        }
                      });
                  }}
                />
              </td>
            </tr>
            {validateEmail(guestFromStore.email) && (
              <>
                <>
                  <tr>
                    <td>Prénom</td>
                    <td>
                      <input
                        type="text"
                        value={guestFromStore.firstName || ""}
                        onChange={(event) =>
                          dispatch(
                            updateGuestStore({
                              ...guestFromStore,
                              firstName: event.target.value,
                            })
                          )
                        }
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Nom</td>
                    <td>
                      <input
                        type="text"
                        value={guestFromStore.lastName || ""}
                        onChange={(event) =>
                          dispatch(
                            updateGuestStore({
                              ...guestFromStore,
                              lastName: event.target.value,
                            })
                          )
                        }
                      />
                    </td>
                  </tr>
                </>
                {guestFromStore.firstName && guestFromStore.lastName && (
                  <>
                    <tr>
                      <td>Présence</td>
                      <td>
                        <p>
                          <input
                            type="radio"
                            value={"yes"}
                            checked={guestFromStore.isPresent}
                            onChange={handleChangeRadio}
                          />
                          Oui
                        </p>
                        <p>
                          <input
                            type="radio"
                            value={"no"}
                            checked={
                              typeof guestFromStore.isPresent === "boolean"
                                ? !guestFromStore.isPresent
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
                            checked={guestFromStore.nights.includes("Vendredi")}
                            onChange={(v) => handleNightsChange(v)}
                          />
                          Vendredi
                        </p>
                        <p>
                          <input
                            type="checkbox"
                            name="Samedi"
                            checked={guestFromStore.nights.includes("Samedi")}
                            onChange={(v) => handleNightsChange(v)}
                          />
                          Samedi
                        </p>
                        <p>
                          <input
                            type="checkbox"
                            name="Dimanche"
                            checked={guestFromStore.nights.includes("Dimanche")}
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
                            checked={guestFromStore.nightPreference === "gîte"}
                            onChange={(e) => handleChangeRadio(e, true)}
                          />
                          Gîte (chambre)
                        </p>
                        <p>
                          <input
                            type="radio"
                            value={"dortoir"}
                            checked={
                              guestFromStore.nightPreference === "dortoir"
                            }
                            onChange={(e) => handleChangeRadio(e, true)}
                          />
                          Dortoir
                        </p>
                        <p>
                          <input
                            type="radio"
                            value={"no"}
                            checked={guestFromStore.nightPreference === "no"}
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
                            checked={guestFromStore.meals.includes(
                              "Vendredi soir"
                            )}
                            onChange={(v) => handleMealsChange(v)}
                          />
                          Vendredi soir
                        </p>
                        <p>
                          <input
                            type="checkbox"
                            name="Samedi midi"
                            checked={guestFromStore.meals.includes(
                              "Samedi midi"
                            )}
                            onChange={(v) => handleMealsChange(v)}
                          />
                          Samedi midi
                        </p>
                        <p>
                          <input
                            type="checkbox"
                            name="Dimanche soir"
                            checked={guestFromStore.meals.includes(
                              "Dimanche soir"
                            )}
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
                          value={guestFromStore.allergies || ""}
                          onChange={(event) =>
                            dispatch(
                              updateGuestStore({
                                ...guestFromStore,
                                allergies: event.target.value,
                              })
                            )
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
                          value={guestFromStore.diets || ""}
                          onChange={(event) =>
                            dispatch(
                              updateGuestStore({
                                ...guestFromStore,
                                diets: event.target.value,
                              })
                            )
                          }
                        />
                      </td>
                    </tr>
                  </>
                )}
              </>
            )}
          </tbody>
        </table>

        {validateEmail(guestFromStore.email) &&
          guestsFromGuestReducer.map((guestAdded, index) => {
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
                      value={guestsFromGuestReducer[index].firstName || ""}
                      onChange={(event) => {
                        const newGuest = {
                          ...guestsFromGuestReducer[index],
                          from_email_guest: guestFromStore.email,
                          isPresent: true,
                          isChild: false,
                          firstName: event.target.value,
                        };
                        dispatch(updateGuestsFromGuest(newGuest));
                      }}
                    />
                    <label>Nom</label>
                    <input
                      type="text"
                      value={guestsFromGuestReducer[index].lastName || ""}
                      onChange={(event) => {
                        const newGuest = {
                          ...guestsFromGuestReducer[index],
                          lastName: event.target.value,
                        };
                        dispatch(updateGuestsFromGuest(newGuest));
                      }}
                    />
                  </div>
                  <table className="form-table">
                    <tbody>
                      {guestsFromGuestReducer[index].firstName &&
                        guestsFromGuestReducer[index].lastName && (
                          <tr>
                            <td>Présence</td>
                            <td>
                              <input
                                type="radio"
                                value={"yes"}
                                checked={
                                  guestsFromGuestReducer[index].isPresent
                                }
                                onChange={(e) =>
                                  handleChangeRadioMoreGuest(e, index)
                                }
                              />
                              Oui
                              <input
                                type="radio"
                                value={"no"}
                                checked={
                                  guestsFromGuestReducer[index].isPresent
                                    ? !guestsFromGuestReducer[index].isPresent
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
                      {guestsFromGuestReducer[index].firstName &&
                        guestsFromGuestReducer[index].lastName &&
                        guestsFromGuestReducer[index].isPresent && (
                          <>
                            <tr>
                              <td>Enfant</td>
                              <td>
                                <input
                                  type="radio"
                                  value={"yes"}
                                  checked={
                                    guestsFromGuestReducer[index].isChild
                                  }
                                  onChange={(e) =>
                                    handleChangeRadioMoreGuest(e, index, true)
                                  }
                                />
                                Oui
                                <input
                                  type="radio"
                                  value={"no"}
                                  checked={
                                    !guestsFromGuestReducer[index].isChild
                                  }
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
                                  value={
                                    guestsFromGuestReducer[index].allergies ||
                                    ""
                                  }
                                  onChange={(event) => {
                                    const newGuest = {
                                      ...guestsFromGuestReducer[index],
                                      allergies: event.target.value,
                                    };
                                    dispatch(updateGuestsFromGuest(newGuest));
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
                                  value={
                                    guestsFromGuestReducer[index].diets || ""
                                  }
                                  onChange={(event) => {
                                    const newGuest = {
                                      ...guestsFromGuestReducer[index],
                                      diets: event.target.value,
                                    };
                                    dispatch(updateGuestsFromGuest(newGuest));
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
                              dispatch(deleteGuestFromStore(guestAdded.id));
                            });
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
        {validateEmail(guestFromStore.email) && (
          <>
            {submitBtnDisplay() && guestFromStore.isPresent && (
              <div>
                <button
                  type="button"
                  id="add-guest-icon"
                  onClick={handleAddGuest}
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

            {guestFromStore.isPresent && (
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
                          {guestsFromGuestReducer.length
                            ? guestsFromGuestReducer.length + 1
                            : 1}{" "}
                          invité
                          {guestsFromGuestReducer.length + 1 > 1 && "s"}.
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h4 className="presta-title">Nuits : </h4>
                      </td>
                      <td>
                        {guestFromStore.nights.length !== 0 ? (
                          <p>
                            {guestFromStore.nights.map((n, i) => (
                              <span>
                                {`${n}${
                                  i !== guestFromStore.nights.length - 1
                                    ? ", "
                                    : "."
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
                        {guestFromStore.meals.length !== 0 ? (
                          <p>
                            {guestFromStore.meals.map((m, i) => (
                              <span>
                                {`${m}${
                                  i !== guestFromStore.meals.length - 1
                                    ? ", "
                                    : "."
                                }`}
                              </span>
                            ))}
                          </p>
                        ) : (
                          <p>Pas de repas supplémentaire.</p>
                        )}
                      </td>
                    </tr>

                    {(guestFromStore.meals.length !== 0 ||
                      guestFromStore.nights.length !== 0) && (
                      <tr>
                        <td>
                          <h4 className="presta-title">Prix :</h4>
                        </td>
                        <td>
                          <p>
                            {guestFromStore?.price /
                              (guestsFromGuestReducer.length
                                ? guestsFromGuestReducer.length + 1
                                : 1)}{" "}
                            € /personne, soit {guestFromStore?.price} € au total
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
          </>
        )}
      </form>
    </div>
  );
};

export default GuestsList;
