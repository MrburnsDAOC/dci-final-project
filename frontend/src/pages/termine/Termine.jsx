import H2 from "../../layout/H2"
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
const Termine = () => {
  return (
    <div className="bg-mainBg">
      <div className="bg-white md:w-375 md:h-812 md:m-auto break-words p-4">
        <H2 className="text-center text-xl font-bold mb-4">Aktuelle Termine</H2>
        <div className="grid grid-cols-3 gap-4 border p-4">
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
            <>
              <div className="border p-3" key={event.id}>
                <p>{event.wann}</p>
              </div>
              <div className="border p-3" key={event.id}>
                <p className="text-sm">{event.was}</p>
              </div>
              <div className="border p-3" key={event.id}>
                <p className="text-sm">{event.wo}</p>
              </div>
            </>
          ))}
        </div>
      </div>

      <div>
        <div className="bg-white my-2 md:w-375 md:h-812 md:m-auto break-words p-4">
          <H2 className="text-center text-xl font-bold mb-4">Archiv</H2>
          <div className="grid grid-cols-2 gap-4 border p-4">
            <div className="text-white border p-3">
              <p className="text-lg font-semibold"></p>
            </div>
            <div className="text-white border p-3">
              <p className="text-lg font-semibold"></p>
            </div>

            {events.map((event) => (
              <>
                <div className="border p-3" key={event.id}>
                  <p></p>
                </div>
                <div className="border p-3" key={event.id}>
                  <p className="text-sm"></p>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Termine;
