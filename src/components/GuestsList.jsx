import React from "react";
import { useEffect, useState } from "react";
import { getGuestsList, deleteGuest } from "../api/requests";

const GuestsList = () => {
  const [guestsList, setGuestsList] = useState([]);

  useEffect(() => {
    getGuestsList().then((res) => setGuestsList(res));
  }, []);

  return (
    <div>
      <p>
        Nombre d'invités confirmé :{" "}
        {guestsList.filter((g) => g.isPresent).length} / {guestsList.length}
      </p>
      <p>
        Nombre d'invités non présent :{" "}
        {guestsList.filter((g) => !g.isPresent).length} / {guestsList.length}
      </p>
      <ul className="listItems">
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
            </tr>
          </thead>
          <tbody>
            {guestsList.map((guest) => {
              return (
                <tr key={guest.id}>
                  <td>{guest.id}</td>
                  <td>{guest.email}</td>
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
                  <button
                    onClick={() =>
                      deleteGuest(guest.id).then((res) => setGuestsList(res))
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
