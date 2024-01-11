import { useEffect, useContext, useState } from "react";
import Section from "../../layout/Section";
import H2 from "../../layout/H2";
import NextButton from "../../components/buttons/NextButton";
import DatzHead from "../../assets/ueber-uns/datz_head.jpg";
import BackButton from "../../components/buttons/BackButton";

import DataContext from "../../components/kontentAi/DataContext";
import { compareDates } from "../../components/compareDates";

// Function to compare dates for sorting
// const compareDates = (a, b) => {
//   const dateA = new Date(a.elements.datum.value);
//   const dateB = new Date(b.elements.datum.value);

//   return dateA - dateB;
// };

// Function to sort press articles by date
const sortPressestimmenByDate = (data) => {
  if (!data) return [];
  return data
    .filter((element) => element.system.type.toLowerCase() === "pressestimme")
    .sort(compareDates)
    .reverse();
};

// Function to sort other media reports by date
const sortSonstigeMedienberichteByDate = (data) => {
  if (!data) return [];
  return data
    .filter(
      (element) =>
        element.system.type.toLowerCase() === "sonstiger_medienbericht",
    )
    .sort(compareDates)
    .reverse();
};

const Presse = () => {
  const { data } = useContext(DataContext);
  const [datzData, setDatzData] = useState([]);

  const pressestimmenDataSorted = sortPressestimmenByDate(data);
  const sonstigeMedienberichteDataSorted =
    sortSonstigeMedienberichteByDate(data);

  // let pressestimmenData, sonstigeMedienberichteData;
  // datzData = [];

  // if (data) {
  //   pressestimmenData = data.filter(
  //     (element) => element.system.type.toLowerCase() === "pressestimme"
  //   );

  //   sonstigeMedienberichteData = data.filter(
  //     (element) =>
  //       element.system.type.toLowerCase() === "sonstiger_medienbericht"
  //   );

  //   datzData = data
  //     .filter((element) => element.system.type.toLowerCase() === "datz_ausgabe")
  //     .reverse();
  // }

  useEffect(() => {
    const url = window.location.href;
    const hash = url.substring(url.indexOf("#") + 1);
    const element = document.getElementById(hash);

    if (element) {
      const yPos = element.getBoundingClientRect().top + window.scrollY - 90;
      window.scroll({
        top: yPos,
        behavior: "smooth",
      });
    }
  }, []);

  useEffect(() => {
    if (data) {
      const datzDataFromContext = data
        .filter(
          (element) => element.system.type.toLowerCase() === "datz_ausgabe",
        )
        .reverse();
      setDatzData(datzDataFromContext);
    }
  }, [data]);

  return (
    <div>
      <Section>
        {/* Pressestimmen */}
        <p id="Pressestimmen" />
        <H2>Pressestimmen</H2>
        <p>
          Diese Beiträge entstammen den Tageszeitungen, die inhaltlich weder mit
          dem Tierschutzverein abgestimmt sind noch unbedingt dessen Meinung
          repräsentieren. Die Auswahl erhebt keinen Anspruch auf Vollständigkeit
          aller Publikationen und stellt keine Präferenz des Tierschutzvereins
          dar.
        </p>
        <div className="break-words bg-white ">
          <div className="grid grid-cols-3 pt-4 ">
            <div className="border bg-mainBg p-3 text-white">
              <p className="text-lg font-semibold">Datum</p>
            </div>
            <div className="border bg-mainBg p-3 text-white">
              <p className="text-lg font-semibold">Medium</p>
            </div>
            <div className="border bg-mainBg p-3 text-white">
              <p className="text-lg font-semibold">Thema</p>
            </div>
          </div>
        </div>
        {pressestimmenDataSorted.map((stimmen) => (
          <div key={stimmen.system.id} className="col-span-3 grid grid-cols-3">
            <div className="col-span-1 border p-3 ">
              <p>
                {stimmen.elements.datum.value
                  .slice(0, 10)
                  .split("-")
                  .reverse()
                  .join(".")}
              </p>
            </div>
            <div className="border p-3">
              <p>{stimmen.elements.medium.value}</p>
            </div>
            <div className="border p-3">
              <p>{stimmen.elements.thema.value}</p>
            </div>
          </div>
        ))}
      </Section>

      {/* Sonstige-Medienberichte */}
      <Section>
        <p id="Sonstige-Medien" />
        <H2>Sonstige Medienberichte</H2>
        <p>
          Die verlinkten Beiträge werden zumeist nur zeitlich befristet
          vorgehalten - es kann daher sein dass unten aufgeführte Beiträge
          bereits wieder aus dem Angebot der jeweiligen Mediathek genommen
          wurden.
        </p>
        <div className="my-2 break-words bg-white">
          <div className="grid grid-cols-2  pt-4 ">
            <div className="border bg-mainBg p-3 text-white">
              <p className="text-lg font-semibold">Datum</p>
            </div>
            <div className="border bg-mainBg p-3 text-white">
              <p className="text-lg font-semibold">Thema</p>
            </div>
            {sonstigeMedienberichteDataSorted.map((sonstige) => (
              <div
                key={sonstige.system.id}
                className="col-span-2 grid  grid-cols-2 "
              >
                <div className="border p-3">
                  <p>
                    {sonstige.elements.datum.value
                      .slice(0, 10)
                      .split("-")
                      .reverse()
                      .join(".")}
                  </p>
                </div>
                <div className="border p-3">
                  <p>{sonstige.elements.thema.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Mitgliederzeitschrift DATZ */}
      <Section>
        <p id="DATZ" />
        <H2>Mitgliederzeitschrift DATZ</H2>
        <img src={DatzHead} alt="Datz-head" />
        <p className="mb-2 mt-4">
          Die Dachauer Aktuelle Tierschutz Zeitschrift, kurz DATZ, erscheint
          möglichst halbjährlich, nicht immer regelmäßig, und wird herausgegeben
          vom Tierschutzverein Dachau e.V. Sie wird allen Mitglieder zugestellt,
          sofern diese nicht auf die Zustellung verzichten, um uns Portokosten
          zu sparen.
        </p>
        <p className="mb-2">
          Die DATZ liegt an öffentlichen Stellen (u.a. an unseren{" "}
          <a
            href="/spenden#Futterspenden"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-800 underline hover:cursor-pointer"
          >
            Futterspendenboxen
          </a>
          , den Rathäusern, den Sparkassen und Volksbanken im Landkreis) aus.
        </p>
        <p className="mb-2">
          Die Herstellungskosten werden vollständig durch Werbung abgedeckt, der
          Vertrieb erfolgt weitestgehend in Eigenregie. Zuverlässige Zusteller
          werden noch gesucht für Altomünster, Dachau, Karlsfeld, Vierkirchen
          und Weichs. Bei Interesse bitte im Tierheim melden.
        </p>
        <p className="mb-2">
          Zum Lesen der DATZ benötigen Sie den (kostenlosen) Adobe Acrobat
          Reader, erhältlich{" "}
          <a
            href="https://get.adobe.com/de/reader/otherversions/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-800 underline hover:cursor-pointer"
          >
            hier
          </a>{" "}
        </p>
        <p className="mb-2">
          Viel Spaß beim Lesen, was die Tierschutzarbeit so alles mit sich
          bringt...
        </p>
        <div className="grid grid-cols-1">
          <div className="text-center">
            <div className="border bg-mainBg p-3 text-white">
              <p className="text-lg font-semibold">DATZ</p>
            </div>
           <Section>
           {datzData.map((ausgabe) => (
              <div className="border p-3" key={ausgabe.system.id}>
                <a
                  href={ausgabe.elements.pdf_datei.value[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  {ausgabe.elements.name_der_ausgabe.value}
                </a>
              </div>
            ))}
           </Section>
          </div>
        </div>
      </Section>
      <BackButton />
      {data && <NextButton />}
    </div>
  );
};

export default Presse;
