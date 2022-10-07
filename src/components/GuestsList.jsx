import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getGuestsList, deleteGuest } from "../api/requests";
import { calculator } from "../helpers/calculator";

const GuestsList = () => {
  const dispatch = useDispatch();
  const [guestsList, setGuestsList] = useState([]);
  const data = calculator(guestsList);

  useEffect(() => {
    dispatch(getGuestsList()).then((res) => {
      const sortedRes = res.sort((a, b) =>
        a.email > b.email ? 1 : b.email > a.email ? -1 : 0
      );
      setGuestsList(sortedRes);
    });
  }, [dispatch]);

  return (
    <div className="guests-list-container">
      <div className="resume-infos-container">
        <div>
          <p>
            Nombre d'invités confirmé :{" "}
            {guestsList.filter((g) => g.isPresent).length} / {guestsList.length}
          </p>
          <p>
            Nombre d'invités non présent :{" "}
            {guestsList.filter((g) => !g.isPresent).length} /{" "}
            {guestsList.length}
          </p>
          <p>
            Argent entrant :{" "}
            {guestsList.reduce(
              (accumulator, guest) => accumulator + guest.price,
              0
            )}
            €
          </p>
        </div>
        <div>
          <p>Nuits : </p>
          <table>
            <thead>
              <tr>
                {Object.entries(data.nights).map(([k, v]) => (
                  <th>{k}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                {Object.entries(data.nights).map(([k, v]) => (
                  <td>{v}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <p>Repas : </p>
          <table>
            <thead>
              <tr>
                {Object.entries(data.meals).map(([k, v]) => (
                  <th>{k}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                {Object.entries(data.meals).map(([k, v]) => (
                  <td>{v}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <ul className="listItems">
        <p>Liste des invités :</p>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>email</th>
              <th>Prénom</th>
              <th>Nom</th>
              <th>Présent</th>
              <th>Enfant</th>
              <th>Allergies</th>
              <th>Régimes</th>
              <th>Nuits</th>
              <th>Repas</th>
              <th>Nombre d'invités (supp)</th>
              <th>Prix</th>
            </tr>
          </thead>
          <tbody>
            {guestsList.map((guest) => {
              return (
                <tr key={guest.id}>
                  <td>{guest.id}</td>
                  <td>{!guest.fromEmailGuest && guest.email}</td>
                  <td>{guest.firstName}</td>
                  <td>{guest.lastName}</td>
                  <td>{guest.isPresent ? "v" : "x"}</td>
                  <td>{guest.isChild ? "v" : "x"}</td>
                  <td>{guest.allergies}</td>
                  <td>{guest.diets}</td>
                  <td>
                    <p>
                      {guest.nights.map((n, i) => {
                        const end = () =>
                          guest.nights.length === i + 1 ? "" : " / ";
                        return n + end();
                      })}
                    </p>
                  </td>
                  <td>
                    <p>
                      {guest.meals.map((n, i) => {
                        const end = () =>
                          guest.meals.length === i + 1 ? "" : " / ";
                        return n + end();
                      })}
                    </p>
                  </td>
                  <td>{guest.additionalGuests}</td>
                  <td>{guest.price ? guest.price + " €" : "-"}</td>
                  <button
                    onClick={() =>
                      dispatch(deleteGuest(guest.id)).then((res) =>
                        setGuestsList(res)
                      )
                    }
                  >
                    Delete
                  </button>
                </tr>
              );
            })}
          </tbody>
        </table>
      </ul>
    </div>
  );
};

export default GuestsList;
