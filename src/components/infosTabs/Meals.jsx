import React from "react";
import PhotoDortoires from "../../assets/photos/photo_dortoires.jpeg";
import PhotoBedroom from "../../assets/photos/photo_bedroom.jpeg";

const Meals = () => {
  return (
    <div className="infos-container undisplay-scroll">
      <div className="infos-wraper">
        <div className="text-side-img">
          <p className="left-side text-side">
            Pour ce qui est de se restaurer, nul besoin de sortir du domaine si
            vous le désirez : nous pouvons vous proposer de manger sur place
            selon votre arrivée : le vendredi soir, le samedi midi et le
            dimanche soir moyennant 15€ par personne. Pour ceux qui désirent
            arriver dès le vendredi soir, on vous propose de nous réunir autour
            d’une petite paëlla maison avec une petite sangria pour
            accompagner !
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
            N.B : Vous pourrez indiquer si vous souhaitez manger sur le domaine
            le temps de votre présence lorsque vous répondrez à l’invitation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Meals;
