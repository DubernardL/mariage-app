import React, { useEffect, useState } from "react";
import FirstImg from "./FirstImg";
import Plx from "react-plx";
import jeune from "../../assets/photos/story/jeune.jpg";
import travaux from "../../assets/photos/story/travaux.png";
import { translateXParallax, blurParallax } from "../../helpers/parallax";

const StoryTime = ({ onGoBackPressed }) => {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const { innerWidth: width } = window;
    setScreenWidth(width);
  }, []);

  return (
    <div style={{ display: "flex", flex: 1, flexDirection: "column" }}>
      <div
        style={{
          zIndex: 999,
          position: "sticky",
          top: 20,
          backgroundColor: "red",
          height: 0,
        }}
      >
        <button type="button" id="add-guest-icon" onClick={onGoBackPressed}>
          <p style={{ color: "white", marginLeft: 20 }}>retour</p>
        </button>
      </div>
      <div
        style={{
          width: "100%",
        }}
      >
        <div
          style={{
            textAlign: "center",
          }}
        >
          <div style={{ height: "100vh" }}>
            <FirstImg />
          </div>
          <div className="story-wrapper">
            <div className="story-text-intro-container">
              <Plx parallaxData={blurParallax()}>
                <p className="story-text-intro">
                  Le 22 avril 2023, nous allons nous dire « Oui » devant tous
                  nos proches ! Pour ceux qui ne sont pas à nos côtés depuis des
                  années, voici comment tout a commencé…
                </p>
              </Plx>
            </div>
            <div className="section-container">
              <Plx
                style={{
                  display: "flex",
                  flex: 1,
                  alignItems: "center",
                }}
                parallaxData={translateXParallax(
                  screenWidth > 900 ? 0 : -50,
                  screenWidth > 900 ? screenWidth * 0.25 : screenWidth * 0.1,
                  800,
                  1800
                )}
              >
                <img className="story-img" src={jeune} alt="foreground" />
              </Plx>
              <Plx
                style={{
                  display: "flex",
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
                parallaxData={translateXParallax(
                  screenWidth > 900 ? screenWidth * 0.15 : screenWidth * 0.8,
                  screenWidth > 900 ? 50 : screenWidth * 0.1,
                  800,
                  1800
                )}
              >
                <p className="inner-text">
                  Avec Lucas on s’est rencontré en classe de Première au Lycée
                  Jean-Pierre Timbaud de Brétigny-sur-Orge (sisi 91 RPZ!) en
                  2010. Autrement dit il y a déjà quelques années. Dès le début,
                  on s’est super bien entendus, on est devenu très copains au
                  point de faire notre TPE ensemble (sur les Gueules Cassées.
                  J’avais choisi ce sujet. Lucas m’en veut encore. Et Amandine
                  aussi d’ailleurs. Désolée. Mais bon Lucas foutait rien, c’est
                  ma mère qui a bossé pour lui quand même). On a, à de très
                  rares occasions, séché les cours pour être ensemble. Au lieu
                  de préparer le TPE, on allait regarder Charmed, c’était
                  marrant (désolée Papa, Maman, c’est Lucas qui me forçait).
                  L’année suivante, en Terminale, toujours dans la même classe
                  et toujours super copains. Mais avec la fin du lycée, le
                  déménagement de Lucas à Bordeaux, on s’est perdu de vue
                  pendant quelques années.
                </p>
              </Plx>
            </div>

            <div className="section-container column-reverse">
              <Plx
                style={{
                  display: "flex",
                  flex: 1,
                  alignItems: "center",
                }}
                parallaxData={translateXParallax(
                  screenWidth > 900 ? 0 : -50,
                  screenWidth > 900 ? screenWidth * 0.25 : screenWidth * 0.1,
                  1500,
                  2700
                )}
              >
                <p className="inner-text">
                  Cinq années après le lycée on se retrouve un été à Brétigny,
                  pour ne plus jamais se quitter : j’ai rapidement ma mutation
                  pour qu’on puisse s’installer ensemble, entre-temps on se
                  pacse, on achète un appart qu’on retape totalement avec les
                  parents de Lucas (Nadia et Fred, MERCI!) et maintenant on se
                  marie !
                </p>
              </Plx>
              <Plx
                style={{
                  display: "flex",
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
                parallaxData={translateXParallax(
                  screenWidth > 900 ? screenWidth * 0.15 : screenWidth * 0.8,
                  screenWidth > 900 ? 100 : screenWidth * 0.1,
                  1500,
                  2700
                )}
              >
                <img className="story-img" src={travaux} alt="foreground" />
              </Plx>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryTime;
