import TierKarte from "../TierKarte";
import Section from "../../../layout/Section";
import H2 from "../../../layout/H2";

import { useContext } from "react";
import DataContext from "../../../components/kontentAi/DataContext";
import NextButton from "../../../components/buttons/NextButton";
import BackButton from "../../../components/buttons/BackButton";

const NotfallVermittlung = () => {
  const { data } = useContext(DataContext);

  return (
    <>
      <Section>
        <H2>Notfall-Vermittlung</H2>
        <p>
          Auf dieser Seite versuchen wir Tiere unserer Mitglieder, die auf Grund
          eines Notfalls abgegeben werden müssen, möglichst schnell wieder in
          gute Hände zu vermitteln. Der Kontakt mit dem Tierbesitzer kann immer
          auch über das Tierheim hergestellt werden.
        </p>
      </Section>

      <div className="md:grid md:grid-cols-2 xl:mx-36 xl:grid-cols-3">
        {data &&
          data.map((entry) => {
            if (
              entry.system.type.toLowerCase() === "tier" &&
              // ? => if value undefined --> toLowerCase not working
              entry.elements.notfallvermittlung.value[0].name?.toLowerCase() ===
                "ja"
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
      </div>
      <BackButton />
      {data && <NextButton />}
    </>
  );
};

export default NotfallVermittlung;
