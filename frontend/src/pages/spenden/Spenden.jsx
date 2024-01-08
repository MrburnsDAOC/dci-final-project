import Section from "../../layout/Section";
import H2 from "../../layout/H2";
import H3 from "../../layout/H3";
import NextButton from "../../components/buttons/NextButton";
import Btn from "../../assets/btn.png";
import Paypal from "../../assets/paypal.png";

const Spenden = () => {
  const openPaypalLink = () => {
    window.open("https://www.paypal.com/de/webapps/mpp/paypal-popup", "_blank");
  };

  const openDonateLink = () => {
    window.open(
      " https://www.paypal.com/donate?token=kS87dcPIslwYt1GZP9yDgt-XVsxlqgAgSd2mUcm513IHz26lzCtHXEpqG4a-xV4EaP-Uj3pxG8zTpkcc",
      "_blank"
    );
  };

  return (
    <div className="xl:flex xl:flex-row-reverse">
      <aside className="px-8 xl:px-20 xl:bg-thirdBg  xl:sticky xl:top-0  xl:w-2/5  ">
        <div className="xl:sticky xl:top-1/4">
          <H2>Spenden</H2>
          <p className="mb-4 font-bold">
            Bitte helfen Sie mit Ihrer Spende für den Tierschutz!
          </p>

          <p className="mb-4 font-bold">Unsere Spendenkonten:</p>

          <div className="mb-4 text-left">
            <div className="mb-2">
              <p className="font-bold">Sparkasse Dachau</p>
              BIC: BYLADEM1DAH
              <br />
              IBAN: DE17 7005 1540 0080 8664 86
            </div>

            <div>
              <strong>Volksbank Dachau</strong>
              <br />
              BIC: GENODEF1DCA
              <br />
              IBAN: DE90 7009 1500 0000 2700 08
            </div>
          </div>

          <p className="mb-4 font-bold">
            Oder alternativ einfach per PayPal spenden:
          </p>

          <div className="flex flex-col mb-4 w-40 h-15 mx-auto sm:mx-0">
            <img
              src={Paypal}
              alt="paypal"
              className=" cursor-pointer mx-auto md:mx-0 py-2"
              onClick={openPaypalLink}
            />
            <img
              src={Btn}
              alt="spenden"
              className=" cursor-pointer mx-auto py-2 md:mx-0"
              onClick={openDonateLink}
            />
          </div>
          <p className="mt-4 font-bold">Vielen Dank für Ihre Unterstützung!</p>
        </div>
      </aside>
      <div className="xl:w-3/5 bg-secondBg ">
        <Section>
          <H2>Spenden</H2>

          <ul>
            <a href="#Futterspenden">
              <li className="bg-mainBg  text-white pl-6 py-2 border-b-2 transition duration-300 ease-in-out hover:bg-blue-800">
                Futterspenden
              </li>
            </a>
            <a href="#Sachspenden">
              <li className="bg-mainBg  text-white pl-6 py-2 border-b-2 transition duration-300 ease-in-out hover:bg-blue-800">
                Sachspenden
              </li>
            </a>
          </ul>
        </Section>

        <Section>
          <div id="Futterspenden">
            <H3>Futterspenden</H3>
            <p className="mb-4">
              Liebe Spender, wir danken Ihnen für die Sachspenden, die wir über
              unsere Futterspendenboxen (siehe Liste unten) erhalten. Bei
              Spenden in größerem Umfang bitten wir Sie, diese direkt im
              Tierheim Dachau abzugeben. Bei vorheriger telefonischer
              Ankündigung sind wir auch gerne beim Ausladen behilflich. Bei
              Sachspenden können wir Ihnen auf Wunsch gegen Vorlage des
              Kaufbelegs auch eine Spendenquittung für das Finanzamt ausstellen.
              In diesem Fall empfehlen wir, die Spende zusammen mit dem Beleg im
              Tierheim Dachau abzugeben.
            </p>

            <H3>Futterspendenboxen im Tierheim Dachau</H3>

            <table className="table-auto w-full mt-4">
              <thead>
                <tr>
                  <th className="bg-mainBg text-white px-4 py-2 border-r  ">
                    Standort
                  </th>
                  <th className="bg-mainBg text-white px-4 py-2 border-l ">
                    Adresse
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border-b">Dachau AEZ</td>
                  <td className="px-4 py-2 border-b">
                    Fraunhofer Str. 1, 85221 Dachau
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">Dachau Fressnapf</td>
                  <td className="px-4 py-2 border-b">
                    Frauenhofer Str. 9, 85221 Dachau
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">Dachau OBI</td>
                  <td className="px-4 py-2 border-b">
                    Kopernikusstr. 2, 85221 Dachau
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">Dachau Kaufland</td>
                  <td className="px-4 py-2 border-b">
                    Danziger Str. 1, 85221 Dachau
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">Erdweg KuK Edeka</td>
                  <td className="px-4 py-2 border-b">
                    Danziger Str. 1, 85221 Dachau
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">Karlsfeld Edeka</td>
                  <td className="px-4 py-2 border-b">
                    Südenstr. 5,85253 Erdweg
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">Karlsfeld Futterhaus</td>
                  <td className="px-4 py-2 border-b">
                    Münchner Str. 206,85757 Karlsfeld
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">Markt Indersdorf Rewe</td>
                  <td className="px-4 py-2 border-b">
                    Münchner Str. 206, 85757 Karlsfeld
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">
                    Odelzhausen Futterstadl
                  </td>
                  <td className="px-4 py-2 border-b">
                    Gewerbestr. 6, 85229 Markt Indersdorf
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">Petershausen Zoomarkt</td>
                  <td className="px-4 py-2 border-b">
                    Industriering 10, 85238 Petershausen
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">Röhrmoos Edeka</td>
                  <td className="px-4 py-2 border-b">
                    Industriering 10, 85238 Petershausen
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">Vierkirchen Edeka</td>
                  <td className="px-4 py-2 border-b">
                    Philipp-Reis-Str. 3, 85244 Röhrmoos
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">Vierkirchen Edeka</td>
                  <td className="px-4 py-2 border-b">
                    Indersdorfer Str. 66, 85256 Vierkirchen
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Section>

        <Section>
          <div id="Sachspenden">
            <H3>Sachspenden für das Tierheim</H3>
            <p className="mb-4">
              Liebe Spender, wir bitten Spenden nur nach vorheriger Absprache
              anzuliefern und die nachfolgende Aufstellung zu beachten:
            </p>

            <p className="mb-2 font-bold">
              Was wir brauchen bzw. annehmen können:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>Tierzubehör (Leinen, Geschirr, Näpfe)</li>
              <li>Hundedecken</li>
              <li>
                Waschmittel (Pulver) - unsere Maschinen vertragen
                Flüssigwaschmittel nicht
              </li>
            </ul>

            <p className="mb-2 font-bold">
              Was wir grundsätzlich brauchen könnten, aber derzeit genug „auf
              Lager“ haben:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>Tiertransportboxen</li>
              <li>Kleintierkäfige</li>
            </ul>

            <p className="mb-4 font-bold">
              Flohmarktwaren können bis auf weiteres aus Platzgründen nicht mehr
              angenommen werden!
            </p>

            <p className="mb-4 font-bold">
              Ansonsten dürfen wir z.B. auf folgende Verwertungsmöglichkeiten
              hinweisen:
              <a
                href="https://www.verschenkmarkt-dachau.de"
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-bold"
              >
                www.verschenkmarkt-dachau.de
              </a>
            </p>
          </div>
        </Section>
      </div>
      <NextButton />
    </div>
  );
};

export default Spenden;
