import { Link } from "react-router-dom";
import H2 from "../../layout/H2";
// import H5 from "../../layout/H5";
// import imgAktuellesOne from "../../assets/imgAktuellesOne.png";
// import imgAktuellesTwo from "../../assets/imgAktuellesTwo.png";
// import imgAktuellesThree from "../../assets/imgAktuellesThree.png";

import Section from "../../layout/Section";
import satzungPdf from "../../assets/ueber-uns/Satzung-pdf.pdf";
import mitglied from "../../assets/ueber-uns/Beitritt-Neu.pdf";
import imgGeschichtliches from "../../assets/ueber-uns/imgGeschichtliches.jpg";
import imgUnserAnliegen from "../../assets/ueber-uns/imgUnserAnliegen.jpg";
import imgUnsereAufgaben from "../../assets/ueber-uns/imgUnsereAufgaben.jpg";
import imgUnserTierheim from "../../assets/ueber-uns/imgUnserTierheim.jpg";
import imgUnserVorstand from "../../assets/ueber-uns/imgUnserVorstand.jpg";
import imgSatzung from "../../assets/ueber-uns/imgSatzung.jpg";
import imgMitglied from "../../assets/ueber-uns/imgMitglied.jpg";
import imgDefault from "../../assets/ueber-uns/datz_head.jpg";

const UeberUns = () => {
  const paths = [
    { name: "Geschichtliches", to: "/über-uns/text/#Geschichtliches", id: 2 },
    { name: "Unser Anliegen", to: "/über-uns/text/#Unser-Anliegen", id: 3 },
    { name: "Unsere Aufgaben", to: "/über-uns/text/#Unsere-Aufgaben", id: 4 },
    { name: "Unser Tierheim", to: "/über-uns/text/#Unser-Tierheim", id: 5 },
    { name: "Unser Vorstand", to: "/über-uns/text/#Unser-Vorstand", id: 6 },
  ];

  const determineImageForPath = (id) => {
    if (id === 2) {
      return imgGeschichtliches;
    } else if (id === 3) {
      return imgUnserAnliegen;
    } else if (id === 4) {
      return imgUnsereAufgaben;
    } else if (id === 5) {
      return imgUnserTierheim;
    } else if (id === 6) {
      return imgUnserVorstand;
    } else {
      return imgDefault;
    }
  };

  

  return (
    <div>
      {/* Informationen */}
      <Section>
        <H2>Informationen</H2>
      </Section>

      <div className="m-auto bg-mainBg sm:flex sm:flex-wrap sm:justify-between sm:bg-thirdBg md:my-6 xl:mx-36">
        <div className="text-white p-2 sm:p-0 border-b-2 sm:border-none transition duration-300 ease-in-out hover:bg-blue-800 sm:hover:bg-transparent sm:my-1 sm:w-[49.5%]  lg:w-[33%] sm:h-[220px] lg:h-[250px] xl:h-[300px] 2xl:h-[370px]">
          <a
            href={satzungPdf}
            target="_blank"
            rel="noopener noreferrer"
            className="sm:flex sm:flex-col sm:items-center sm:relative w-full h-full"
          >
            <img
              src={imgSatzung}
              alt="Image for Satzung"
              className="object-cover w-full h-full hidden sm:rounded-md sm:block hover:opacity-75 transition duration-200 ease-in-out filter brightness-75"
            />
            <h6 className="sm:self-center sm:absolute sm:bottom-3 text-xl sm:text-2xl">
              Satzung-Pdf
            </h6>
          </a>
        </div>

        {paths.map((path) => {
          const imageSource = determineImageForPath(path.id);
          return (
            <div
              key={path.id}
              className="text-white p-2 sm:p-0 text-xl sm:my-1 sm:text-2xl border-b-2 sm:border-none transition duration-300 ease-in-out hover:bg-blue-800 sm:hover:bg-transparent sm:w-[49.5%] lg:w-[33%] sm:h-[220px] lg:h-[250px] xl:h-[300px] 2xl:h-[370px]"
            >
              <Link
                to={path.to}
                className="sm:flex sm:flex-col sm:items-center sm:relative w-full h-full"
              >
                <img
                  src={imageSource}
                  alt={`Image for ${path.name}`}
                  className="object-cover w-full h-full hidden sm:rounded-md sm:block hover:opacity-75 transition duration-200 ease-in-out filter brightness-75"
                />
                <h6 className="text-xl sm:text-2xl sm:bottom-3 text-secondText sm:absolute">
                  {path.name}
                </h6>
              </Link>
            </div>
          );
        })}

        <div className="text-white p-2 sm:m-auto sm:p-0 text-xl sm:my-1 sm:text-2xl border-b-2 sm:border-none transition duration-300 ease-in-out hover:bg-blue-800 sm:hover:bg-transparent sm:w-[49.5%] lg:w-[33%] sm:h-[220px] lg:h-[250px] xl:h-[300px] 2xl:h-[370px]">
          <a
            href={mitglied}
            target="_blank"
            rel="noopener noreferrer"
            className="sm:flex sm:flex-col sm:items-center sm:relative w-full h-full  "
          >
            <img
              src={imgMitglied}
              alt="Image for Mitglied-Werden"
              className=" object-cover w-full h-full hidden sm:rounded-md sm:block hover:opacity-75 transition duration-200 ease-in-out filter brightness-75"

              // className=" object-cover w-full h-full hidden sm:rounded-md sm:block hover:opacity-75 transition duration-200 ease-in-out filter brightness-75"
            />
            <h6 className="text-xl sm:text-2xl sm:bottom-3 text-secondText sm:absolute">
              Mitglied werden
            </h6>
          </a>
        </div>
      </div>
    </div>
  );
};

export default UeberUns;
