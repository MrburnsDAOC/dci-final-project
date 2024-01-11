import TierKarte from "../TierKarte";
import Section from "../../../layout/Section";
import H2 from "../../../layout/H2";

import { useContext } from "react";
import DataContext from "../../../components/kontentAi/DataContext";
import NextButton from "../../../components/buttons/NextButton";
import BackButton from "../../../components/buttons/BackButton";

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
          "nein",
    );
  }

  return (
    <>
      <Section>
        <H2>Wellensittiche </H2>
      </Section>
      <div className="xl:mx-36 xl:grid xl:grid-cols-3">
        {data && budgies.length < 1 ? (
          <div className="mt-2 break-words bg-secondBg  px-8 py-3 xl:col-span-3 ">
            <p>Momentan keine Tiere da.</p>
          </div>
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
      </div>
      <BackButton />
      {data && <NextButton />}
    </>
  );
};

export default Wellensittiche;
