import BackButton from "../../../layout/BackButton";
import TierKarte from "../TierKarte";
import Section from "../../../layout/Section";
import H2 from "../../../layout/H2";

import { useContext } from "react";
import DataContext from "../../../components/kontentAi/DataContext";
import NextButton from "../../../layout/NextButton";

const VermittelteTiere = () => {
  const { data } = useContext(DataContext);

  return (
    <>
      <Section>
        <H2>Vermittelte Tiere</H2>
        <p>
          Rückmeldung einiger &ldquo;Ex-Insassen&ldquo; des Tierheims, die
          wirklich Glück hatten und in ein neues Heim vermittelt werden konnten.
          Wenn auch Sie ein Tier aus dem Tierheim erhalten haben - schicken Sie
          uns doch einfach ein paar Bilder...
        </p>
      </Section>
      {data &&
        data.map((entry) => {
          if (
            entry.system.type.toLowerCase() === "tier" &&
            // ? => if value undefined --> toLowerCase not working
            entry.elements.vermittelt.value[0].name?.toLowerCase() === "ja" &&
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

export default VermittelteTiere;
