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
                  Le 22 avril 2023, nous allons nous dire « Oui » devant vous !
                  Pour ceux qui ne sont pas à nos côtés depuis des années, voici
                  un petit aperçu de notre vie …
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
                  Avec Lucas on s'est rencontrés en 1ère au Lycée Jean-Pierre
                  Timbaud à Brétigny-sur-Orge (sisi 91 RPZ!) en 2010. On est
                  très vite devenus amis au point de faire notre TPE (travail de
                  groupe à faire pour le bac) ensemble avec Amandine. C'est moi
                  qui ai choisi le sujet : "les gueules cassées" (Lucas m'en
                  veut encore pour ce choix. D'ailleurs il a rien foutu c'est ma
                  mère qui a fait tout le boulot). Bref, nous avons passés notre
                  1ère et notre Terminale ensemble. A la fin du lycée Lucas
                  déménage à Bordeaux pour suivre ses parents et faire ses
                  études. Là on se perd de vue pendant quelques années.
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
                  Ben et Gaël rejoignent Lucas à Bordeaux où ils feront une
                  coloc pendant 4 ans. Ils seront d'ailleurs les témoins de nos
                  premiers moments de retrouvailles (j'ai beaucoup squatté chez
                  eux). Oui parcequ'avec Lucas, on s'est retrouvés en 2017 pour
                  tomber fous amoureux l'un de l'autre. On arrive sur la fin de
                  nos études, moi je vais devenir prof et donc un choix s'impose
                  à nous : vivre à Paris ou à Bordeaux. On choisit le pays du
                  vin et dans la foulée on se pacse, parce qu'on est super
                  amoureux (même si en vrai on le fait surtout pour que je
                  puisse être mutée rapidement dans la région bordelaise) !
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
                  Après quelques mois de vie à deux (dans l'appart des
                  ex-colocs) on se décide sur un coup de tête à acheter. On
                  trouve très rapidement l'appart de nos rêves. Pendant un peu
                  plus de 8 mois on passe notre temps libre à retaper notre
                  futur chez-nous avec l'aide de Fred et Nadia (les parents de
                  Lucas) sans lesquels jamais on n'aurait pu se lancer dans ce
                  projet (Merci !). Voilà, maintenant on est installés, on a un
                  petit chat-Kira, l'appart est (quasi) terminé et on va se
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
                      On vous partage quelques photos issues de la séance qu'a
                      bien voulu réaliser Gaël. Merci à lui et à Aurélia qui les
                      a retouché, coeur sur vous !
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
                On vous partage quelques photos issues de la séance qu'a bien
                voulu réaliser Gaël. Merci à lui et à Aurélia qui les a
                retouché, coeur sur vous !
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
              <p className="endingText">On a hâte de vous retrouver ...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryTime;
