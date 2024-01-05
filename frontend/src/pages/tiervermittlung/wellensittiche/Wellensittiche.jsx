import BackButton from "../../../layout/BackButton";
import TierKarte from "../TierKarte";
import NextButton from "../../../layout/NextButton";
import Section from "../../../layout/Section";
import H2 from "../../../layout/H2";

import { useContext } from "react";
import DataContext from "../../../components/kontentAi/DataContext";

const Wellensittiche = () => {
  const { data } = useContext(DataContext);

  let budgies = [];
  if (data) {
    budgies = data.filter(
      (element) =>
        element.system.type.toLowerCase() === "tier" &&
        element.elements.tierart.value[0].name?.toLowerCase() === "vogel" &&
        element.elements.vermittelt.value[0].name?.toLowerCase() === "nein" &&
        element.elements.notfallvermittlung.value[0].name?.toLowerCase() ===
          "nein"
    );
  }

  return (
    <>
      <Section>
        <H2>Wellensittiche </H2>
      </Section>
      <NextButton />

      {data && budgies.length < 1 ? (
        <Section>
          <p>Momentan keine Tiere da.</p>
        </Section>
      ) : (
        budgies.map((entry) => {
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
    </>
  );
};

export default Wellensittiche;
