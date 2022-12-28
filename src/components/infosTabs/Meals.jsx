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
            <b>15€ par personne et par repas</b> (gratuit pour les enfants).
            <br />
            <br />
            N.B : Vous pourrez indiquer si vous souhaitez manger sur le domaine
            le temps de votre présence lorsque vous répondrez à l’invitation.
          </p>
        </div>
        <div className="menu-container">
          <div className="meals-container">
            <p className="meals-day">Vendredi soir</p>
            <p className="meals">Paëlla</p>
            <p className="meals">*</p>
            <p className="meals">Salade de fruits</p>
          </div>
          <div className="meals-container">
            <p className="meals-day">Samedi midi</p>
            <p className="meals">
              Melon, salade de pâtes au pesto, jambon de pays
            </p>
            <p className="meals">*</p>
            <p className="meals">Rôti de boeuf froid et terrine de légumes</p>
            <p className="meals">*</p>
            <p className="meals">Tarte aux pommes</p>
          </div>
          <div className="meals-container">
            <p className="meals-day">Dimanche soir</p>
            <p className="meals">Couscous royal</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meals;
