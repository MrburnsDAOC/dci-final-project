import BackButton from "../../../layout/BackButton";
import TierKarte from "../TierKarte";
import NextButton from "../../../layout/NextButton";
import Section from "../../../layout/Section";
import H2 from "../../../layout/H2";

import { useContext } from "react";
import DataContext from "../../../components/kontentAi/DataContext";

const SonstigeTiere = () => {
  const { data } = useContext(DataContext);

  let otherAnimalsArr = [];
  if (data) {
    otherAnimalsArr = data.filter(
      (elment) =>
        elment.system.type.toLowerCase() === "tier" &&
        elment.elements.tierart.value[0].name?.toLowerCase() === "anders" &&
        elment.elements.vermittelt.value[0].name?.toLowerCase() === "nein" &&
        elment.elements.notfallvermittlung.value[0].name?.toLowerCase() ===
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
      <NextButton />
      {data && otherAnimalsArr.length < 1 ? (
        <Section>
          <p>Momentan keine Tiere da.</p>
        </Section>
      ) : (
        otherAnimalsArr.map((entry) => {
          // if (
          // entry.system.type.toLowerCase() === "tier" &&
          // ? => if value undefined --> toLowerCase not working
          // entry.elements.tierart.value[0].name?.toLowerCase() === "anders" &&
          // entry.elements.vermittelt.value[0].name?.toLowerCase() === "nein" &&
          // entry.elements.notfallvermittlung.value[0].name?.toLowerCase() ===
          //   "nein"
          // ) {
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
          // }
        })
      )}
      <BackButton />
    </>
  );
};

export default SonstigeTiere;
