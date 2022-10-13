import Plx from "react-plx";
import test1 from "./image/test.png";
import test2 from "./image/test2.png";
import test3 from "./image/test3.jpg";

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
      {/* <Plx
        parallaxData={[
          {
            start: 0,
            end: 800,
            properties: [
              {
                startValue: 1,
                endValue: 1.18,
                property: "scale",
              },
            ],
          },
        ]}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: "100%",
        }}
      >
        <img style={{ width: "100%" }} src={test3} alt="background" />
      </Plx> */}
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
        {/* <img
          style={{
            width: "30vw",
          }}
          src={test2}
          alt="Goonies"
        /> */}
      </Plx>
      {/* <div
        style={{
          position: "fixed",
          lefft: 0,
          top: 0,
          zIndex: 200,
          paddingTop: "56%",
          height: "400vh",
          width: "100%",
        }}
      >
        <div
          style={{
            background: "#000",
            height: "100%",
          }}
        ></div>
      </div> */}
    </div>
  );
}
