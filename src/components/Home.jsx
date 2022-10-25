import React from "react";

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
        <div className="home-title-container">
          <p className="home-title title-invite">vous invitent</p>
          <p className="home-title home-title-small">
            a celebrer leur mariage le
          </p>
          <p className="home-title date-title">22 . 04 . 2023</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
