import { useContext } from "react";
import DataContext from "../../components/kontentAi/DataContext";

import H2 from "../../layout/H2";
import Section from "../../layout/Section";

const Termine = () => {
  const { data } = useContext(DataContext);

  return (
    <>
      <Section>
        <H2>Aktuelle Termine</H2>
        <div className="grid grid-cols-3">
          <div className="bg-mainBg text-white border p-3">
            <p className="text-lg font-semibold">Wann?</p>
          </div>
          <div className="bg-mainBg text-white border p-3">
            <p className="text-lg font-semibold">Was?</p>
          </div>
          <div className="bg-mainBg text-white border p-3">
            <p className="text-lg font-semibold">Wo?</p>
          </div>
          {data &&
            data.map((entry) => {
              if (entry.system.type.toLowerCase() === "termin") {
                return (
                  <div
                    key={entry.system.id}
                    className="grid grid-cols-3  col-span-3 "
                  >
                    <div className="border p-3 col-span-1 ">
                      <p>{entry.elements.wann_.value}</p>
                    </div>
                    <div className="border p-3">
                      <p className="text-sm">{entry.elements.was_.value}</p>
                    </div>
                    <div className="border p-3">
                      <p className="text-sm">{entry.elements.wo_.value}</p>
                    </div>
                  </div>
                );
              }
            })}
        </div>
      </Section>

      <Section>
        <H2>Archiv</H2>
        <div className="grid grid-cols-2">
          <div className="bg-mainBg text-white border p-3">
            <p className="text-lg font-semibold">Wann?</p>
          </div>
          <div className="bg-mainBg text-white border p-3">
            <p className="text-lg font-semibold">Was?</p>
          </div>
          {data &&
            data.map((entry) => {
              if (
                entry.system.type.toLowerCase() === "termin" &&
                entry.elements.archiv.value[0].name?.toLowerCase() === "archiv"
              ) {
                return (
                  <div
                    key={entry.system.id}
                    className="grid grid-cols-2  col-span-2 "
                  >
                    <div className="border p-3">
                      <p>{entry.elements.wann_.value}</p>
                    </div>
                    <div className="border p-3">
                      <p className="text-sm">{entry.elements.was_.value}</p>
                    </div>
                  </div>
                );
              }
            })}
        </div>
      </Section>
    </>
  );
};

export default Termine;
