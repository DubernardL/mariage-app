import React, { useEffect, useState } from "react";
import FirstImg from "./FirstImg";
import Plx from "react-plx";
import { Carousel } from "react-responsive-carousel";
import "../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {
  jeune,
  pacs,
  travauxAndAppart,
  photo1,
  carousel1,
  carousel2,
  carousel3,
  carousel4,
  carousel5,
  carousel6,
  carousel7,
  carousel8,
  bye,
} from "../../assets/images";
import {
  translateXParallax,
  blurParallax,
  backgroundTranslation,
} from "../../helpers/parallax";

const StoryTime = ({ onGoBackPressed }) => {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const { innerWidth: width } = window;
    setScreenWidth(width);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        overflowX: "hidden",
      }}
    >
      <div
        style={{
          zIndex: 999,
          position: "sticky",
          top: 20,
          height: 0,
        }}
      >
        <button
          type="button"
          onClick={onGoBackPressed}
          style={{ backgroundColor: "transparent" }}
        >
          <p
            style={{
              color: "white",
              fontSize: 20,
              fontWeight: "bold",
              marginLeft: 20,
              textTransform: "uppercase",
            }}
          >
            Retour
          </p>
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
                  screenWidth > 600 ? 0 : -50,
                  screenWidth > 600 ? screenWidth * 0.25 : screenWidth * 0.1,
                  screenWidth > 600 ? 800 : 400,
                  screenWidth > 600 ? 1800 : 1600
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
                  screenWidth > 600 ? screenWidth * 0.15 : screenWidth * 1,
                  screenWidth > 600 ? 50 : screenWidth * 0.1,
                  screenWidth > 600 ? 800 : 600,
                  screenWidth > 600 ? 1800 : 1800
                )}
              >
                <p className="inner-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorum optio facilis sunt ducimus in eos corrupti? Et itaque
                  delectus cupiditate. Assumenda nesciunt, quaerat animi
                  repudiandae quod tempora! Eveniet, repellat ipsum! Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Ipsum, pariatur
                  nesciunt quas eaque dicta illum aut dolorem magni perspiciatis
                  quisquam incidunt repellendus voluptatem, ea facere
                  temporibus, error obcaecati et illo?
                  {/* Avec Lucas on s’est rencontré en classe de Première au Lycée
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
                  pendant quelques années. */}
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
                  screenWidth > 600 ? screenWidth * 0.15 : -50,
                  screenWidth > 600 ? screenWidth * 0.15 : screenWidth * 0.2,
                  screenWidth > 600 ? 1500 : 1600,
                  screenWidth > 600 ? 2500 : 2800
                )}
              >
                <p className="inner-text inner-text-left">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorum optio facilis sunt ducimus in eos corrupti? Et itaque
                  delectus cupiditate. Assumenda nesciunt, quaerat animi
                  repudiandae quod tempora! Eveniet, repellat ipsum! Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Ipsum, pariatur
                  nesciunt quas eaque dicta illum aut dolorem magni perspiciatis
                  quisquam incidunt repellendus voluptatem, ea facere
                  temporibus, error obcaecati et illo?
                  {/* Cinq années après le lycée on se retrouve un été à Brétigny,
                  pour ne plus jamais se quitter : j’ai rapidement ma mutation
                  pour qu’on puisse s’installer ensemble, entre-temps on se
                  pacse, on achète un appart qu’on retape totalement avec les
                  parents de Lucas (Nadia et Fred, MERCI!) et maintenant on se
                  marie ! */}
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
                  screenWidth > 600 ? screenWidth * 0.15 : screenWidth * 0.8,
                  screenWidth > 600 ? 100 : screenWidth * 0.15,
                  screenWidth > 600 ? 1300 : 1400,
                  screenWidth > 600 ? 2300 : 2600
                )}
              >
                <img
                  className="story-img pacs-img"
                  src={pacs}
                  alt="foreground"
                />
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
                  screenWidth > 600 ? 0 : -50,
                  screenWidth > 600 ? screenWidth * 0.15 : screenWidth * 0.05,
                  screenWidth > 600 ? 1700 : 2400,
                  screenWidth > 600 ? 2700 : 3600
                )}
              >
                <img
                  className="travaux-img"
                  src={travauxAndAppart}
                  alt="foreground"
                />
              </Plx>
              <Plx
                style={{
                  display: "flex",
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
                parallaxData={translateXParallax(
                  screenWidth > 600 ? screenWidth * 0.15 : screenWidth * 0.8,
                  screenWidth > 600 ? 50 : screenWidth * 0.1,
                  screenWidth > 600 ? 1700 : 2600,
                  screenWidth > 600 ? 2700 : 3800
                )}
              >
                <p className="inner-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorum optio facilis sunt ducimus in eos corrupti? Et itaque
                  delectus cupiditate. Assumenda nesciunt, quaerat animi
                  repudiandae quod tempora! Eveniet, repellat ipsum! Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Ipsum, pariatur
                  nesciunt quas eaque dicta illum aut dolorem magni perspiciatis
                  quisquam incidunt repellendus voluptatem, ea facere
                  temporibus, error obcaecati et illo?
                </p>
              </Plx>
            </div>

            {screenWidth > 600 && (
              <div
                style={{
                  display: "flex",
                  position: "relative",
                  marginTop: 0,
                  height: 700,
                  width: "100%",
                  overflow: "hidden",
                  alignItems: "center",
                  justifyContent: "center",
                  overflowX: "hidden",
                }}
              >
                <Plx
                  style={{
                    width: "80%",
                    height: 900,
                    position: "absolute",
                    top: 0,
                    background: `url(${photo1}) no-repeat`,
                    backgroundSize: "cover",
                  }}
                  parallaxData={backgroundTranslation()}
                />
                <Plx
                  style={{
                    width: "80%",
                    display: "flex",
                  }}
                  parallaxData={[
                    {
                      start: 1500,
                      end: 2800,
                      properties: [
                        {
                          startValue: 0,
                          endValue: 1,
                          property: "opacity",
                        },
                      ],
                    },
                  ]}
                >
                  <div className="text-on-img-container">
                    <p className="text-on-img">
                      Olivia & Lucas Lorem ipsum, dolor sit amet consectetur
                      adipisicing elit. Eligendi magnam sapiente provident odit
                      voluptates sunt, nesciunt iste nostrum quod laudantium quo
                      a adipisci sint, atque velit autem cumque rem distinctio!
                    </p>
                  </div>
                </Plx>
              </div>
            )}

            <div
              className="carousel-container"
              style={{
                width: "100%",
                zIndex: 999,
                backgroundColor: "#f5d2da",
              }}
            >
              <Carousel
                showArrows={true}
                autoPlay={false}
                infiniteLoop={true}
                transitionTime={1000}
                showStatus={false}
                centerMode={true}
                centerSlidePercentage={screenWidth <= 900 ? "90" : "70"}
                showThumbs={false}
                swipeable={true}
                swipeScrollTolerance={10}
              >
                <div className="carousel-img-container">
                  <img
                    className="carousel-img"
                    src={carousel1}
                    alt={"carousel1"}
                  />
                </div>
                <div className="carousel-img-container">
                  <img
                    className="carousel-img"
                    src={carousel2}
                    alt={"carousel2"}
                  />
                </div>
                <div className="carousel-img-container">
                  <img
                    className="carousel-img"
                    src={carousel3}
                    alt={"carousel3"}
                  />
                </div>
                <div className="carousel-img-container">
                  <img
                    className="carousel-img"
                    src={carousel4}
                    alt={"carousel4"}
                  />
                </div>
                <div className="carousel-img-container">
                  <img
                    className="carousel-img"
                    src={carousel5}
                    alt={"carousel5"}
                  />
                </div>
                <div className="carousel-img-container">
                  <img
                    className="carousel-img"
                    src={carousel6}
                    alt={"carousel6"}
                  />
                </div>
                <div className="carousel-img-container">
                  <img
                    className="carousel-img"
                    src={carousel7}
                    alt={"carousel7"}
                  />
                </div>
                <div className="carousel-img-container">
                  <img
                    className="carousel-img"
                    src={carousel8}
                    alt={"carousel8"}
                  />
                </div>
              </Carousel>
            </div>

            {screenWidth <= 900 && (
              <p className="text-on-img text-on-img-mobile">
                Olivia & Lucas Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Eligendi magnam sapiente provident odit
                voluptates sunt, nesciunt iste nostrum quod laudantium quo a
                adipisci sint, atque velit autem cumque rem distinctio!
              </p>
            )}

            <div
              style={{
                zIndex: 997,
                position: "relative",
              }}
            >
              <img
                src={bye}
                style={{
                  width: "100%",
                }}
                alt={"bye"}
              />
              <div
                style={{
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  zIndex: 998,
                  position: "absolute",
                  background: `linear-gradient(to top,  rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.5) 100%)`,
                }}
              />
              <p className="endingText">On est pressé de vous voir ...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryTime;
