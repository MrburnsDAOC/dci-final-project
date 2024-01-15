import { useContext } from "react";
import DataContext from "../../components/kontentAi/DataContext";

import H2 from "../../layout/H2";
import Section from "../../layout/Section";

const Termine = () => {
  const { data, getSortedData } = useContext(DataContext);
  const aktuelleMeldungenDataSorted = getSortedData(
    (element) =>
      element.system.type.toLowerCase() === "termin" &&
      element.elements.archiv.value[0].name?.toLowerCase() === "aktuell",
  );

  const archivierteMeldungenDataSorted = getSortedData(
    (element) =>
      element.system.type.toLowerCase() === "termin" &&
      element.elements.archiv.value[0].name?.toLowerCase() === "archiv",
  );

  return (
    <>
      {data && aktuelleMeldungenDataSorted.length < 1 ? (
        <Section>
          <H2>Aktuelle Termine</H2>
          <p>Derzeit sind keine aktuellen Termine vorhanden.</p>
        </Section>
      ) : (
        <Section>
          <H2>Aktuelle Termine</H2>
          <div className="grid grid-cols-3">
            <div className="border bg-mainBg p-3 text-white">
              <p className="text-lg font-semibold">Wann?</p>
            </div>
            <div className="border bg-mainBg p-3 text-white">
              <p className="text-lg font-semibold">Was?</p>
            </div>
            <div className="border bg-mainBg p-3 text-white">
              <p className="text-lg font-semibold">Wo?</p>
            </div>
            {data &&
              aktuelleMeldungenDataSorted.map((entry) => {
                if (entry.system.type.toLowerCase() === "termin") {
                  return (
                    <div
                      key={entry.system.id}
                      className="col-span-3 grid  grid-cols-3 "
                    >
                      <div className="col-span-1 border p-3 ">
                        <p>{entry.elements.wann_.value}</p>
                      </div>
                      <div className="border p-3">
                        <p>{entry.elements.was_.value}</p>
                      </div>
                      <div className="border p-3">
                        <p>{entry.elements.wo_.value}</p>
                      </div>
                    </div>
                  );
                }
              })}
          </div>
        </Section>
      )}
      {data && archivierteMeldungenDataSorted.length < 1 ? (
        <Section>
          <H2>Archiv</H2>
          <p>Derzeit sind keine archivierten Termine vorhanden.</p>
        </Section>
      ) : (
        <Section>
          <H2>Archiv</H2>
          <div className="grid grid-cols-2">
            <div className="border bg-mainBg p-3 text-white">
              <p className="text-lg font-semibold">Wann?</p>
            </div>
            <div className="border bg-mainBg p-3 text-white">
              <p className="text-lg font-semibold">Was?</p>
            </div>
            {data &&
              archivierteMeldungenDataSorted.map((entry) => {
                if (
                  entry.system.type.toLowerCase() === "termin" &&
                  entry.elements.archiv.value[0].name?.toLowerCase() ===
                    "archiv"
                ) {
                  return (
                    <div
                      key={entry.system.id}
                      className="col-span-2 grid  grid-cols-2 "
                    >
                      <div className="border p-3">
                        <p>{entry.elements.wann_.value}</p>
                      </div>
                      <div className="border p-3">
                        <p>{entry.elements.was_.value}</p>
                      </div>
                    </div>
                  );
                }
              })}
          </div>
        </Section>
      )}
    </>
  );
};

export default Termine;
