import React from "react";

import { Carousel } from "@material-tailwind/react";

import ImageOne from "../assets/dummyImageCarouselOne.png";
import ImageTwo from "../assets/dummyImageCarouselTwo.png";
import ImageThree from "../assets/dummyImageCarouselThree.png";

export function CarouselImages() {
  return (
    <Carousel transition={{ duration: 1 }} loop={true} className="rounded-xl">
      <img
        src={ImageOne}
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src={ImageTwo}
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src={ImageThree}
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}

export default CarouselImages;
