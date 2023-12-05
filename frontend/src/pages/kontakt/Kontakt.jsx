import GoogleMapLocation from "../../layout/GoogleMapLocation";
import H2 from "../../layout/H2";
import KontaktData from "../../layout/KontaktData";
import Section from "../../layout/Section";

const Kontakt = () => {
  return (
    <>
      <Section>
        <H2>Kontakt</H2>
        <div
          id="coronaHinweis"
          className="text-red-600  font-semibold my-3 leading-5"
        >
          <p>
            Aufgrund der anhaltenden Corona-Situation sehen wir uns leider
            gezwungen das Tierheim Dachau bis auf weiteres für Besucher
            geschlossen zu halten.
          </p>
          <p className="mt-3">
            Tiervermittlungen finden jedoch statt allerdings nur mit
            terminlicher Absprache.
          </p>
        </div>
        <KontaktData />
        <GoogleMapLocation />
      </Section>
    </>
  );
};

export default Kontakt;
