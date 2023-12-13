import BackButton from "../../../layout/BackButton";

import hanne from "../../../assets/tiervermittlung/notfaelle/Hanne.jpg";
import hanne2 from "../../../assets/tiervermittlung/notfaelle/Hanne2.jpg";
import katzenkinder from "../../../assets/tiervermittlung/notfaelle/Katzenkinder.jpg";
import katzenkinder2 from "../../../assets/tiervermittlung/notfaelle/Katzenkinder2.jpg";

import TierKarte from "../TierKarte";

import NextButton from "../../../layout/NextButton";

import Section from "../../../layout/Section";
import H2 from "../../../layout/H2";

const NotfallVermittlung = () => {
  const animals = [
    {
      id: 1,
      name: "Hanne",
      breed: "Mischling",
      dateOfBirth: "ca. 2016",
      sex: "weiblich",
      castrated: "kastriert",
      description:
        "Unsere blonde Hanne, so lieb, ruhig und verträglich... sucht ihr endgültig zu Hause. Die ca. 7jährige Hanne ist der Ruhepol hier in der Gruppe. Sie genießt es in der Gesellschaft anderer Hunde und Menschen zu sein und hat dabei gern ein ruhiges Plätzchen von dem aus sie dem Geschehen lauschen kann. Hanne wurden beide Augen operativ entfernt, doch trotz dessen kann sie sich sehr gut orientieren und liebt entspannte, schnupperintensive Spaziergänge. Natürlich muss Hanne erst einmalVertrauen lernen und sich an die neue Umgebung gewöhnen. Diese sollte ebenerdig und mit Garten sein.Unsere Hanne hat ein wunderschönes Fell und ein liebevolles Gemüt. Anfangs tastet sie sich vorsichtig an neue Situationen und Menschen heran. Hat sie erst einmal Vertrauen gefasst weicht sie einem nicht mehr von der Seite und wird ein treuer Wegbegleiter. Dass Hanne keine Rute mehr hat beeinträchtigt sie in keiner Weise. Unsere Sanfte ist stubenrein, geimpft, gechipt und kastriert und orientiert sich sehr gerne an anderen Hunden. Darum ziehen wir es vor Hanne in ein zu Hause zu vermitteln, in dem bereits ein Hund lebt. Wer einen genügsamen, ruhigen Hund sucht und keine Berührungsängste mit einem kleinen Handicap hat, ist bei Hanne an der richtigen Adresse.Hanne befindet sich seit etlichen Monaten bereits auf Ihrer Pflegestelle in Mecklenburg-Vorpommern. Bei Interesse bitte kurze WhatsApp an ihr Pflegefrauchen senden unter 0162/1986794.",

      images: [hanne, hanne2],
    },
    {
      id: 2,
      name: "zwei Katzenkinder",
      breed: "EHK",
      dateOfBirth: "ca. 14 Wochen alt",
      description:
        "Liebe Katzenfreunde, aus dem Wurf unserer Osttiroler Bergbauernhof-Katze suchen noch zwei Kätzchen (14 Wochen alt) ein neues, liebevolles Zuhause. Die Kätzchen sind allesamt wunderschön (s. Bilder), kerngesund, verspielt, zutraulich, an Menschen(und KinderJ) gewöhnt und stubenrein. Sie dürfen bei uns über eine Katzenklappe nach draußen - und es wäre unser Wunsch, dass sie auch weiterhin Zugang zur freien Natur haben. Gerne weitere Info auf Anfrage und gerne auch ein kurzer Besuchstermin, um die Kleinen live zu erleben! Gerne tel. Kontakt unter: 0179-7046397 oder 0160-97501269. Fam. Maier, Prinz-Adalbert-Str. 16, Dachau",

      images: [katzenkinder, katzenkinder2],
    },
  ];

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

      {animals.map((animal) => (
        <TierKarte key={animal.id} {...animal} />
      ))}
      <BackButton />
    </>
  );
};

export default NotfallVermittlung;
