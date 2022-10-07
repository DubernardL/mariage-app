import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./App.css";
import GuestsList from "./components/GuestsList";
import GuestRegistration from "./components/GuestRegistration";
import Home from "./components/Home";
import Informations from "./components/Informations";
import HomeImg from "./assets/photos/home_img_2.jpg";
import homeIcon from "./assets/flower-img.svg";

const App = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div
      className="mainContainer"
      style={{
        backgroundImage: `url(${HomeImg})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Tabs
        onSelect={(index, lastIndex, event) => {
          setActiveTab(parseInt(event.nativeEvent.srcElement.id.slice(-1)));
        }}
        selectedIndex={activeTab}
      >
        <TabList>
          <img
            style={{ width: 50, height: 50 }}
            src={homeIcon}
            alt="home-icon"
          />
          <Tab className={"home-tab react-tabs__tab"} tabIndex={"0"}>
            Accueil
          </Tab>
          <div className="tab-list">
            <Tab className={"react-tabs__tab"} tabIndex={"1"}>
              Informations
            </Tab>
            <Tab className={"react-tabs__tab"} tabIndex={"2"}>
              Répondre à l'invitation
            </Tab>
            <Tab className={"react-tabs__tab"} tabIndex={"3"}>
              Liste des invités
            </Tab>
          </div>
        </TabList>

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
          <GuestsList />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default App;
