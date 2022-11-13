import { useEffect, useState } from "react";
import {
  burgerMenu,
  flowerImg1,
  addGuestIcon,
  deleteTrash,
  flowerImg2,
  homeImg,
  venuImg,
  photoBedroom,
  photoDortoires,
  photoPiscine,
  filterScreen,
  filterScreen2,
  filterScreen2PNG,
  jeune,
  pacs,
  signaturesAppart,
  travaux,
  filterBackgroundPhone,
  photo1,
  carousel1,
  carousel2,
  carousel3,
  carousel4,
  carousel5,
  carousel6,
  carousel7,
  carousel8,
  bye,
  travauxAndAppart,
} from "../assets/images";

const ASSETS = [
  burgerMenu,
  flowerImg1,
  addGuestIcon,
  deleteTrash,
  flowerImg2,
  homeImg,
  venuImg,
  photoBedroom,
  photoDortoires,
  photoPiscine,
  filterScreen,
  filterScreen2,
  filterScreen2PNG,
  jeune,
  pacs,
  signaturesAppart,
  travaux,
  filterBackgroundPhone,
  photo1,
  carousel1,
  carousel2,
  carousel3,
  carousel4,
  carousel5,
  carousel6,
  carousel7,
  carousel8,
  bye,
  travauxAndAppart,
];

const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = function () {
      resolve(img);
    };
    img.onerror = img.onabort = function () {
      reject(src);
    };
    img.src = src;
  });
};

const useImagePreloader = () => {
  const [imagesPreloaded, setImagesPreloaded] = useState(false);

  useEffect(() => {
    let isCancelled = false;

    async function effect() {
      console.log("PRELOAD");

      if (isCancelled) {
        return;
      }

      const imagesPromiseList = [];
      for (const i of ASSETS) {
        imagesPromiseList.push(preloadImage(i));
      }

      await Promise.all(imagesPromiseList);

      if (isCancelled) {
        return;
      }

      setImagesPreloaded(true);
    }

    effect();

    return () => {
      isCancelled = true;
    };
  }, []);

  return { imagesPreloaded };
};

export default useImagePreloader;
