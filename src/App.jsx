import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./App.css";
import GuestRegistration from "./components/GuestRegistration";
import Home from "./components/Home";
import StoryTime from "./components/storyTime/StoryTime";
import Informations from "./components/Informations";
import HomeImg from "./assets/photos/home_img_1.jpg";
import burgerMenu from "./assets/burger-menu.svg";

const App = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);
  const wrapperRef = React.createRef(null);

  console.log("//////////////// : ", process.env);

  return (
    <div
      className="mainContainer"
      style={{
        backgroundImage: `url(${HomeImg})`,
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
