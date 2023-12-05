/* eslint-disable react/no-unescaped-entities */
import Carousel from "../../components/Carousel";

import imgAktuellesOne from "../../assets/imgAktuellesOne.png";
import imgAktuellesTwo from "../../assets/imgAktuellesTwo.png";
import imgAktuellesThree from "../../assets/imgAktuellesThree.png";
import H2 from "../../layout/H2";
import H5 from "../../layout/H5";
import BackButton from "../../layout/BackButton";

const Home = () => {
  // Dummy data "Aktuelles":
  const news = [
    {
      id: 1,
      img: imgAktuellesOne,
      title: "Jahreshauptversammlung",
      date: "01.12.2023",
    },
    {
      id: 2,
      img: imgAktuellesTwo,
      title: "Großes Fan-Projekt der Volks- und Raiffeisenbank Dachau  ",
      date: "26.11.2023",
    },
    {
      id: 3,
      img: imgAktuellesThree,
      title: "Headline news 3",
      date: "23.11.2023",
    },
    // {
    //   id: 1,
    //   wann: "Sa, 09.12.2023 14:00h"
    //   was: "Jahreshauptversammlung nach mehreren Verschiebungen neuer Termin!",
    //   wo: "Vereinsheim der Hundefreunde Dachau,Roßwachtstr. 35, 85221 Dachau",
    // },
  ];
  return (
    <>
      <Carousel />
      <section className=" mt-0 bg-secondBg p-3 px-8 mb-2 text-justify">
        <h1 className=" py-3 text-4xl leading-10">
          Tierschutzverein Dachau e.V.
        </h1>
        {/* Infotext Tierschutzverein Dachau e.V.: */}
        <p>
          Bereits bei Vereinsgründung wurde als ein Hauptziel des Vereins der
          Bau und Betrieb eines Tierheims in der Satzung verankert. Der damalige
          Vorstand hatte ein Grundstück an der Roßwachtstraße in Dachau
          ausgemacht, das teils der Stadt Dachau und teils dem
          Wasserwirtschaftsamt des Freistaates gehörte. Nach einigen
          Verhandlungen mit Stadt und Freistaat genehmigten die Stadt Dachau und
          das Wasserwirtschaftsamt die kostenlose Nutzung des Grundstücks durch
          den Tierschutzverein. Das gesamte Areal umfaßt ca. 4.500 qm und liegt
          sehr schön in einem Landschaftsschutzgebiet. Nach Genehmigung der
          Pläne wurde im Jahr 1984 mit dem Bau des Tierheims begonnen. Geplant
          waren neben dem eigentlichen Tierheim mit Hundezwingern und Katzenhaus
          ein Kleintierhaus und ein Personalwohnhaus. Nach einer - immer wieder
          durch finanzielle Engpässe unterbrochenen - Bauzeit von 3Jahren wurde
          das Tierheim 1987 in Betrieb genommen. Der Wohnhausbau wurde aus
          finanziellen Gründen „auf Eis" gelegt; der Bau des Kleintierhauses gar
          nicht begonnen. Das Wohnhaus wurde in der Folgezeit je nach
          finanzieller Lage „stückweise" weitergebaut und 1994 endgültig fertig
          gestellt.
        </p>
        <button>erfahre mehr</button>
      </section>

      {/* Aktuelles: */}
      <section className="mt-0 bg-secondBg py-3 mb-2">
        <div className="px-8">
          <H2>Aktuelle Meldungen</H2>
        </div>
        <div className=" grid grid-cols-1 gap-2 ">
          {news.map(({ id, img, date, title }) => (
            <div
              key={id}
              className={`min-w-full min-h-[200px] bg- flex justify-around py-1 `}
            >
              <img className="w-1/2 object-cover" src={img} alt={img} />
              <div className=" w-1/2 p-2 shadow-inner">
                <p>{date}</p>
                <H5>{title}</H5>
              </div>
            </div>
          ))}
        </div>
      </section>
      <BackButton />
      {/* <Footer /> */}
    </>
  );
};

export default Home;
