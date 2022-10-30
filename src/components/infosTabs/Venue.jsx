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
            Herre (en fait, après une grande réflexion d'à peu près 2 minutes,
            une semaine après la demande, Olivia m'a contraint à réserver ce
            lieu. Néanmoins elle avait raison, le domaine est magnifique).
            <br />
            Ce domaine situé au <b>267-268 Le Herré-Est, 33124 à Aillas</b> à 1
            heure de Bordeaux et à 5 minutes de la sortie autoroutière La Réole
            est le lieu idéal pour nous retrouver tous ensemble pour organiser
            une belle cérémonie laïque et faire la fête jusqu'au bout de la
            nuit.
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
            Nous profiterons des grands espaces et de la nature qui entourent ce
            domaine pour nous adonner à des activités extérieures. Un boulodrome
            nous permettra de boire du <b>Ricard®</b> autour de parties de
            pétanque endiablées (n'hésitez pas à amener vos boules ou autres
            jeux amusants).
            <br />
            Ce domaine dispose également d’une belle piscine dont nous pourrons
            profiter, si le temps d’avril le permet. Prévoyez vos maillots !
            <br />
            <br />
            Un grand parking permettra à tout le monde de se garer sans
            problème.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Venue;
