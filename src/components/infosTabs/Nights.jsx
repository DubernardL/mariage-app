import React from "react";
import PhotoDortoires from "../../assets/photos/photo_dortoires.jpeg";
import PhotoBedroom from "../../assets/photos/photo_bedroom.jpeg";

const Venue = () => {
  return (
    <div className="infos-container">
      <div className="infos-wraper">
        <div className="text-side-img">
          <p className="left-side text-side">
            Lorsque nous avons choisi le lieu pour célébrer notre mariage, il
            était primordial pour nous que tout le monde puisse dormir sur place
            s’il le désirait. Ainsi, pour profiter au maximum de la soirée en
            toute sécurité, et pour ceux qui font un long voyage, nous vous
            proposons deux solutions d’hébergement sur le domaine avec une
            participation de 25€ et de 35€ par nuit et par personne
            (petit-déjeuner inclus).
            <br />
            Pour votre confort, le domaine Le Herre dispose de nombreux
            couchages, en formule gîte ou dortoir, disponibles du vendredi soir
            17h au lundi matin 9h pour ceux qui souhaitent prolonger ce moment
            festif jusqu’au bout. Vous avez donc la possibilité de dormir sur
            place 1, 2 ou 3 nuits.
          </p>
          <img src={PhotoBedroom} className="side-img" alt="venue-1" />
        </div>
        <div className="text-side-img img-first">
          <img
            className="left-side side-img"
            src={PhotoDortoires}
            alt="venue-1"
          />
          <p className="text-side">
            Le dortoir de 16 lits superposés, pour des souvenirs mémorables, est
            à 25€ la nuit par personne. Il dispose de 4 douches sécurisées et de
            2 WC.
            <br />
            Les gîtes peuvent accueillir des familles ou des amis. Ils sont à
            35€ la nuit par personne (gratuit pour les enfants). Chaque gîte
            dispose de chambres individuelles avec un lit double, une douche,
            une vasque et un WC individuel.
            <br />
            N.B : Si vous souhaitez dormir sur le domaine, nous vous donnons la
            possibilité d’indiquer vos préférences d’hébergement (gîte ou
            dortoir) lorsque vous répondrez à l’invitation. Nous vous
            répartirons dans les divers hébergements en prenant en compte le
            plus possible vos préférences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Venue;
