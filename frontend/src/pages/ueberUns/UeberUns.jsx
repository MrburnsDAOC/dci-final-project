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
            <li className="bg-mainBg sm:text-xl  text-secondText pl-6 py-2 border-b-2 transition duration-300 ease-in-out hover:bg-blue-800">
              Satzung (PDF)
            </li>
          </a>
          <a href={mitglied} target="_blank" rel="noopener noreferrer">
            <li className="bg-mainBg sm:text-xl  text-secondText pl-6 py-2 border-b-2 transition duration-300 ease-in-out hover:bg-blue-800">
              Mitglied werden
            </li>
          </a>
        </ul>
      </Section>

      <div className="xl:mx-36 md:my-6 flex flex-wrap justify-center bg-mainBg sm:bg-thirdBg">
        {paths.slice(0, -2).map((path) => {
          const imageSource = determineImageForPath(path.id);

          return (
            <div
              key={path.id}
              className="w-full sm:w-[48%] lg:w-[32.5%]  mb-2 sm:mx-1 "
            >
              <Link to={path.to} className="relative hover:opacity-75 block">
                <img
                  src={imageSource}
                  alt={`Image for ${path.name}`}
                  className="w-full h-full md:h-full md:w-full object-cover rounded-md brightness-90"
                />
                <h6 className="w-full text-center absolute bottom-0 text-secondText text-2xl mb-1">
                  {path.name}
                </h6>
              </Link>
            </div>
          );
        })}

        {/*Die letzten Elemente werden in der Mitte platziert */}
        {paths.slice(-2).map((path) => (
          <div key={path.id} className="sm:w-[48%] lg:w-[32.5%] mb-2 sm:mx-1">
            <Link
              to={path.to}
              className=" w-full h-full relative hover:opacity-75 block"
            >
              <img
                src={determineImageForPath(path.id)}
                alt={`Image for ${path.name}`}
                className="w-full h-full md:h-full md:w-full object-cover rounded-md brightness-90"
              />
              <h6 className="w-full text-center absolute bottom-0 text-secondText text-2xl mb-1">
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
