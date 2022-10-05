import React from "react";
import homeIcon from "../assets/flower-img.svg";

const Home = () => {
  return (
    <div
      style={{
        display: "inline-flex",
        width: "100%",
      }}
    >
      <div className="home-text-container">
        <div className="home-name-container">
          <p className="home-name">Olivia & Lucas</p>
        </div>

        <div className="home-border-container">
          <div className="home-border" />
          <img
            style={{ width: 60, height: 60 }}
            src={homeIcon}
            alt="home-icon"
          />
          <div className="home-border" />
        </div>

        <div className="home-title-container">
          <p className="home-title">vous invite</p>
          <p className="home-title home-title-small">
            a celebrer leur mariage le
          </p>
          <p className="home-title">22 . 04 . 2023</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
