/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import H2 from "../../../layout/H2";
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
  const [sectionId, setSectionId] = useState(null);
  const handleShowMoreOrLessBtn = (id) => {
    let sectionId = id;
    setSectionId(sectionId);
    if (!showSection) {
      setSection(true);
    } else {
      setSection(false);
    }
  };
  return (
    <div key={id} className="grid grid-cols-1">
      <div>
        <H2>{name}</H2>
        <h3 className=" text-2xl">{breed}</h3>
        <h3 className=" text-2xl">Geboren: {dateOfBirth}</h3>
        <h3 className=" text-2xl">
          {sex}, {castrated ? "kastriert" : "nicht kastriert"}
        </h3>
      </div>
      <div className="mt-2 h-fit">
        {images.map((image) => {
          return (
            <img
              className=" h-1/3 w-full object-cover object-top"
              key={image}
              src={image}
              alt={image}
            />
          );
        })}
      </div>
      <button
        onClick={() => {
          handleShowMoreOrLessBtn(id);
        }}
        className="bg-mainBg text-secondText p-1 cursor-pointer text-2xl"
      >
        {sectionId == id && showSection
          ? "weniger Informationen"
          : "weitere Informationen"}
        <FontAwesomeIcon
          icon={sectionId == id && showSection ? faCaretUp : faCaretDown}
          className="block m-auto"
        />
      </button>
      <section
        className={showSection && sectionId == id ? "visible" : "hidden"}
      >
        <p className=" p-2 bg-mainBg text-secondText text-justify">
          {description}
        </p>
      </section>
    </div>
  );
};

export default NotfalltierKarte;
