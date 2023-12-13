import React, { useEffect } from "react";
import Section from "../../layout/Section";
import H2 from "../../layout/H2";
import NextButton from "../../layout/NextButton";
import DatzHead from "../../assets/ueber-uns/datz_head.jpg";
import BackButton from "../../layout/BackButton";
import datz2023 from "../../assets/ueber-uns/DATZ_2023_Nov.pdf";
import datz2022 from "../../assets/ueber-uns/DATZ-2022_Nov.pdf";
import datz2021 from "../../assets/ueber-uns/DATZ-2021_Nov.pdf";
import datz2020 from "../../assets/ueber-uns/DATZ-2020_Nov.pdf";
import datz2019 from "../../assets/ueber-uns/DATZ-2019_Nov.pdf";

function Presse() {
  const pressestimmen = [
    {
      id: 1,
      datum: "24.09.2018",
      medium: "Kurier Dachau",
      thema:
        "	Interview mit Silvia Gruber zum 25-jährigen Jubiläum als 1. Vereinsvorsitzende",
    },
    {
      id: 2,
      datum: "22.06.2018",
      medium: "Kurier Dachau",
      thema: "Ausgezeichnet mit dem Bayerischen Tierschutzpreis 2018",
    },
    {
      id: 3,
      datum: "05.09.2017",
      medium: "Süddeutsche Zeitung, Dachau",
      thema: "Kater unter der (Motor-)Haube die etwas andere Ausreise",
    },
    {
      id: 4,
      datum: "24.08.2017",
      medium: "Süddeutsche Zeitung, Dachau",
      thema: "Flauschige Wegwerfartikel von Christiane Bracht",
    },
    {
      id: 5,
      datum: "21.08.2017",
      medium: "Süddeutsche Zeitung, Dachau",
      thema:
        "Hundewettbewerb, eine ganz große Versuchung, Mixshow & Gaudiwettkampf 2017",
    },
  ];

  const sonstige = [
    {
      id: 1,
      datum: "30.05.2016",
      thema: "Dachau TV Magazin mit einem Beitrag über das Tierheim",
    },
    {
      id: 2,
      datum: "30.08.2016",
      thema: "Dachau TV Magazin mit knuddeligen Tierbildern (Einzelbeiträge)",
    },
    {
      id: 3,
      datum: "20.09.2018",
      thema: "BR Kurzbericht zur Demo vor der Staatskanzlei in München",
    },
    {
      id: 4,
      datum: "28.05.2019",
      thema: "Dachau TV Magazin mit großem Interview mit Silvia Gruber",
    },
  ];

  useEffect(() => {
    const url = window.location.href;
    const hash = url.substring(url.indexOf("#") + 1);
    const element = document.getElementById(hash);
    if (element) {
      if (element) {
        const yPos = element.getBoundingClientRect().top + window.scrollY - 90; // Vendosni vlerën që dëshironi për të kontrolluar shkallëzimin më tej poshtë
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
        <p id="Pressestimmen"></p>
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

        {pressestimmen.map((stimmen) => (
          <div key={stimmen.id} className="grid grid-cols-3 col-span-3">
            <div className="border p-3 col-span-1 ">
              <p>{stimmen.datum}</p>
            </div>
            <div className="border p-3">
              <p className="text-sm">{stimmen.medium}</p>
            </div>
            <div className="border p-3">
              <p className="text-sm">{stimmen.thema}</p>
            </div>
          </div>
        ))}
      </Section>

      {/* Sontige-Medienberichte */}
      <Section>
        <p id="Sonstige-Medien"></p>

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

            {sonstige.map((sonstige) => (
              <div key={sonstige.id} className="grid grid-cols-2  col-span-2 ">
                <div className="border p-3">
                  <p>{sonstige.datum}</p>
                </div>
                <div className="border p-3">
                  <p className="text-sm">{sonstige.thema}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/*Mitgliederzeitschrift DATZ */}
      <Section>
        <p id="DATZ"></p>

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
            <div className="border p-3">
              <a
                href={datz2023}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                DATZ-2023
              </a>
            </div>
            <div className="border p-3">
              <a
                href={datz2022}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                DATZ-2022
              </a>
            </div>
            <div className="border p-3">
              <a
                href={datz2021}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                DATZ-2021-1
              </a>
            </div>
            <div className="border p-3">
              <a
                href={datz2020}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                DATZ-2020-1
              </a>
            </div>
            <div className="border p-3">
              <a
                href={datz2019}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                DATZ-2019-2
              </a>
            </div>
          </div>
        </div>
      </Section>
      <BackButton />
    </div>
  );
}

export default Presse;
