import React from "react";
import FirstImg from "./FirstImg";

const StoryTime = ({ onGoBackPressed }) => {
  return (
    <div
      style={{
        overflow: "scroll",
        width: "100%",
      }}
    >
      <div
        style={{
          overflow: "scroll",
          textAlign: "center",
          width: "100%",
          // height: "200vh",
          overscrollBehavior: "none",
        }}
      >
        <button
          style={{ zIndex: 999, position: "absolute", top: 20, left: 20 }}
          type="button"
          id="add-guest-icon"
          onClick={onGoBackPressed}
        >
          <p style={{ color: "white" }}>retour</p>
        </button>
        <FirstImg />
        <div
          style={{
            backgroundColor: "green",
            marginTop: "100vh",
            height: "200vh",
            width: "100%",
          }}
        >
          <p style={{ color: "white" }}>TEST</p>
        </div>
        <div
          style={{
            backgroundColor: "red",
          }}
        >
          <p style={{ color: "white" }}>TEST</p>
        </div>
        <div
          style={{
            backgroundColor: "yellow",
          }}
        >
          <p style={{ color: "white" }}>TEST</p>
        </div>
      </div>
    </div>
  );
};

export default StoryTime;
