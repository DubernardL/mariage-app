import React from "react";
import { photoDortoires, photoBedroom } from "../../assets/images";

const Venue = () => {
  return (
    <div className="infos-container undisplay-scroll">
      <div className="infos-wraper">
        <div className="text-side-img">
          <p className="left-side text-side">
            Lorsque nous avons choisi le lieu pour célébrer notre mariage, il
            était primordial pour nous que tout le monde puisse dormir sur place
            s’il le désirait. Ainsi, pour profiter au maximum, nous vous
            proposons deux solutions d’hébergement sur le domaine.
            <br />
            Celui-ci dispose de nombreux couchages, en gîte ou dortoir,
            disponibles du <b>vendredi soir 17h au lundi matin 9h</b> pour ceux
            qui souhaitent prolonger ce moment festif jusqu’au bout. Vous avez
            donc la possibilité de dormir sur place <b>1, 2 ou 3 nuits</b>.
          </p>
          <img src={photoBedroom} className="side-img" alt="venue-1" />
        </div>
        <div className="text-side-img img-first">
          <img
            className="left-side side-img"
            src={photoDortoires}
            alt="venue-1"
          />
          <p className="text-side">
            Si vous souhaitez dormir sur le domaine, nous vous donnons la
            possibilité d’indiquer vos préférences d’hébergement (gîte ou
            dortoir) lorsque vous répondrez à l’invitation. Nous vous
            répartirons dans les divers hébergements en prenant en compte le
            plus possible vos préférences.
            <br />- Le <b>dortoir</b> de 32 couchages, pour des souvenirs
            mémorables, est à <b>25€ la nuit par personne</b>. Il dispose de 4
            douches individuelles et de 2 WC.
            <br />- Les <b>gîtes</b> peuvent accueillir entre 2 et 12 personnes.
            Chaque gîte dispose de chambres individuelles avec un lit double,
            une douche, une vasque et un WC. Ils sont à{" "}
            <b>35€ la nuit par personne</b>.
            <br />
            <br />
            Chaque nuit comprend le petit-déjeuner. La literie est fournie.
            L'hébergement est gratuit pour les enfants.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Venue;
