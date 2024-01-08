/* eslint-disable react/no-unescaped-entities */
import Carousel from "../../components/Carousel";

import tierschutzpreis from "../../assets/tierschutzpreis.jpg";
import bannerMonikaWeigler from "../../assets/banner_wegler_katzen.jpg";

import H2 from "../../layout/H2";
import H5 from "../../layout/H5";
import Section from "../../layout/Section";
import { Link } from "react-router-dom";

import NextBtn from "../../components/buttons/NextButton";

import { useContext } from "react";
import DataContext from "../../components/kontentAi/DataContext";

import imgWochenpresse from "../../assets/ueber-uns/newImg.jpeg";
import imgSonstigeMedien from "../../assets/ueber-uns/sonstigeNewsImg.webp";
import imgDatz from "../../assets/ueber-uns/datzImg.png";

const Home = () => {
  const presse = [
    {
      id: 1,
      img: imgWochenpresse,
      title: "Tages-/ Wochenpresse",
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

  const { data } = useContext(DataContext);
  let currentData = [];

  if (data) {
    currentData = data.filter(
      (element) =>
        element.system.type.toLowerCase() === "termin" &&
        element.elements.archiv.value[0].name?.toLowerCase() === "aktuell"
    );
  }

  console.log(currentData);

  return (
    <div>
      <Carousel />
      <Section mt={0}>
        <h1 className="text-left py-3 text-3xl leading-10 font-bold">
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
        <Link to={"/über-uns"}>
          <button className=" block mx-auto mt-2 w-fit bg-mainBg  border-white border-2 text-secondText p-3 rounded-full">
            mehr erfahren
          </button>
        </Link>
      </Section>

      {/* Aktuelle Meldungen: */}

      {data && currentData.length < 1 ? (
        <Section>
          <H2>Aktuelle Termine</H2>
          <p>Derzeit sind keine aktuellen Termine vorhanden.</p>
        </Section>
      ) : (
        <Section>
          <H2>Aktuelle Meldungen</H2>
          <Link to="/termine">
            <div className="grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-3">
              {data &&
                currentData.map((entry) => {
                  if (entry.system.type.toLowerCase() === "termin") {
                    return (
                      <div
                        key={entry.system.id}
                        className={`min-w-full min-h-[200px] flex justify-around rounded-md`}
                      >
                        <img
                          className="w-1/2 object-cover rounded-md"
                          src={entry.elements.vorschaubild__home_.value[0].url}
                          alt={entry.elements.was_.value}
                        />

                        <div className=" w-1/2 p-2">
                          <p>{entry.elements.wann_.value}</p>
                          <H5>{entry.elements.was_.value}</H5>
                        </div>
                      </div>
                    );
                  }
                })}
            </div>
          </Link>
        </Section>
      )}

      {/* Tierpfleger/in gesucht! */}
      <Section>
        <H2>Tierpfleger/in gesucht!</H2>
        <Link to={"/kontakt"} className="underline">
          Bewerbungen bitte an unser Tierheim.
        </Link>
      </Section>

      {/* Bayer.Tierschutzpreis */}
      <Section>
        <H2>Bayer.Tierschutzpreis 2018</H2>
        <p>
          Unser Tierheim hat am 21.06.2018 den Tierschutzpreis der Bayerischen
          Staatsregierung erhalten!&nbsp;
          <a
            href="https://www.stmuv.bayern.de/themen/tiergesundheit_tierschutz/tierschutz/tierschutzpreis/2018.htm"
            target="_blank"
            className=" underline"
            rel="noreferrer"
          >
            mehr...
          </a>
        </p>
        <a
          href="https://www.stmuv.bayern.de/themen/tiergesundheit_tierschutz/tierschutz/tierschutzpreis/2018.htm"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={tierschutzpreis}
            alt="Tierschutzpreis 2018"
            className=" mt-2"
          />
        </a>
      </Section>

      <Section>
        <H2>Wieder störungsfrei online!</H2>
        <p className="mb-2">
          {" "}
          Die Datenschutzbestimmungen (DSGVO) und die weltweiten Bestrebungen
          das Internet sicherer zu machen hatten dazu geführt, dass die
          Internet-Browser unsere Seite in den letzten Wochen nur noch
          widerwillig öffnen wollten.
        </p>
        <p className="mb-2">
          Dank des Einsatzes des{" "}
          <a
            href="https://www.dachau.net/website/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Bürgernetzes Dachau
          </a>
          , das die Seiten dankenswerterweise hostet, konnten jetzt die
          erforderlichen Zertifikate bereitgestellt werden. Herzlichen Dank an
          Thomas Wagner!
        </p>
        <p>Wir bitten die Unannehmlichkeiten zu entschuldigen.</p>
      </Section>

      {/* Presse: */}
      <Section>
        <H2>Presse</H2>
        <div className=" grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-3">
          {presse.map(({ id, img, title, to }) => (
            <Link to={to} key={id}>
              <div
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

      {/* Link zu HP Monika Weigler */}
      <Section>
        <p>
          Besuchen Sie unbedingt auch einmal die Seite der Autorin und
          Tierfotografin Monika Weigler!
        </p>
        <a href="https://www.wegler.de/" target="_blank" rel="noreferrer">
          <img
            src={bannerMonikaWeigler}
            alt="Banner Monika Wegler, Fotografin und Autorin"
          />
        </a>
      </Section>
      {data && <NextBtn />}
    </div>
  );
};

export default Home;
