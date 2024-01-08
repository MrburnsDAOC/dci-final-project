import TierKarte from "../TierKarte";
import Section from "../../../layout/Section";
import H2 from "../../../layout/H2";

import { useContext } from "react";
import DataContext from "../../../components/kontentAi/DataContext";
import BackButton from "../../../components/buttons/BackButton";
import NextButton from "../../../components/buttons/NextButton";

const Nagetiere = () => {
  const { data } = useContext(DataContext);

  return (
    <>
      <Section>
        <H2>Nagetiere</H2>
        <p>
          Bitte beachten Sie, dass wir im Herbst und Winter keine Kleintiere zur
          Haltung im Freien bzw. in Außenstallungen vermitteln. Die Tiere werden
          im Tierheim nicht in Außenanlagen gehalten und haben deswegen kein
          entsprechendes Winterfell ausgebildet. Damit sind sie nicht für eine
          Außenhaltung gerüstet.
        </p>
      </Section>
      {data &&
        data.map((entry) => {
          if (
            entry.system.type.toLowerCase() === "tier" &&
            // ? => if value undefined --> toLowerCase not working
            entry.elements.tierart.value[0].name?.toLowerCase() ===
              "nagetier" &&
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

export default Nagetiere;
