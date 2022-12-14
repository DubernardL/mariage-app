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
  backArrow,
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
          left: 20,
          height: 0,
        }}
      >
        <button
          type="button"
          onClick={onGoBackPressed}
          style={{
            backgroundColor: "transparent",
          }}
        >
          <img
            className="story-img"
            style={
              screenWidth <= 900
                ? { width: 40, height: 40 }
                : { width: 70, height: 70 }
            }
            src={backArrow}
            alt="foreground"
          />
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
                  Le 22 avril 2023, nous allons nous dire ????Oui???? devant vous??!
                  Pour ceux qui ne sont pas ?? nos c??t??s depuis des ann??es, voici
                  un petit aper??u de notre vie ???
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
                  Avec Lucas on s'est rencontr??s en 1??re au Lyc??e Jean-Pierre
                  Timbaud ?? Br??tigny-sur-Orge (91 RPZ!) en 2010. On est tr??s
                  vite devenus amis au point de faire notre TPE (travail de
                  groupe ?? faire pour le bac) ensemble avec Amandine. C'est moi
                  qui ai choisi le sujet : "les gueules cass??es" (Lucas m'en
                  veut encore pour ce choix. D'ailleurs il n'a rien foutu c'est
                  ma m??re qui a fait tout le boulot). Bref, nous avons pass??s
                  notre premi??re et notre Terminale ensemble. A la fin du lyc??e
                  Lucas d??m??nage ?? Bordeaux pour suivre ses parents et faire ses
                  ??tudes. L?? on se perd de vue pendant quelques ann??es.
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
                  Ben et Ga??l rejoignent Lucas ?? Bordeaux o?? ils feront une
                  coloc pendant 4 ans. Ils seront d'ailleurs les t??moins de nos
                  premiers moments de retrouvailles (j'ai beaucoup squatt?? chez
                  eux). Oui car avec Lucas, on s'est retrouv??s en 2017 pour
                  tomber fous amoureux l'un de l'autre. On arrive sur la fin de
                  nos ??tudes, moi je vais devenir prof et donc un choix s'impose
                  ?? nous : vivre ?? Paris ou ?? Bordeaux. On choisit le pays du
                  vin et dans la foul??e on se pacse, parce qu'on est super
                  amoureux (m??me si en vrai on le fait surtout pour que je
                  puisse ??tre mut??e rapidement dans la r??gion bordelaise) !
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
                  screenWidth > 600 ? 50 : screenWidth * 0.15,
                  screenWidth > 600 ? 1700 : 2900,
                  screenWidth > 600 ? 2900 : 4200
                )}
              >
                <p className="inner-text">
                  Apr??s quelques mois de vie ?? deux (dans l'appart des
                  ex-colocs) on se d??cide sur un coup de t??te ?? acheter. On
                  trouve tr??s rapidement l'appart de nos r??ves. Pendant un peu
                  plus de 8 mois on passe notre temps libre ?? retaper notre
                  futur chez-nous avec l'aide de Fred et Nadia (les parents de
                  Lucas) sans lesquels nous n'aurions pas pu nous lancer dans ce
                  projet (Merci !). Voil??, maintenant on est install??s, on a un
                  petit chat-Kira, l'appart est (quasi) termin?? et on va se
                  marier !
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
                <div
                  style={{
                    width: "80%",
                    display: "flex",
                    zIndex: 999,
                  }}
                >
                  <div className="text-on-img-container">
                    <p className="text-on-img">
                      On vous partage quelques photos issues de la s??ance qu'a
                      bien voulu r??aliser Ga??l. Merci ?? lui et ?? Aur??lia qui les
                      a retouch??es, coeur sur vous !
                    </p>
                  </div>
                </div>
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
                On vous partage quelques photos issues de la s??ance qu'a bien
                voulu r??aliser Ga??l. Merci ?? lui et ?? Aur??lia qui les a
                retouch??es, coeur sur vous !
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
                  marginBottom: 0,
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
              <p className="endingText">On a h??te de vous retrouver ...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryTime;
