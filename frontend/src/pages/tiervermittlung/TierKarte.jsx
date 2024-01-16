/* eslint-disable react/prop-types */
import Section from "../../layout/Section";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import H3 from "../../layout/H3";
// import H2 from "../../layout/H2";

import { useEffect, useState } from "react";

const TierKarte = ({
  id,
  name,
  rasse,
  geschlecht,
  geboren,
  kastration,
  bilder,
  informationen,
}) => {
  const [showSection, setSection] = useState(false);

  //modalImg => nur auf großen Bildschirmen, wenn man das Modal öffnet sollen Bilder angezeigt werden
  const [modalImg, setModalImg] = useState(false);

  const handleShowMoreOrLessBtn = () => setSection(!showSection);

  useEffect(() => {
    if (showSection && modalImg && document.body.style.overflowY == "scroll") {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }

    //close modal with "esc"
    const escHandler = (e) => {
      if (e.keyCode === 27) setSection(false);
    };

    document.addEventListener("keydown", escHandler);
  }, [showSection, modalImg]);

  //"media queries"
  //listen to it when we drag the screen larger or smaller
  window.addEventListener("resize", (e) => {
    if (e.target.innerWidth >= 768) {
      setModalImg(true);
    } else {
      setModalImg(false);
    }
  });

  //dependency array [] => what it should listen to
  //run at least once a mount
  //listen to it when we open the website
  useEffect(() => {
    if (window.innerWidth >= 768) {
      setModalImg(true);
    } else {
      setModalImg(false);
    }
  }, []);

  return (
    <Section mx={0}>
      <div key={id} className="grid ">
        {/* Angaben zum Tier */}
        <H3>{name ? name : ""}</H3>

        <p className="italic">
          {rasse.toLowerCase() === "keine angabe" ? "" : rasse + " "}
          {geschlecht === "keine Angabe" ? "" : geschlecht}
          {/* Leerstelle, wenn Geschlecht angegeben wird */}
          {geschlecht !== "keine Angabe" ? " " : ""}
          {kastration === "keine Angabe" ? "" : kastration}
        </p>

        <p className="italic">
          {geboren.toLowerCase() === "keine angabe" ? (
            <br></br>
          ) : (
            "Geb. " + geboren
          )}
        </p>

        {/* Bilder */}

        <div className="mt-1 flex max-h-[250px] md:h-[300px]">
          {bilder.map((bild) => {
            if (bilder.length <= 1) {
              return (
                <img
                  loading="lazy"
                  className="w-full rounded-none object-cover object-top"
                  key={bild.url}
                  src={bild.url}
                  alt={bild.name}
                />
              );
            } else {
              return (
                <img
                  className="w-1/2 rounded-none object-cover object-top "
                  key={bild.url}
                  src={bild.url}
                  alt={bild.name}
                />
              );
            }
          })}
        </div>

        {/* Informationstext */}
        {/* show more or less Btn */}
        {/* informationen sollen nicht angezeigt werden, wenn text leer ist */}
        {/* "<p><br></p>" wird als string ausgegeben */}
        {informationen !== "<p><br></p>" && (
          <button
            onClick={handleShowMoreOrLessBtn}
            className="w-full cursor-pointer bg-mainBg p-1 text-2xl text-secondText  "
          >
            {showSection ? "weniger Informationen" : "weitere Informationen"}
            <FontAwesomeIcon
              icon={showSection ? faCaretUp : faCaretDown}
              className="m-auto block"
            />
          </button>
        )}

        {/* information */}
        {/* auf kleinen Bildschirmen wird es aufgeklappt */}
        {/* auf großen Bildschirmen als Modal angezeigt */}
        <article
          // xl:overflow-y-auto xl:overflow-x-hidden
          className={
            showSection
              ? "visible md:fixed md:left-0 md:top-0 md:z-50 md:flex md:h-full md:w-full md:flex-col  md:overflow-y-auto md:bg-white md:p-16"
              : "hidden"
          }
        >
          {/* Bilder sollen nur angezeigt werden, wenn die Bildschirmgröße >= 1280 ist */}
          {modalImg && (
            <div className="my-6 flex gap-2">
              {bilder.map((bild) => {
                return (
                  <img
                    className="max-h-[450px] object-cover md:max-w-[350px] "
                    key={bild.url}
                    src={bild.url}
                    alt={bild.name}
                  />
                );
              })}
            </div>
          )}
          {/* text */}
          {modalImg && (
            <div className="mb-3">
              <H3>{name ? name : ""}</H3>

              <p>
                {rasse.toLowerCase() === "keine angabe" ? "" : rasse + " "}
                {geschlecht === "keine Angabe" ? "" : geschlecht}
                {/* Leerstelle, wenn Geschlecht angegeben wird */}
                {geschlecht !== "keine Angabe" ? " " : ""}
                {kastration === "keine Angabe" ? "" : kastration}
              </p>

              <p>
                {geboren.toLowerCase() === "keine angabe" ? (
                  <br></br>
                ) : (
                  "Geb. " + geboren
                )}
              </p>
            </div>
          )}

          <p
            className="bg-mainBg p-2 text-justify  text-secondText md:bg-transparent md:p-0 md:text-mainText 
          "
            dangerouslySetInnerHTML={{ __html: informationen }}
          />
          {/* zurück btn, wenn auf Modal geklickt wird */}
          {modalImg && (
            <button
              onClick={handleShowMoreOrLessBtn}
              className="z-45 fixed bottom-3 right-1/2 w-fit translate-x-1/2 rounded-full border-2 border-white bg-mainBg p-3 text-secondText shadow-md hover:shadow-sm"
            >
              zurück <FontAwesomeIcon icon={faPaw} className=" ml-1" />
            </button>
          )}
        </article>
      </div>
    </Section>
  );
};

export default TierKarte;

//Section
//article  => main , aside oder header
