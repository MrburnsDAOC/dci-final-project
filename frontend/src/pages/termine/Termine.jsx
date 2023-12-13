import H2 from "../../layout/H2";
import Section from "../../layout/Section";

const events = [
  {
    id: 1,
    wann: "Sa, 09.12.2023 14:00 Uhr",
    was: "Jahreshauptversammlung nach mehreren Verschiebungen neuer Termin!",
    wo: "Vereinsheim der Hundefreunde Dachau, Roßwachtstr. 35, 85221 Dachau",
  },
  {
    id: 2,
    wann: "Sa. 25. und So. 26.11.2023 10:00-16:00 Uhr",
    was: "Weihnachtsbasar Marmeladen, Weihnachtsartikel, Basteleien, Kaffee und Kuchen",
    wo: "Vereinsheim der Hundefreunde Dachau, Roßwachtstr. 35, 85221 Dachau",
  },
];

const archivEvents = [
  {
    id: 1,
    wann: "Sa, 09.12.2023 14:00 Uhr",
    was: "Jahreshauptversammlung nach mehreren Verschiebungen neuer Termin!",
    wo: "Vereinsheim der Hundefreunde Dachau, Roßwachtstr. 35, 85221 Dachau",
  },
  {
    id: 2,
    wann: "Sa. 25. und So. 26.11.2023 10:00-16:00 Uhr",
    was: "Weihnachtsbasar Marmeladen, Weihnachtsartikel, Basteleien, Kaffee und Kuchen",
    wo: "Vereinsheim der Hundefreunde Dachau, Roßwachtstr. 35, 85221 Dachau",
  },
];

const Termine = () => {
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

          {events.map((event) => (
            <div key={event.id} className="grid grid-cols-3  col-span-3 ">
              <div className="border p-3 col-span-1 ">
                <p>{event.wann}</p>
              </div>
              <div className="border p-3">
                <p className="text-sm">{event.was}</p>
              </div>
              <div className="border p-3">
                <p className="text-sm">{event.wo}</p>
              </div>
            </div>
          ))}
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

          {archivEvents.map((archivEvent) => (
            <div key={archivEvent.id} className="grid grid-cols-2  col-span-2 ">
              <div className="border p-3">
                <p>{archivEvent.wann}</p>
              </div>
              <div className="border p-3">
                <p className="text-sm">{archivEvent.was}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default Termine;
