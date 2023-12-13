import GoogleMapLocation from "../../components/GoogleMapLocation";
import H2 from "../../layout/H2";
import H3 from "../../layout/H3";
import KontaktData from "../../components/KontaktData";
import Section from "../../layout/Section";
import NextBtn from "../../layout/NextButton";

const Kontakt = () => {
  return (
    <>
      <NextBtn />
      <div className=" bg-secondBg break-words xl:flex">
        <section>
          <Section>
            <H2>Kontakt</H2>
            <div id="coronaHinweis" className="text-alertText my-3">
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
        </section>

        <aside className=" px-10 xl:bg-thirdBg  xl:sticky xl:top-0 xl:w-1/5">
          {/* Container content to stick text: */}
          <div className="xl:sticky xl:top-1/4">
            <section>
              {/* className="xl:sticky xl:top-24" */}
              <H3>Notfälle und Fundtierannahme</H3>
              <p>Ganzjährig, rund um die Uhr, auch an Sonn- und Feiertagen.</p>
              <p className=" text-alertText my-3">
                Bitte rufen Sie <span className="font-semibold">außerhalb</span>{" "}
                der Öffnungszeiten immer zuerst unsere{" "}
                <span className="font-semibold">Notfallnummer</span> an. Es ist
                nicht sichergestellt, dass das Telefon im Tierheim außerhalb der
                Öffnungszeiten besetzt ist.
              </p>
            </section>

            <section>
              <H3>Gassigehen</H3>
              <p className=" pb-3">
                Wenn Sie mit einem unserer Hunde Gassi gehen wollen, wenden Sie
                sich bitte vorher telefonisch an unser Büro. Dort erfahren Sie
                die notwendigen Einzelheiten.
              </p>
            </section>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Kontakt;
