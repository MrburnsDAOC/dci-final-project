/* eslint-disable react/prop-types */
import Section from "../../layout/Section";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import H2 from "../../layout/H2";
import { useState } from "react";

const NotfalltierKarte = ({
  id,
  name,
  breed,
  dateOfBirth,
  sex,
  castrated,
  description,
  images,
}) => {
  const [showSection, setSection] = useState(false);

  const handleShowMoreOrLessBtn = () => {
    if (!showSection) {
      setSection(true);
    } else {
      setSection(false);
    }
  };
  return (
    <Section>
      <div key={id} className="grid grid-cols-1">
        <H2>{name}</H2>
        <h3 className="text-2xl">{breed}</h3>
        <h3 className="text-2xl">Geboren: {dateOfBirth}</h3>
        <h3 className="text-2xl">
          {sex} {castrated}
        </h3>

        {/* <div className="min-w-full min-h-[200px] flex justify-between py-1"> */}
        <div className="flex">
          {images.map((image) => {
            return (
              <img
                className="object-cover w-1/2"
                key={image}
                src={image}
                alt={image}
              />
            );
          })}
        </div>
        <button
          onClick={handleShowMoreOrLessBtn}
          className="bg-mainBg text-secondText p-1 cursor-pointer text-2xl"
        >
          {showSection ? "weniger Informationen" : "weitere Informationen"}
          <FontAwesomeIcon
            icon={showSection ? faCaretUp : faCaretDown}
            className="block m-auto"
          />
        </button>
        <section className={showSection ? "visible" : "hidden"}>
          <p className="p-2 bg-mainBg text-secondText text-justify">
            {description}
          </p>
        </section>
      </div>
    </Section>
  );
};

export default NotfalltierKarte;
