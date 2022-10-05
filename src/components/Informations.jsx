import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import Venue from "./infosTabs/Venue";
import Nights from "./infosTabs/Nights";
import Meals from "./infosTabs/Meals";

const Informations = () => {
  const [lastIndex, setLastIndex] = useState(0);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="informations-screen">
      <Tabs
        className="tabs-container"
        onSelect={(index, lastIndex, event) => {
          setLastIndex(lastIndex);
          setActiveTab(parseInt(event.nativeEvent.srcElement.id.slice(-1)));
        }}
        selectedIndex={activeTab}
      >
        <TabList className="infos-tabs-container">
          <Tab
            tabIndex={"1"}
            className="infos-tabs"
            style={activeTab === 0 ? { textDecoration: "underline" } : {}}
          >
            Le lieu
          </Tab>
          <Tab
            className="infos-tabs"
            style={activeTab === 1 ? { textDecoration: "underline" } : {}}
            tabIndex={"2"}
          >
            Les nuitées
          </Tab>
          <Tab
            className="infos-tabs"
            style={activeTab === 2 ? { textDecoration: "underline" } : {}}
            tabIndex={"3"}
          >
            Les repas
          </Tab>
        </TabList>

        <SwipeableViews
          axis={lastIndex >= activeTab ? "x-reverse" : "x"}
          index={activeTab}
        >
          <TabPanel index={1}>
            <Venue />
          </TabPanel>
          <TabPanel index={2}>
            <Nights />
          </TabPanel>
          <TabPanel index={3}>
            <Meals />
          </TabPanel>
        </SwipeableViews>
      </Tabs>
    </div>
  );
};

export default Informations;
