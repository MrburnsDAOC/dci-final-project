import BackButton from "../../../layout/BackButton";
import TierKarte from "../TierKarte";
import Section from "../../../layout/Section";
import H2 from "../../../layout/H2";

import { useContext } from "react";
import DataContext from "../../../components/kontentAi/DataContext";
import NextButton from "../../../layout/NextButton";

const Katzen = () => {
  const { data } = useContext(DataContext);

  return (
    <>
      <Section>
        <H2>Katzenvermittlung</H2>
        <p>
          Diese Katzen suchen ein neues Zuhause: Menschenfreundlich oder eher
          schüchtern, Einzelgänger oder Teamplayer, Katze oder Kater: Katzen aus
          dem Tierheim habe ihre eigene, oft traurige Geschichte. Wohnungskatzen
          geben wir i. d. R. nur paarweise oder als Zweitkatze an neue Besitzer.
        </p>
        <p>
          Ganz wichtig ist, dass Sie sich schon im Vorfeld überlegen, welcher
          Typ charakterlich und umfeldbezogen am besten zu Ihnen passen würde.
          Sprechen Sie mit unseren Tierpflegern, sie kennen die Eigenschaften
          jedes einzelnen Tieres – und stellen Ihnen gern die möglichen
          Kandidaten vor.
        </p>
        <p>
          Außerdem werden Sie Ihnen alle Fragen beantworten, die Sie über Ihren
          neuen Mitbewohner stellen werden:
        </p>
        <p>Denn eine Katze ...</p>
        <ul>
          <li>
            ... braucht erst einmal Ruhe: Die Umzugssituation ist für sie reiner
            Stress. Falls sie sich versteckt, bedrängen sie sie nicht. Sprechen
            Sie ruhig mit Ihr, vermeiden Sie hektische Bewegungen und legen Sie
            eventuell ein paar Leckerlis als Lockmittel in ihrer Nähe auf den
            Boden
          </li>
          <li>
            ... ist ein„Gewohnheitstier“: Essenszeiten, Lieblingsfutter, -streu
            und -spielzeug, Höhle oder Kissen – fragen sie die Tierpfleger, wie
            sie Ihrer Katze die Eingewöhnungsphase leichter machen können.
          </li>
          <li>
            ... will „bespaßt“ werden: Vor allem Wohnungskatzen langweiligen
            sich schnell – sie wollen genau wie die Freigänger jagen und fangen.
            Es muss nicht das teure Spielzeug sein, auch eine Schnur, eine
            eingerollte Socke oder eine Papierkugel werden gern angenommen.
          </li>
          <li>
            ... braucht eigenes Mobiliar: ein Katzenklo, das an einem ruhigen
            Platz postiert wird und immer sauber gehalten werden muss – und
            einen Kratzbaum oder -brett zum Krallen wetzen. Ihr Sofa wird es
            Ihnen danken!
          </li>
          <li>
            ... steckt ihre Nase überall rein: Gekippte Fenster, offene
            Klodeckel, Plastiktüten, Waschmaschine und –trockner können zur
            tödlichen Falle werden. … knabbert gern an Pflanzen: Aber viele sind
            für sie giftig (Infos im Internet).
          </li>
          <li>
            ... schnuppert gern frische Luft: Fragen Sie Ihren Vermieter, ob Sie
            Fenster oder Balkon mit einem Katzennetz sichern dürfen
            (Voraussetzung bei Wohnunskatzen) – ansonsten besteht bei jedem
            vorbei fliegendem Vogel oder Schmetterling Absturzgefahr.
          </li>
        </ul>
        <p>
          Bei Freigängern entscheidet die Verkehrslage der Wohnung über eine
          mögliche Vermittlung, Bitte haben Sie Verständnis dass wir im Sinne
          unserer Tiere auf größtmöglich Sicherheit achten.
        </p>
        <p>
          EKH = Europäisch Kurz-Haar, EHK = Europäische Hauskatze, BKH =
          Britisch Kurzhaar
        </p>
      </Section>
      {data &&
        data.map((entry) => {
          if (
            entry.system.type.toLowerCase() === "tier" &&
            // ? => if value undefined --> toLowerCase not working
            entry.elements.tierart.value[0].name?.toLowerCase() === "katze" &&
            entry.elements.vermittelt.value[0].name?.toLowerCase() === "nein" &&
            entry.elements.notfallvermittlung.value[0].name?.toLowerCase() ===
              "nein"
          ) {
            return (
              <TierKarte
                key={entry.system.id}
                id={entry.system.id}
                bilder={entry.elements.bilder.value}
                name={entry.elements.name.value}
                rasse={entry.elements.rasse.value}
                geboren={entry.elements.geboren.value}
                geschlecht={entry.elements.geschlecht.value[0].name}
                kastration={entry.elements.kastration.value[0].name}
                informationen={entry.elements.informationen.value}
              />
            );
          }
        })}
      <BackButton />
      {data && <NextButton />}
    </>
  );
};

export default Katzen;
