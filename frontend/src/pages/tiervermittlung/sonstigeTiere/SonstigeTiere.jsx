import BackButton from "../../../layout/BackButton";
import TierKarte from "../TierKarte";
import Section from "../../../layout/Section";
import H2 from "../../../layout/H2";

import { useContext } from "react";
import DataContext from "../../../components/kontentAi/DataContext";
import NextButton from "../../../layout/NextButton";

const SonstigeTiere = () => {
  const { data } = useContext(DataContext);

  let otherAnimalsArr = [];
  if (data) {
    otherAnimalsArr = data.filter(
      (element) =>
        element.system.type.toLowerCase() === "tier" &&
        element.elements.tierart.value[0].name?.toLowerCase() === "anders" &&
        element.elements.vermittelt.value[0].name?.toLowerCase() === "nein" &&
        element.elements.notfallvermittlung.value[0].name?.toLowerCase() ===
          "nein"
    );
  }

  return (
    <>
      <Section>
        <H2>Sonstige Tiere</H2>
        <p>
          Bitte beachten Sie, dass wir im Herbst und Winter keine Kleintiere zur
          Haltung im Freien bzw. in Außenstallungen vermitteln. Die Tiere werden
          im Tierheim nicht in Außenanlagen gehalten und haben deswegen kein
          entsprechendes Winterfell ausgebildet. Damit sind sie nicht für eine
          Außenhaltung gerüstet.
        </p>
      </Section>

      {data && otherAnimalsArr.length < 1 ? (
        <Section>
          <p>Momentan keine Tiere da.</p>
        </Section>
      ) : (
        otherAnimalsArr.map((entry) => {
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
        })
      )}
      <BackButton />
      {data && <NextButton />}
    </>
  );
};

export default SonstigeTiere;
