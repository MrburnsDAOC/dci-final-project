import TierKarte from "../TierKarte";
import Section from "../../../layout/Section";
import H2 from "../../../layout/H2";

import { useContext } from "react";
import DataContext from "../../../components/kontentAi/DataContext";
import NextButton from "../../../components/buttons/NextButton";
import BackButton from "../../../components/buttons/BackButton";

const Hunde = () => {
  const { data } = useContext(DataContext);

  let dogs = [];
  if (data) {
    dogs = data.filter(
      (element) =>
        element.system.type.toLowerCase() === "tier" &&
        // ? => if value undefined --> toLowerCase not working
        element.elements.tierart.value[0].name?.toLowerCase() === "hund" &&
        element.elements.vermittelt.value[0].name?.toLowerCase() === "nein" &&
        element.elements.notfallvermittlung.value[0].name?.toLowerCase() ===
          "nein",
    );
  }

  return (
    <>
      <Section>
        <H2>Hundevermittlung</H2>
        <p>
          Folgende Hunde warten im Tierheim auf ein neues Zuhause. Falls Sie
          Interesse haben, kontaktieren Sie uns über Email oder per Telefon.
        </p>
      </Section>

      <div className="md:grid md:grid-cols-2 xl:mx-36 xl:grid-cols-3">
        {data && dogs.length < 1 ? (
          <div className="mt-2 break-words bg-secondBg px-8 py-3 md:col-span-2 xl:col-span-3 ">
            <p>Momentan keine Tiere da.</p>
          </div>
        ) : (
          dogs.map((entry) => {
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

      {data && <NextButton />}
      <BackButton />
    </>
  );
};

export default Hunde;
