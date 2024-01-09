/* eslint-disable react/prop-types */
import Section from "../../layout/Section";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import H3 from "../../layout/H3";
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

  const handleShowMoreOrLessBtn = () => {
    if (!showSection) {
      setSection(true);
    } else {
      setSection(false);
    }
  };

  //"media queries"
  //listen to it when we drag the screen larger or smaller
  window.addEventListener("resize", (e) => {
    if (e.target.innerWidth >= 768) {
      //big screen => nav links
      setSection(true);
    } else {
      setSection(false);
    }
  });

  //dependency array [] => what it should listen to
  //run at least once a mount
  //listen to it when we open the website
  useEffect(() => {
    if (window.innerWidth >= 768) {
      setSection(true);
    } else {
      setSection(false);
    }
  }, []);

  return (
    <Section>
      {/* <div key={id} className="grid grid-cols-1"> */}
      <div key={id} className="grid lg:grid-cols-2 lg:grid-rows-2">
        <div className="lg:col-start-1 lg:row-start-1">
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
            {geboren.toLowerCase() === "keine angabe" ? "" : "Geb. " + geboren}
          </p>

          {/* <div className="min-w-full min-h-[200px] flex justify-between py-1"> */}
        </div>
        <div className="lg:col-start-1 lg:row-start-2">
          {/* Bilder */}
          <div className="mt-1 flex max-h-[500px] md:h-[600px] lg:h-[350px]">
            {bilder.map((bild) => {
              if (bilder.length <= 1) {
                return (
                  <img
                    className="w-full rounded-none object-cover"
                    key={bild.url}
                    src={bild.url}
                    alt={bild.name}
                  />
                );
              } else {
                return (
                  <img
                    className="w-1/2 rounded-none object-cover"
                    key={bild.url}
                    src={bild.url}
                    alt={bild.name}
                  />
                );
              }
            })}
          </div>
        </div>

        <div className="lg:col-start-2 lg:row-span-2">
          {/* show more or less Btn */}
          {/* informationen sollen nicht angezeigt werden, wenn text leer ist */}
          {/* "<p><br></p>" wird als string ausgegeben */}
          {informationen !== "<p><br></p>" && (
            <button
              onClick={handleShowMoreOrLessBtn}
              className="cursor-pointer bg-mainBg p-1 text-2xl text-secondText md:hidden"
            >
              {showSection ? "weniger Informationen" : "weitere Informationen"}
              <FontAwesomeIcon
                icon={showSection ? faCaretUp : faCaretDown}
                className="m-auto block"
              />
            </button>
          )}

          {/* information */}
          <article className={showSection ? "visible" : "hidden"}>
            <p
              className="bg-mainBg p-2 text-justify text-secondText"
              dangerouslySetInnerHTML={{ __html: informationen }}
            ></p>
          </article>
        </div>
      </div>
    </Section>
  );
};

export default TierKarte;
