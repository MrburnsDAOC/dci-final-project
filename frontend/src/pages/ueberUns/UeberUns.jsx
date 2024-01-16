import { Link } from "react-router-dom";
import H2 from "../../layout/H2";

import Section from "../../layout/Section";
import satzungPdf from "../../assets/ueber-uns/Satzung-pdf.pdf";
import mitglied from "../../assets/ueber-uns/Beitritt-Neu.pdf";
import imgGeschichtliches from "../../assets/ueber-uns/imgGeschichtliches.jpg";
import imgUnserAnliegen from "../../assets/ueber-uns/imgUnserAnliegen.jpg";
import imgUnsereAufgaben from "../../assets/ueber-uns/imgUnsereAufgaben.jpg";
import imgUnserTierheim from "../../assets/ueber-uns/imgUnserTierheim.jpg";
import imgUnserVorstand from "../../assets/ueber-uns/imgUnserVorstand.jpg";
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
        <ul className="sm:w-[70%] md:w-[60%]">
          <a href={satzungPdf} target="_blank" rel="noopener noreferrer">
            <li className="border-b-2 bg-mainBg  py-2 pl-6 text-secondText transition duration-300 ease-in-out hover:bg-blue-800 sm:text-xl">
              Satzung (PDF)
            </li>
          </a>
          <a href={mitglied} target="_blank" rel="noopener noreferrer">
            <li className="border-b-2 bg-mainBg  py-2 pl-6 text-secondText transition duration-300 ease-in-out hover:bg-blue-800 sm:text-xl">
              Mitglied werden
            </li>
          </a>
        </ul>
      </Section>

      <div className="flex flex-wrap justify-center bg-mainBg sm:bg-thirdBg md:my-6 xl:mx-36">
        {paths.slice(0, -2).map((path) => {
          const imageSource = determineImageForPath(path.id);

          return (
            <div
              key={path.id}
              className="mb-2 w-full sm:mx-1  sm:w-[48%] lg:w-[32.5%] "
            >
              <Link to={path.to} className="relative block hover:opacity-75">
                <img
                  src={imageSource}
                  alt={`Image for ${path.name}`}
                  className="h-full w-full rounded-md object-cover brightness-90 md:h-full md:w-full"
                />
                <h6 className="absolute bottom-0 mb-1 w-full text-center text-2xl text-secondText">
                  {path.name}
                </h6>
              </Link>
            </div>
          );
        })}

        {/*Die letzten Elemente werden in der Mitte platziert */}
        {paths.slice(-2).map((path) => (
          <div key={path.id} className="mb-2 sm:mx-1 sm:w-[48%] lg:w-[32.5%]">
            <Link
              to={path.to}
              className=" relative block h-full w-full hover:opacity-75"
            >
              <img
                src={determineImageForPath(path.id)}
                alt={`Image for ${path.name}`}
                className="h-full w-full rounded-md object-cover brightness-90 md:h-full md:w-full"
              />
              <h6 className="absolute bottom-0 mb-1 w-full text-center text-2xl text-secondText">
                {path.name}
              </h6>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UeberUns;
