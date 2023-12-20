import { createDeliveryClient } from "@kontent-ai/delivery-sdk";
import { useEffect, useState } from "react";

import BackButton from "../../../layout/BackButton";
import TierKarte from "../TierKarte";
import NextButton from "../../../layout/NextButton";
import Section from "../../../layout/Section";
import H2 from "../../../layout/H2";

const NotfallVermittlung = () => {
  // Kontent.ai data:
  useEffect(() => {
    const fetchData = async () => {
      const deliveryClient = createDeliveryClient({
        environmentId: "7c1dd9e3-d78e-000f-3f44-b8e746e6fd0f",
      });

      const response = await deliveryClient.items().type("tier").toPromise();
      console.log(response.data.items);
      setAnimals(response.data.items);
    };
    fetchData();
  }, []);

  const [animals, setAnimals] = useState();

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
      <NextButton />
      {animals &&
        animals.map((animal) => (
          <TierKarte
            key={animal.system.id}
            id={animal.system.id}
            bilder={animal.elements.bilder.value}
            name={animal.elements.name.value}
            rasse={animal.elements.rasse.value}
            geboren={animal.elements.geboren.value}
            geschlecht={animal.elements.geschlecht.value[0].name}
            kastration={animal.elements.kastration.value[0].name}
            informationen={animal.elements.informationen.value}
          />
        ))}
      <BackButton />
    </>
  );
};

export default NotfallVermittlung;
