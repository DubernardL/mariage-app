import React, { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./App.css";
import GuestRegistration from "./components/GuestRegistration";
import Home from "./components/Home";
import StoryTime from "./components/storyTime/StoryTime";
import Informations from "./components/Informations";
import { homeImg, burgerMenu, flowerImg1 } from "./assets/images";
import Lottie from "react-lottie-player";
import lottieLoader from "./assets/lotties/lottieLoader.json";
import useImagePreloader from "./hooks/useImagePreloader";

const App = () => {
  const [imageLoaded, setimageLoaded] = useState(true);
  const [activeTab, setActiveTab] = useState(0);
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);
  const wrapperRef = React.createRef(null);
  const { imagesPreloaded } = useImagePreloader();

  useEffect(() => {
    setimageLoaded(imagesPreloaded);
  }, [imagesPreloaded]);

  return !imageLoaded ? (
    <div
      style={{
        display: "flex",
        backgroundColor: "#F5D2DA",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        overflow: "hidden",
        padding: "5%",
      }}
    >
      <img className="loader-img" src={flowerImg1} alt="home-icon" />
      <p className="loader-title">Nous préparons le site ...</p>
      <Lottie
        loop
        animationData={lottieLoader}
        play
        style={{ width: "80%", height: "80%" }}
      />
    </div>
  ) : (
    <div
      className="mainContainer"
      style={{
        backgroundImage: `url(${homeImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "45% 55%",
      }}
    >
      <Tabs
        onSelect={(index, lastIndex, event) => {
          setBurgerMenuOpen(false);
          setActiveTab(parseInt(event.nativeEvent.srcElement.id.slice(-1)));
        }}
        selectedIndex={activeTab}
      >
        <div
          className={
            activeTab === 3 ? "nav-bar-container-disabled" : "nav-bar-container"
          }
          style={{ padding: 16, paddingBottom: burgerMenuOpen ? 16 : 42 }}
        >
          <button
            id="burger-menu-icon"
            onClick={() => setBurgerMenuOpen(!burgerMenuOpen)}
            style={{
              backgroundImage: `url(${burgerMenu})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              width: 30,
              height: 30,
              position: "absolute",
            }}
          />
          <TabList>
            <div
              ref={wrapperRef}
              className={burgerMenuOpen ? "tab-list is-open" : "tab-list"}
            >
              <Tab className={"home-tab react-tabs__tab"} tabIndex={"0"}>
                Accueil
              </Tab>
              <div className="tab-list-container">
                <Tab className={"react-tabs__tab"} tabIndex={"1"}>
                  Informations mariage
                </Tab>
                <Tab className={"react-tabs__tab"} tabIndex={"2"}>
                  Répondre à l'invitation
                </Tab>
                <Tab className={"react-tabs__tab"} tabIndex={"3"}>
                  Notre Histoire
                </Tab>
              </div>
            </div>
          </TabList>
        </div>

        <TabPanel>
          <Home />
        </TabPanel>
        <TabPanel>
          <Informations />
        </TabPanel>
        <TabPanel>
          <GuestRegistration />
        </TabPanel>
        <TabPanel>
          <StoryTime onGoBackPressed={() => setActiveTab(0)} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default App;
