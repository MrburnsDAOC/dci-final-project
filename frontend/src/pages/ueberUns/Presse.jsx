import React, { useEffect, useContext } from "react";
import Section from "../../layout/Section";
import H2 from "../../layout/H2";
import NextButton from "../../layout/NextButton";
import DatzHead from "../../assets/ueber-uns/datz_head.jpg";
import BackButton from "../../layout/BackButton";

import DataContext from "../../components/kontentAi/DataContext";

function Presse() {
  const { data } = useContext(DataContext);
  let pressestimmenData,
    sonstigeMedienberichteData,
    datzData = [];

  if (data) {
    pressestimmenData = data.filter(
      (element) => element.system.type.toLowerCase() === "pressestimme"
    );

    sonstigeMedienberichteData = data.filter(
      (element) =>
        element.system.type.toLowerCase() === "sonstiger_medienbericht"
    );

    datzData = data
      .filter((element) => element.system.type.toLowerCase() === "datz_ausgabe")
      .reverse();
  }
  if (data) {
    console.log("DATZ:", datzData[0]);
  }
  useEffect(() => {
    const url = window.location.href;
    const hash = url.substring(url.indexOf("#") + 1);
    const element = document.getElementById(hash);
    if (element) {
      if (element) {
        const yPos = element.getBoundingClientRect().top + window.scrollY - 90;
        window.scroll({
          top: yPos,
          behavior: "smooth",
        });
      }
    }
  }, []);

  return (
    <div>
      <NextButton />
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

        <div className="bg-white break-words ">
          <div className="grid grid-cols-3 pt-4 ">
            <div className="bg-mainBg text-white border p-3">
              <p className="text-lg font-semibold">Datum</p>
            </div>
            <div className="bg-mainBg text-white border p-3">
              <p className="text-lg font-semibold">Medium</p>
            </div>
            <div className="bg-mainBg text-white border p-3">
              <p className="text-lg font-semibold">Thema</p>
            </div>
          </div>
        </div>

        {data &&
          pressestimmenData.map((stimmen) => (
            <div
              key={stimmen.system.id}
              className="grid grid-cols-3 col-span-3"
            >
              <div className="border p-3 col-span-1 ">
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

      {/* Sontige-Medienberichte */}
      <Section>
        <p id="Sonstige-Medien" />

        <H2>Sonstige Medienberichte</H2>
        <p>
          Die verlinkten Beiträge werden zumeist nur zeitlich befristet
          vorgehalten - es kann daher sein dass unten aufgeführte Beiträge
          bereits wieder aus dem Angebot der jeweiligen Mediathek genommen
          wurden.
        </p>

        <div className="bg-white my-2 break-words">
          <div className="grid grid-cols-2  pt-4 ">
            <div className="bg-mainBg text-white border p-3">
              <p className="text-lg font-semibold">Datum</p>
            </div>
            <div className="bg-mainBg text-white border p-3">
              <p className="text-lg font-semibold">Thema</p>
            </div>

            {data &&
              sonstigeMedienberichteData.map((sonstige) => (
                <div
                  key={sonstige.system.id}
                  className="grid grid-cols-2  col-span-2 "
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

      {/*Mitgliederzeitschrift DATZ */}
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
            <div className="bg-mainBg border text-white p-3">
              <p className="text-lg font-semibold">DATZ</p>
            </div>
            {data &&
              datzData.map((ausgabe) => (
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
          </div>
        </div>
      </Section>
      <BackButton />
    </div>
  );
}

export default Presse;
