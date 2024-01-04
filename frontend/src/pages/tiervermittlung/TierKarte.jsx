/* eslint-disable react/prop-types */
import Section from "../../layout/Section";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import H2 from "../../layout/H2";
import { useState } from "react";
import H3 from "../../layout/H3";

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

  return (
    <Section>
      <div key={id} className="grid grid-cols-1">
        {/* Angaben zum Tier */}
        <H2>{name ? name : ""}</H2>
        <H3 py={0}>{rasse.toLowerCase() === "keine angabe" ? "" : rasse}</H3>

        <H3 py={0}>
          {geboren.toLowerCase() === "keine angabe" ? "" : "Geb. " + geboren}
        </H3>
        <H3 py={0}>
          {geschlecht === "keine Angabe" ? "" : geschlecht}
          {/* Leerstelle, wenn Geschlecht angegeben wird */}
          {geschlecht !== "keine Angabe" ? " " : ""}
          {kastration === "keine Angabe" ? "" : kastration}
        </H3>

        {/* <div className="min-w-full min-h-[200px] flex justify-between py-1"> */}

        {/* Bilder */}
        <div className="flex">
          {bilder.map((bild) => {
            return (
              <img
                className="object-cover w-1/2"
                key={bild.url}
                src={bild.url}
                alt={bild.name}
              />
            );
          })}
        </div>

        {/* show more or less Btn */}
        {/* informationen sollen nicht angezeigt werden, wenn text leer ist */}
        {/* "<p><br></p>" wird als string ausgegeben */}
        {informationen !== "<p><br></p>" && (
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
        )}

        {/* information */}
        <article className={showSection ? "visible" : "hidden"}>
          <p
            className="p-2 bg-mainBg text-secondText text-justify"
            dangerouslySetInnerHTML={{ __html: informationen }}
          ></p>
        </article>
      </div>
    </Section>
  );
};

export default TierKarte;
