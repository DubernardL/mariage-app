import React from "react";
import PhotoDortoires from "../../assets/photos/photo_dortoires.jpeg";
import PhotoBedroom from "../../assets/photos/photo_bedroom.jpeg";

const Meals = () => {
  return (
    <div className="infos-container">
      <div className="infos-wraper">
        <div className="text-side-img">
          <p className="left-side text-side">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eos
            reiciendis facere nam! Quisquam fuga, dolorem rerum voluptatum,
            veniam, voluptate a recusandae sunt similique magni illo temporibus
            cum architecto. Autem! Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Molestias beatae ipsa eos non provident magnam a
            ex atque maiores, rem sunt porro itaque pariatur nihil consectetur
            commodi officia sit eius!
          </p>
          <img src={PhotoBedroom} className="side-img" alt="venue-1" />
        </div>
        <div className="text-side-img img-first">
          <img
            className="left-side side-img"
            src={PhotoDortoires}
            alt="venue-1"
          />
          <p className="text-side">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eos
            reiciendis facere nam! Quisquam fuga, dolorem rerum voluptatum,
            veniam, voluptate a recusandae sunt similique magni illo temporibus
            cum architecto. Autem! Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Molestias beatae ipsa eos non provident magnam a
            ex atque maiores, rem sunt porro itaque pariatur nihil consectetur
            commodi officia sit eius!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Meals;
