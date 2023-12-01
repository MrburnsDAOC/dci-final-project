import React from "react";

import { Carousel } from "@material-tailwind/react";

import dummyImageOne from "../assets/dummyImageCarouselOne.png";
import dummyImageTwo from "../assets/dummyImageCarouselTwo.png";
import dummyImageThree from "../assets/dummyImageCarouselThree.png";

export function CarouselImages() {
  return (
    <Carousel className="rounded-xl">
      <img
        src={dummyImageOne}
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src={dummyImageTwo}
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src={dummyImageThree}
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}

export default CarouselImages;
