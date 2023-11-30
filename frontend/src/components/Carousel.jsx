import React from "react";
import dummyImageOne from "../assets/dummyImageCarouselOne.png";
// import dummyImageTwo from "../assets/dummyImageCarouselTwo.png";
// import dummyImageThree from "../assets/dummyImageCarouselThree.png";

const Carousel = () => {
  return (
    <div className="min-w-full border-red-400 border-4">
      <img src={dummyImageOne} alt="dummyImageOne" />
      <h2 className="bg-slate-600 text-white">TESTEST</h2>
      <h2 className="bg-slate-600 text-cyan-300">TESTEST</h2>
      <h2 className="bg-slate-600 text-xs">Carousel</h2>
      <h2 className="bg-gray-900"> ANOTHER TEST</h2>
      <h2 className="bg-gray-900"> ANOTHER TEST</h2>
      <h2 className="bg-red-600"> LALALALLALALAL</h2>
      <h2 className="bg-lime-500">SALEM</h2>
      <h2 className=" bg-yellow-400">FINALLY?</h2>
      <h2 className=" font-bold">INSPECT</h2>
      <img src={dummyImageOne} alt="dummyImageOne" />
    </div>
  );
};

export default Carousel;
