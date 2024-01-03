import BackButton from "../../../layout/BackButton";
import TierKarte from "../TierKarte";
import NextButton from "../../../layout/NextButton";
import Section from "../../../layout/Section";
import H2 from "../../../layout/H2";

import { useContext } from "react";
import DataContext from "../../../components/kontentAi/DataContext";

const Wellensittiche = () => {
  const { data } = useContext(DataContext);

  return (
    <>
      <Section>
        <H2>Wellensittiche </H2>
      </Section>
      <NextButton />
      {data &&
        data.map((entry) => {
          if (
            entry.system.type.toLowerCase() === "tier" &&
            // ? => if value undefined --> toLowerCase not working
            entry.elements.tierart.value[0].name?.toLowerCase() === "vogel" &&
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
    </>
  );
};

export default Wellensittiche;
