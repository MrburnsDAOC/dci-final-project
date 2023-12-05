import { NavLink } from "react-router-dom";
import H2 from "../../layout/H2";
import H5 from "../../layout/H5";
import imgAktuellesOne from "../../assets/imgAktuellesOne.png";
import imgAktuellesTwo from "../../assets/imgAktuellesTwo.png";
import imgAktuellesThree from "../../assets/imgAktuellesThree.png";
import Section from "../../layout/Section";

const UeberUns = () => {
  const paths = [
    {
      name: "Satzung (PDF Datei)",
      to: "über-uns/satzung",
      id: 1,
    },
    { name: "Geschichtliches", to: "/über-uns/text#Geschichtliches", id: 2 },
    { name: "Unser Anliegen", to: "/über-uns/text#Unser-Anliegen", id: 3 },
    { name: "Unsere Aufgaben", to: "/über-uns/text#Usere-Aufgaben", id: 4 },
    { name: "Unser Vorstand", to: "/über-uns/text#Unser-Vorstand", id: 5 },
    { name: "Mitglied werden", to: "über-uns/mitglied-werden", id: 6 },
  ];

  const presse = [
    {
      id: 1,
      img: imgAktuellesOne,
      title: "Tages-/Wochenpresse",
    },
    {
      id: 2,
      img: imgAktuellesTwo,
      title: "Sonstige Medien",
    },
    {
      id: 3,
      img: imgAktuellesThree,
      title: "DATZ",
    },
  ];

  return (
    <div>
      {/* Informationen */}
      <Section>
        <div className="ml-4 mb-2">
          <H2>Informationen</H2>
        </div>
        <nav className="bg-mainBg  m-auto">
          <ul>
            {paths.map((path) => {
              return (
                <li
                  key={path.id}
                  className="text-white pl-6 py-2 border-b-2 transition duration-300 ease-in-out hover:bg-blue-800"
                >
                  <NavLink to={path.to}>{path.name}</NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </Section>

      {/* Presse: */}
      <Section>
        <div className="px-8">
          <H2>Presse</H2>
        </div>
        <div className=" grid grid-cols-1 gap-2 ">
          {presse.map(({ id, img, date, title }) => (
            <div
              key={id}
              className={`min-w-full min-h-[200px] bg- flex justify-around py-1 rounded-lg`}
            >
              <img className="w-1/2" src={img} alt={img} />
              <div className=" w-1/2 p-2 my-auto">
                <H5>{title}</H5>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default UeberUns;
