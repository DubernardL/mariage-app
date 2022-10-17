import Plx from "react-plx";
import test1 from "./image/test.png";

export default function App() {
  return (
    <div>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 700,
            easing: "ease-in",
            properties: [
              {
                startValue: 1,
                endValue: 1.6,
                property: "scale",
              },
            ],
          },
        ]}
        style={{
          backgroundImage: `url(${test1})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "50% 0%",
          position: "fixed",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
          zIndex: 100,
        }}
      >
        {/* <img
          style={{ width: "100%", height: "100%" }}
          src={test1}
          alt="foreground"
        /> */}
      </Plx>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 400,
            properties: [
              {
                startValue: 1,
                endValue: 0,
                property: "opacity",
              },
            ],
          },
        ]}
        style={{
          position: "fixed",
          left: 0,
          top: "26vw",
          width: "100%",
        }}
      >
        <p className="story-name">Olivia & Lucas</p>
        <p className="story-title">histoires ...</p>
      </Plx>
    </div>
  );
}