import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useState } from "react";
import Venue from "./infosTabs/Venue";
import Nights from "./infosTabs/Nights";
import Meals from "./infosTabs/Meals";
import filterScreen from "../assets/images/storyTime/contour-ecran-02.svg";

const Informations = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="informations-screen">
      <div
        className="informations-container"
        style={{
          backgroundImage: `url(${filterScreen})`,
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Tabs
          className="tabs-container"
          onSelect={(index, lastIndex, event) => {
            setActiveTab(parseInt(event.nativeEvent.srcElement.id.slice(-1)));
          }}
          selectedIndex={activeTab}
          enableContentGestures={false}
        >
          <TabList className="infos-tabs-container">
            <Tab
              tabIndex={"1"}
              className="infos-tabs"
              style={activeTab === 0 ? { textDecoration: "underline" } : {}}
            >
              Lieu
            </Tab>
            <Tab
              className="infos-tabs"
              style={activeTab === 1 ? { textDecoration: "underline" } : {}}
              tabIndex={"2"}
            >
              Nuitées
            </Tab>
            <Tab
              className="infos-tabs"
              style={activeTab === 2 ? { textDecoration: "underline" } : {}}
              tabIndex={"3"}
            >
              Repas
            </Tab>
          </TabList>

          <div>
            <TabPanel index={1}>
              <Venue />
            </TabPanel>
            <TabPanel index={2}>
              <Nights />
            </TabPanel>
            <TabPanel index={3}>
              <Meals />
            </TabPanel>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default Informations;
