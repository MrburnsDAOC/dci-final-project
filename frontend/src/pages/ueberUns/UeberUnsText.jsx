import { useEffect } from "react";
import Vorstand from "../../assets/ueber-uns/imgUnserVorstand.jpg";
import BackButton from "../../layout/BackButton";
import Section from "../../layout/Section";
import H2 from "../../layout/H2";
import NextButton from "../../layout/NextButton";

function UeberUnsText() {
  useEffect(() => {
    const url = window.location.href;
    const hash = url.substring(url.indexOf("#") + 1);
    const element = document.getElementById(hash);
    if (element) {
      if (element) {
        const yPos = element.getBoundingClientRect().top + window.scrollY - 90;
        window.scroll({
          top: yPos,
          behavior: "smooth",
        });
      }
    }
  }, []);

  return (
    <div>
      <NextButton />
      <Section>
        <a id="Geschichtliches" />
        <H2>Geschichtliches</H2>
        <p className="mb-2">
          Der Tierschutzverein wurde im Jahre 1981 unter dem Namen
          Tierschutzverein Dachau 1980 e. V. gegründet und in das
          Vereinsregister der Stadt Dachau mit der Nr. VR 20203 eingetragen. Er
          entstand aus einer Auffangstation, die der Tierschutzverein München in
          Dachau betrieb. Fundtiere aus dem Landkreis wurden damals dort
          angenommen und an das Münchner Tierheim weitergegeben. Nach Gründung
          des Dachauer Tierschutzvereins übernahm er diese Aufgabe. Man kümmerte
          sich aber auch schon um die Rückgabe bzw. Weitervermittlung gefundener
          Tiere.
        </p>
        <p className="mb-2">
          Erklärtes Ziel des Vereins war - unter anderem - der Bau und Betrieb
          eines Tierheims in Dachau. Dies wurde auch in der Satzung verankert.
          Im Jahr 1987 wurde der Name des Vereins in Tierschutzverein Dachau e.
          V. geändert.
        </p>
        <p className="mb-2">
          Aus den anfänglich sieben Gründungsmitgliedern sind inzwischen weit
          über 1.200 Mitglieder (Stand: 2007) geworden, die den Verein durch
          ihren jährlichen Beitrag und teilweise auch ehrenamtliche Mitarbeit
          unterstützen.
        </p>
      </Section>

      <Section>
        <a id="Unser-Anliegen" />
        <H2>Unser Anliegen</H2>
        <p className="mb-2">
          Tiere haben keine Lobby“ heißt es. Unser Anliegen ist es, dies zu
          ändern. Dazu brauchen wir Ihre Hilfe. Von den Kommunen erhalten wir
          ausschließlich für Fundtiere Gelder, aber keinerlei Zuschüsse oder
          sonstige Zuwendungen. Den Rest unseres Etats, der jährlich fast
          400.000,00 Euro beträgt, müssen wir aus Mitgliedsbeiträgen, Spenden
          und Veranstaltungen finanzieren. Ein jährliches Defizit ist hierbei
          unausweichlich. Hier ist jeder Tierfreund gefordert. Bitte
          unterstützen Sie uns, damit wir allen armen Tieren, die meist krank
          oder schwerkrank zu uns kommen, helfen können. Werden Sie Mitglied im
          Tierschutzverein und/oder helfen mit einer Spende.
        </p>
        <p className="mb-2">
          Der Tierschutzverein Dachau ist als gemeinnützig und besonders
          förderungswürdig anerkannt. Wenn Sie eine Spendenquittung benötigen,
          vermerken Sie dies mit Angabe Ihrer Adresse auf dem
          Überweisungsträger.
        </p>
      </Section>

      <Section>
        <a id="Unsere-Aufgaben" />
        <H2>Unsere Aufgaben</H2>
        <p className="mb-2">
          Unsere Hauptaufgabe besteht im Betrieb und der Unterhaltung unseres
          Tierheims „Franz von Assisi“ in Dachau. Dort versorgen wir Fund-,
          Abgabe- und Verwahrtiere aus dem Landkreis Dachau. Auch kranke oder
          verletzte Wildtiere finden bei uns ein vorübergehendes Zuhause, bis
          sie wieder in die Freiheit entlassen werden können. Wir übernehmen im
          Auftrag der Kommunen des Landkreises Dachau die Abholung,
          Unterbringung, Rück- und Weitervermittlung sowie die ggf. notwendige
          tierärztliche Versorgung von Fundtieren.
        </p>
        <p className="mb-2">
          Um einen optimalen Service zu bieten, betreiben wir einen 7 x 24
          Stunden - also „Rund-um-die-Uhr“- Notdienst. Selbstverständlich
          versuchen wir uns um alle tierschutzrelevanten Themen im Landkreis zu
          kümmern. Hierunter fallen z.B. Kontrollen schlechter Tierhaltungen und
          Abschaffung der Missstände, dieses oft in Zusammenarbeit mit dem
          Veterinäramt Dachau.
        </p>
      </Section>

      <Section>
        <a id="Unser-Tierheim" />
        <H2>Unser Tierheim</H2>
        <p className="mb-2">
          Bereits bei Vereinsgründung wurde als ein Hauptziel des Vereins der
          Bau und Betrieb eines Tierheims in der Satzung verankert. Der damalige
          Vorstand hatte ein Grundstück an der Roßwachtstraße in Dachau
          ausgemacht, das teils der Stadt Dachau und teils dem
          Wasserwirtschaftsamt des Freistaates gehörte. Nach einigen
          Verhandlungen mit Stadt und Freistaat genehmigten die Stadt Dachau und
          das Wasserwirtschaftsamt die kostenlose Nutzung des Grundstücks durch
          den Tierschutzverein. Das gesamte Areal umfaßt ca. 4.500 qm und liegt
          sehr schön in einem Landschaftsschutzgebiet.
        </p>
        <p className="mb-2">
          Nach Genehmigung der Pläne wurde im Jahr 1984 mit dem Bau des
          Tierheims begonnen. Geplant waren neben dem eigentlichen Tierheim mit
          Hundezwingern und Katzenhaus ein Kleintierhaus und ein
          Personalwohnhaus. Nach einer - immer wieder durch finanzielle Engpässe
          unterbrochenen - Bauzeit von 3Jahren wurde das Tierheim 1987 in
          Betrieb genommen. Der Wohnhausbau wurde aus finanziellen Gründen „auf
          Eis" gelegt; der Bau des Kleintierhauses gar nicht begonnen. Das
          Wohnhaus wurde in der Folgezeit je nach finanzieller Lage „stückweise"
          weitergebaut und 1994 endgültig fertig gestellt.
        </p>
        <p className="mb-2">
          Nach ca. 2jährige Bauzeit wurde im Jahr 2001 dann auch das
          Kleintierhaus eröffnet.
        </p>
        <p className="mb-2">
          Im gleichen Jahr konnte der Tierschutzverein vom Wasserwirtschaftsamt
          zu sehr günstigen Konditionen das Grundstück zwischen Tierheim und
          Stadtwald erwerben. Mit sehr viel Eigenleistung und etlichen
          großzügigen Spenden, konnte das Gelände inzwischen gerodet und
          eingezäunt werden. Dort entstanden (und entstehen) weitere
          Freiausläufe und eine große Spielwiese für unsere Hunde.
        </p>
        <p className="mb-2">
          Unser Tierheim „Franz von Assisi“ befindet sich in{" "}
          <a
            href="/kontakt"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Dachau, Roßwachtstr. 33.
          </a>
          Dort bringen wir den Großteil der von uns betreuten Tiere unter. Den
          Tieren stehen im Tierheim
        </p>

        <ul className=" list-disc ml-5">
          <li>24 Hundezwinger, alle mit Außen- und Innenbereich</li>
          <li>3 Hundequarantäne-Zwinger</li>
          <li>6 Katzenzimmer</li>
          <li>2 Katzenquarantänen</li>
          <li>6 Kleintierzimmer (im eigenen Kleintierhaus)</li>
          <li>1 Kleintierquarantäne</li>
          <li>1 Vogelzimmer</li>
          <li>diverse Freiausläufe</li>
          <li>1 Erweiterungsbau mit Katzenhaus (erbaut 2012-2013)</li>
          <li>1 Tierarztpraxis</li>
        </ul>
        <p className="mb-2">
          zur Verfügung. Neben Futterkammer und Futterküche, Neben- und
          Geräteräumen befinden sich in den drei Gebäuden, noch das Büro von
          Verein und Tierheim sowie eine Hausmeisterwohnung. Das im Jahr 2001
          zugekaufte Gelände wurde in Eigenarbeit eingezäunt und bepflanzt. Es
          dient unseren Hunden als Spiel- und Tobewiese. Da das Tierheim aus
          allen Nähten platzte, wurden im Herbst 2008 auf dem großen Freigelände
          drei gebraucht gekaufte Bürocontainer aufgestellt, um die Vielzahl von
          zu versorgenden Katzen zumindest notdürftig unterzubringen.
        </p>
        <p className="mb-2">
          Durch zahlreiche Spendenaufrufe über Jahre hinweg und dank der
          Unterstützung vieler Mitglieder und wohlgesinnter Gönner konnte im
          Jahr 2012 mit dem Bau eines Erweiterungsbaus mit Katzenhaus begonnen
          werden. Voraus gingen einige zähe Verhandlungen bzgl. des
          Grundstückes, auf dem es errichtet werden sollte. Es enthält jede
          Menge Altlasten aus Kriegszeiten, daher bot die Stadt Dachau es
          günstig an. Die Besitzer müssten jedoch evtl. anfallende
          Entsorgungskosten tragen! Notgedrungen mussten wir diese Kröte
          schlucken - heut steht er, unser neuer Erweiterungsbau mit Katzenhaus.
          Einweihung war am 17.06.2013!
        </p>
        <p className="mb-2">
          Um den Betrieb des Tierheims und die lückenlose Betreuung der Tiere zu
          gewährleisten, beschäftigt der Verein mehrere Ganztags- und
          Teilzeitkräfte. Ein Teil der anfallenden Arbeiten wird von
          ehrenamtlichen Mitarbeitern übernommen (so zum Beispiel der Notdienst,
          der 7 Tage in der Woche, 24 Stunden am Tag erreichbar ist).
        </p>
        <p className="mb-2">
          Im Tierheim werden jährlich ca. 45.000 Arbeitsstunden geleistet, ca.
          30.000 davon werden ehrenamtlich erbracht. Zusätzlich fallen pro Jahr
          ca. 2.000 Einsatzfahrten (Abholung von Fundtieren, Nothilfe,
          Platzkontrollen, etc.) an. 500 davon nachts.
        </p>
        <p className="mb-2">
          Der Betrieb des Tierheims verursacht jährliche Kosten von ca. €
          400.000. Der größte Teil davon wird aus Spenden und Mitgliedsbeiträgen
          des Vereins bestritten. Seit 1994 erhält der Verein für die Betreuung,
          Verwahrung und Vermittlung von Fundtieren eine pauschale
          Aufwandsentschädigung von den meisten Landkreisgemeinden. Da diese
          Aufwandsentschädigung die Kosten, die allein durch die Fundtiere, die
          der Verein für die Kommunen betreut entstehen, bei weitem nicht deckt,
          wird die finanzielle Decke des Vereins jährlich dünner. Einige
          Kommunen und die Stadt Dachau haben ihre Pauschale in den letzten
          Jahren auf den geforderten (und immer noch nicht kostendeckenden) 1
          Euro pro Einwohner angehoben. Alle anderen Kommunen zahlen teilweise
          deutlich weniger. Sprechen Sie in dieser Angelegenheit doch einmal mit
          dem Gemeinderat Ihres Vertrauens!
        </p>
      </Section>

      <Section>
        <a id="Unser-Vorstand" />
        <H2>Unser Vorstand</H2>
        <p className="mb-2">
          Seit den letzten Wahlen im Rahmen der Jahreshauptversammlung am
          30.06.2018 sind folgende Personen im Amt:
        </p>
        <img src={Vorstand} alt="Vorstand 2018" />

        <p className="mb-2">
          v.l. Thomas Höbel, Schatzmeister; Beate Radda, 2. Vorsitzende; Silvia
          Gruber, 1. Vorstzende; Christl Horner-Kreisl, 3. Vorsitzende; Günter
          Hofheinz, Schriftführer
        </p>
      </Section>

      <BackButton />
    </div>
  );
}

export default UeberUnsText;
