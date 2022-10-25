import Plx from "react-plx";
import screenContour from "./image/contour-ecran-02.png";

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
                endValue: 1.4,
                property: "scale",
              },
            ],
          },
        ]}
        style={{
          backgroundImage: `url(${screenContour})`,
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
      ></Plx>
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
        <p className="story-title">notre histoire ...</p>
      </Plx>
    </div>
  );
}
