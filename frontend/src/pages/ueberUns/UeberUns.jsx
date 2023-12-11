import { Link } from "react-router-dom";
import H2 from "../../layout/H2";
import H5 from "../../layout/H5";
// import imgAktuellesOne from "../../assets/imgAktuellesOne.png";
// import imgAktuellesTwo from "../../assets/imgAktuellesTwo.png";
// import imgAktuellesThree from "../../assets/imgAktuellesThree.png";

import imgWochenpresse from "../../assets/ueberUns/newImg.jpeg";
import imgSonstigeMedien from "../../assets/ueberUns/sonstigeNewsImg.webp";
import imgDatz from "../../assets/ueberUns/datzImg.png";

import Section from "../../layout/Section";
import satzungPdf from "../../assets/ueber-uns/Satzung-pdf.pdf";
import mitglied from "../../assets/ueber-uns/Beitritt-Neu.pdf";

const UeberUns = () => {
  const paths = [
    { name: "Geschichtliches", to: "/über-uns/text/#Geschichtliches", id: 2 },
    { name: "Unser Anliegen", to: "/über-uns/text/#Unser-Anliegen", id: 3 },
    { name: "Unsere Aufgaben", to: "/über-uns/text/#Unsere-Aufgaben", id: 4 },
    { name: "Unser Tierheim", to: "/über-uns/text/#Unser-Tierheim", id: 5 },
    { name: "Unser Vorstand", to: "/über-uns/text/#Unser-Vorstand", id: 6 },
  ];

  const presse = [
    {
      id: 1,
      img: imgWochenpresse,
      title: "Tages-/Wochenpresse",
      to: "/über-uns/presse/#Pressestimmen",
    },
    {
      id: 2,
      img: imgSonstigeMedien,
      title: "Sonstige Medien",
      to: "/über-uns/presse/#Sonstige-Medien",
    },
    {
      id: 3,
      img: imgDatz,
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
        <nav className="bg-mainBg m-auto">
          <ul>
            <li className="text-white pl-6 py-2 border-b-2 transition duration-300 ease-in-out hover:bg-blue-800">
              <a href={satzungPdf} target="_blank" rel="noopener noreferrer">
                Satzung-pdf
              </a>
            </li>
            {paths.map((path) => {
              return (
                <li
                  key={path.id}
                  className="text-white pl-6 py-2 border-b-2 transition duration-300 ease-in-out hover:bg-blue-800"
                >
                  <Link to={path.to}>{path.name}</Link>
                </li>
              );
            })}
            <li className="text-white pl-6 py-2 border-b-2 transition duration-300 ease-in-out hover:bg-blue-800">
              <a href={mitglied} target="_blank" rel="noopener noreferrer">
                Mitglied werden
              </a>
            </li>
          </ul>
        </nav>
      </Section>

      {/* Presse: */}
      <Section>
        <div className="ml-4 mb-2">
          <H2>Presse</H2>
        </div>
        <div className=" grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-3">
          {presse.map(({ id, img, title, to }) => (
            <Link to={to}>
              <div
                key={id}
                className={`min-w-full min-h-[200px] max-h-[400px] bg- flex justify-around py-1 rounded-lg`}
              >
                <img className="w-1/2 h-52 object-cover" src={img} alt={img} />
                <div className=" w-1/2 p-2 my-auto">
                  <H5>{title}</H5>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default UeberUns;
