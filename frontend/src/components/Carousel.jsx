import { Carousel } from "@material-tailwind/react";

import ImageOne from "../assets/home/carousel/dogs01.jpeg";
import ImageTwo from "../assets/home/carousel/cats01.jpeg";
import ImageThree from "../assets/home/carousel/guineaPigs01.jpeg";
import ImageFour from "../assets/home/carousel/dogs02.jpeg";
import ImageFive from "../assets/home/carousel/cats02.jpeg";

export function CarouselImages() {
  return (
    <Carousel
      transition={{ duration: 1 }}
      loop={true}
      className="z-0 h-[50vh] mx-auto "
    >
      <img
        src={ImageOne}
        alt="Four dogs looking happy from the top of a wall."
        className="h-[50vh] w-full object-cover object-center"
      />
      <img
        src={ImageTwo}
        alt="A cat that wants to be picked up."
        className="h-full w-full object-cover object-top"
      />
      <img
        src={ImageThree}
        alt="Guinea pigs eating"
        className="h-full w-full object-cover"
      />
      <img
        src={ImageFour}
        alt="A happy dog looking into the camera"
        className="h-full w-full object-cover"
      />
      <img
        src={ImageFive}
        alt="A cat with their two kittens outside."
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}

export default CarouselImages;
