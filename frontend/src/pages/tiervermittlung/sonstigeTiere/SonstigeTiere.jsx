import TierKarte from "../TierKarte";
import Section from "../../../layout/Section";
import H2 from "../../../layout/H2";

import { useContext } from "react";
import DataContext from "../../../components/kontentAi/DataContext";
import BackButton from "../../../components/buttons/BackButton";
import NextButton from "../../../components/buttons/NextButton";

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
          "nein",
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
      <div className="xl:mx-36 xl:grid xl:grid-cols-3">
        {data && otherAnimalsArr.length < 1 ? (
          <div className="mt-2 break-words bg-secondBg  px-8 py-3 xl:col-span-3 ">
            <p>Momentan keine Tiere da.</p>
          </div>
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
      </div>
      <BackButton />
      {data && <NextButton />}
    </>
  );
};

export default SonstigeTiere;
