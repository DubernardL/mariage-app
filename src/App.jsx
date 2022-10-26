import React, { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./App.css";
import GuestRegistration from "./components/GuestRegistration";
import Home from "./components/Home";
import StoryTime from "./components/storyTime/StoryTime";
import Informations from "./components/Informations";
import { homeImg, burgerMenu } from "./assets/images";
import Lottie from "react-lottie";
import lottieLoader from ".//assets/lotties/lottieLoader.json";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState(0);
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);
  const wrapperRef = React.createRef(null);

  useEffect(() => {
    new Promise((resolve, reject) => {
      const loadImg = new Image();
      loadImg.src = homeImg;
      loadImg.onload = () => resolve(homeImg);
      loadImg.onerror = (err) => reject(err);
    })
      .then(() => setIsLoading(false))
      // .then(() => setTimeout(() => setIsLoading(false), 10000))
      .catch((err) => console.log("Failed to load images", err));
  }, []);

  console.log("isLoading: ", isLoading);

  return isLoading ? (
    <div
      style={{
        display: "flex",
        backgroundColor: "#FCE6ED",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <p>Nous préparons le site ...</p>
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          animationData: lottieLoader,
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
          },
        }}
        width={"80%"}
        height={"auto"}
      />
    </div>
  ) : (
    <div
      className="mainContainer"
      style={{
        backgroundImage: `url(${homeImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "50% 50%",
        width: "100%",
        height: "100%",
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
        >
          <div className="nav-closed-bm">
            <div>
              <button
                id="burger-menu-icon"
                onClick={() => setBurgerMenuOpen(!burgerMenuOpen)}
              >
                <img
                  style={{ width: 30, height: 30 }}
                  src={burgerMenu}
                  alt="burger-menu-icon"
                />
              </button>
            </div>
          </div>
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
