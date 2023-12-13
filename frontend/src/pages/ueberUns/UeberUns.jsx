import { Link } from "react-router-dom";
import H2 from "../../layout/H2";
import H5 from "../../layout/H5";
import imgAktuellesOne from "../../assets/imgAktuellesOne.png";
import imgAktuellesTwo from "../../assets/imgAktuellesTwo.png";
import imgAktuellesThree from "../../assets/imgAktuellesThree.png";
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

  const presse = [
    {
      id: 1,
      img: imgAktuellesOne,
      title: "Tages-/Wochenpresse",
      to: "/über-uns/presse/#Pressestimmen",
    },
    {
      id: 2,
      img: imgAktuellesTwo,
      title: "Sonstige Medien",
      to: "/über-uns/presse/#Sonstige-Medien",
    },
    {
      id: 3,
      img: imgAktuellesThree,
      title: "DATZ",
      to: "/über-uns/presse/#DATZ",
    },
  ];

  return (
    <div>
      {/* Informationen */}
      <Section>
        <div className="ml-4 mb-2">
          <H2>Informationen</H2>
        </div>

        <div className="m-auto bg-mainBg sm:flex sm:flex-wrap sm:justify-between sm:bg-secondBg ">
          <div className="text-white p-2 sm:p-0 border-b-2 sm:border-none transition duration-300 ease-in-out hover:bg-blue-800 sm:my-4 sm:w-[47%]  lg:w-[30%]">
            <a
              href={satzungPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:flex sm:flex-col sm:items-center sm:relative w-full h-full"
            >
              <img
                src={imgSatzung}
                alt="Image for Satzung"
                className=" w-full h-full hidden object-cover sm:block hover:opacity-75 transition duration-200 ease-in-out"
              />
              <h2 className="sm:self-center sm:absolute sm:bottom-3 text-xl sm:text-2xl">
                Satzung-Pdf
              </h2>
            </a>
          </div>

          {paths.map((path) => {
            const imageSource = determineImageForPath(path.id);
            return (
              <div className="text-white p-2 sm:p-0 text-xl sm:my-4 sm:text-2xl border-b-2 sm:border-none transition duration-300 ease-in-out hover:bg-blue-800 sm:w-[47%] lg:w-[30%]">
                <Link
                  to={path.to}
                  className="sm:flex sm:flex-col sm:items-center sm:relative w-full h-full"
                >
                  <img
                    src={imageSource}
                    alt={`Image for ${path.name}`}
                    className="w-full h-full hidden sm:block hover:opacity-75 transition duration-200 ease-in-out"
                  />
                  <h2 className="text-xl sm:text-2xl sm:bottom-3 text-secondText sm:absolute">
                    {path.name}
                  </h2>
                </Link>
              </div>
            );
          })}

          <div className="text-white p-2 sm:m-auto sm:p-0 text-xl sm:my-4 sm:text-2xl border-b-2 sm:border-none transition duration-300 ease-in-out hover:bg-blue-800 sm:w-[47%] lg:w-[30%]">
            <a
              href={mitglied}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:flex sm:flex-col sm:items-center sm:relative w-full h-full  "
            >
              <img
                src={imgMitglied}
                alt="Image for Mitglied-Werden"
                className=" w-full h-full hidden sm:block hover:opacity-75 transition duration-200 ease-in-out"
              />
              <h2 className="text-xl sm:text-2xl sm:bottom-3 text-secondText sm:absolute">
                Mitglied Werden
              </h2>
            </a>
          </div>
        </div>
      </Section>

      {/* Presse: */}
      <Section>
        <div className="ml-4 mb-2">
          <H2>Presse</H2>
        </div>
        <div className=" grid grid-cols-1 gap-2 ">
          {presse.map(({ id, img, title, to }) => (
            <div
              key={id}
              className={`min-w-full min-h-[200px] flex justify-around py-1 rounded-lg`}
            >
              <img className="w-1/2" src={img} alt={img} />
              <div className=" w-1/2 p-2 my-auto">
                <Link to={to}>
                  <H5>{title}</H5>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default UeberUns;
