import H2 from "../../layout/H2";
import Section from "../../layout/Section";

const Impressum = () => {
  return (
    <Section>
      <div>
        <H2>Impressum</H2>
        <div className="my-3">
          <p>
            Dies sind die offiziellen Internetseiten des
            <strong> Tierschutzvereins Dachau e.V.</strong>, Roßwachtstr 33,
            D-85221 Dachau Telefon: +49 08131 / 53610, Telefax: +49 08131 /
            53650, Email: Tierschutz@dachau.net
          </p>
          <div className="my-3">
            <p>Vereinsregister-Nr.: VR 20203, Stadt Dachau</p>
            <ol className="list-decimal pl-4">
              <li className="">Vorsitzende/r: Silvia Gruber</li>
              <li className="">Vorsitzende/r: Beate Radda</li>
            </ol>
          </div>
          <div className="my-3">
            <p>Gestaltung: Günter Hofheinz</p>
            <p>Optimized for Internet Explorer by Microsoft Corp.</p>
          </div>
          <p className="text-alertText my-3">
            Alle Texte und Bilder auf unseren Seiten unterliegen dem
            Urheberrecht. Veröffentlichung, Verbreitung, Nachdruck oder
            Reproduktion in jeder Form nur mit ausdrücklicher Genehmigung. Bitte
            wenden Sie sich an Tierschutz@dachau.net.
          </p>
        </div>

        <p>
          Mit Urteil vom 12. Mai 1998 hat das Landgericht Hamburg entschieden,
          dass man durch die Ausbringung eines Links die Inhalte der gelinkten
          Seite ggf. mit zu verantworten hat. Dies kann, so das Landgericht, nur
          dadurch verhindert werden, dass man sich ausdrücklich von diesen
          Inhalten distanziert. Auf unseren Seiten existieren Querverweise zu
          anderen Seiten im Internet. Der Tierschutzverein Dachau e. V. weißt
          ausdrücklich darauf hin, dass er keinerlei Einfluss auf die Gestaltung
          und die Inhalte der gelinkten Seiten hat. Deshalb distanzieren wir uns
          hiermit ausdrücklich von den Inhalten der Seiten, auf die von unseren
          Seiten verwiesen wird. Diese Erklärung gilt für alle auf den Seiten
          des Tierschutzverein Dachau e. V. vorhandenen.
        </p>
      </div>
    </Section>
  );
};

export default Impressum;
