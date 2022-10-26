import React from "react";
import { venuImg, photoPiscine } from "../../assets/images";

const Venue = () => {
  return (
    <div className="infos-container undisplay-scroll">
      <div className="infos-wraper">
        <div className="text-side-img">
          <p className="left-side text-side">
            Lorsque nous avons commencé à regarder les lieux pour célébrer notre
            mariage, nous avons rapidement eu un coup de cœur pour le domaine Le
            Herre.
            <br />
            Ce domaine, à 1 heure de Bordeaux et à 5 minutes de la sortie
            autoroutière La Réole est le lieu idéal pour nous réunir afin de
            célébrer notre union. Ses grands espaces, son charme de l’ancien et
            la nature qui l’entoure nous ont tout de suite ravis. Son grand
            parking permettra à tout le monde de se garer sans problème.
          </p>
          <img src={venuImg} alt="venue-1" className="side-img" />
        </div>
        <div className="text-side-img img-first">
          <img
            className="left-side side-img"
            src={photoPiscine}
            alt="venue-1"
          />
          <p className="text-side">
            Ce domaine dispose également d’une belle piscine où nous pourrons
            profiter (si le temps d’avril le permet!) mais aussi de grands
            espaces extérieurs pour pouvoir profiter tout le week-end tous
            ensemble.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Venue;
