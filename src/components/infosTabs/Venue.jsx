import React from "react";
import Photo1 from "../../assets/photos/photo_1.jpeg";
import PhotoPiscine from "../../assets/photos/photo_piscine.jpeg";

const Venue = () => {
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
          <img src={Photo1} alt="venue-1" className="side-img" />
        </div>
        <div className="text-side-img img-first">
          <img
            className="left-side side-img"
            src={PhotoPiscine}
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

export default Venue;
