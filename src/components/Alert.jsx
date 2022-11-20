import React from "react";
import { closeIcon } from "../assets/images";

const Alert = ({ children, onPress, closed }) => {
  const { innerWidth: width } = window;

  return (
    <div style={{ alignSelf: "center" }}>
      {onPress && !closed && width <= 900 && (
        <button
          type="button"
          onClick={() => onPress()}
          style={{
            backgroundColor: "transparent",
            position: "absolute",
          }}
        >
          <img
            className="story-img"
            style={{ width: 30, height: 30 }}
            src={closeIcon}
            alt="foreground"
          />
        </button>
      )}
      <div className="alert-wrapper">{children}</div>
    </div>
  );
};

export default Alert;
