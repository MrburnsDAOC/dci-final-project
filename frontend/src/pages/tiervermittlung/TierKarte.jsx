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

  //modalImg => nur auf großen Bildschirmen, wenn man das Modal öffnet sollen Bilder angezeigt werden
  const [modalImg, setModalImg] = useState(false);

  const handleShowMoreOrLessBtn = () => {
    if (!showSection) {
      setSection(true);
    } else {
      setSection(false);
    }

    console.log(showSection, modalImg, document.body.style.overflow);
  };

  const handleScrollBehavior = () => {
    //soll scrollen auf großen Bildschirmen verhindern, wenn Modal geöffnet ist
    if (showSection && modalImg && document.body.style.overflow == "scroll") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
    console.log(showSection, modalImg, document.body.style.overflow);
  };

  //"media queries"
  //listen to it when we drag the screen larger or smaller
  window.addEventListener("resize", (e) => {
    if (e.target.innerWidth >= 1280) {
      //big screen => nav links
      setModalImg(true);
    } else {
      setModalImg(false);
    }
  });

  //dependency array [] => what it should listen to
  //run at least once a mount
  //listen to it when we open the website
  useEffect(() => {
    if (window.innerWidth >= 1280) {
      setModalImg(true);
    } else {
      setModalImg(false);
    }
  }, []);

  // const setHidden = () => {
  //   if (document.body.style.overflow !== "hidden") {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "scroll";
  //   }}

  return (
    <Section mx={0}>
      {/* <div key={id} className="grid grid-cols-1"> */}
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
          {geboren.toLowerCase() === "keine angabe" ? "" : "Geb. " + geboren}
        </p>

        {/* <div className="min-w-full min-h-[200px] flex justify-between py-1"> */}

        {/* Bilder */}
        {/* <div className="mt-1 flex max-h-[500px] md:h-[600px]"> */}

        <div className="mt-1 flex xl:h-[300px]">
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

        {/* Informationstext */}
        {/* show more or less Btn */}
        {/* informationen sollen nicht angezeigt werden, wenn text leer ist */}
        {/* "<p><br></p>" wird als string ausgegeben */}
        {informationen !== "<p><br></p>" && (
          <button
            // onClick={handleShowMoreOrLessBtn}

            onClick={(event) => {
              handleShowMoreOrLessBtn();
              handleScrollBehavior();
              console.log(event);
            }}
            className="w-full cursor-pointer bg-mainBg p-1 text-2xl text-secondText"
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
          className={
            showSection
              ? " visible xl:fixed xl:left-0 xl:top-0 xl:z-50 xl:flex xl:h-full xl:w-full xl:flex-col xl:items-center xl:justify-center xl:overflow-y-auto xl:overflow-x-hidden xl:bg-white xl:px-96"
              : "hidden"
          }
        >
          {/* Bilder sollen nur angezeigt werden, wenn die Bildschirmgröße >= 1280 ist */}
          {modalImg && (
            <div className=" my-6 flex max-w-[350px] items-center justify-center ">
              {bilder.map((bild) => {
                return (
                  <img
                    className="object-cover"
                    key={bild.url}
                    src={bild.url}
                    alt={bild.name}
                  />
                );
              })}
            </div>
          )}

          <p
            className="bg-mainBg p-2 text-justify  text-secondText xl:p-5"
            dangerouslySetInnerHTML={{ __html: informationen }}
          />

          {/* Zurüch btn, wenn auf Modal geklickt wird */}
          {modalImg && (
            <button
              onClick={handleShowMoreOrLessBtn}
              // onClick={(event) => {
              //   handleShowMoreOrLessBtn();
              //   handleScrollBehavior();
              // }}
              className="z-45 fixed bottom-3 right-1/2 w-fit translate-x-1/2 rounded-full border-2 border-white bg-mainBg p-3 text-secondText"
            >
              zurück
            </button>
          )}
        </article>
      </div>
    </Section>
  );
};

export default TierKarte;

// Beispiel mit zwei Function auf ein button
// function App() {
//   const handleClick = () => {
//     function1();
//     function2();
//   };

//   const function1 = () => {
//     console.log('Function 1 is executed');
//   };

//   const function2 = () => {
//     console.log('Function 2 is executed');
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>Click Me</button>
//     </div>
//   );
// }
