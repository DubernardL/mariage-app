import React from "react";

const Meals = () => {
  return (
    <div className="infos-container undisplay-scroll">
      <div className="infos-wraper">
        <div className="text-side-img">
          <p className="left-side text-side">
            En ce qui concerne les repas du vendredi soir, samedi midi et
            dimanche soir, nous vous proposons de festoyer et de trinquer tous
            ensemble autour de bons repas cuisinés par le traiteur moyennant{" "}
            <b>15€ par personne et par repas</b>.
            <br />
            <br />
            N.B : Vous pourrez indiquer si vous souhaitez manger sur le domaine
            le temps de votre présence lorsque vous répondrez à l’invitation.
            <br />
            <br />
            <br />
            <p
              style={{ fontSize: 26, textAlign: "center", fontStyle: "italic" }}
            >
              Menus à venir ...
            </p>
          </p>
          {/* <img src={photoBedroom} className="side-img" alt="venue-1" /> */}
        </div>
        <div className="text-side-img img-first">
          {/* <img
            className="left-side side-img"
            src={photoDortoires}
            alt="venue-1"
          /> */}
          {/* <p className="text-side"></p> */}
        </div>
      </div>
    </div>
  );
};

export default Meals;
