import emergency from "../../assets/tiervermittlung/main/emergency.jpg";
import cat from "../../assets/tiervermittlung/main/cat.jpg";
import dog from "../../assets/tiervermittlung/main/dog.jpg";
import budgie from "../../assets/tiervermittlung/main/budgie.jpg";
import guineaPig from "../../assets/tiervermittlung/main/guinea-pig.jpg";
import adopted from "../../assets/tiervermittlung/main/adopted.jpg";
import ferret from "../../assets/tiervermittlung/main/ferret.jpg";
import { Link } from "react-router-dom";
import Section from "../../layout/Section";
import H2 from "../../layout/H2";

const Tiervermittlung = () => {
  const sections = [
    {
      id: 1,
      name: "Notfall-Vermittlung",
      image: emergency,
      to: "/tiervermittlung/notfall-vermittlung",
    },
    {
      id: 2,
      name: "Hunde",
      image: dog,
      to: "/tiervermittlung/hunde",
    },
    { id: 3, name: "Katzen", image: cat, to: "/tiervermittlung/katzen" },
    {
      id: 4,
      name: "Nagetiere",
      image: guineaPig,
      to: "/tiervermittlung/nagetiere",
    },
    {
      id: 5,
      name: "Wellensittiche",
      image: budgie,
      to: "/tiervermittlung/wellensittiche",
    },
    {
      id: 6,
      name: "Sonstige Tiere",
      image: ferret,
      to: "/tiervermittlung/sonstige-tiere",
    },
    {
      id: 7,
      name: "Vermittelte Tiere",
      image: adopted,
      to: "/tiervermittlung/vermittelte-tiere",
    },
  ];
  return (
    <>
      <Section>
        <H2>Tiervermittlung</H2>
        <p>Hier können Sie sehen, welche Tiere wir gerade beherbergen.</p>
        <p>
          Alle suchen ein neues Zuhause. Vielleicht bei Ihnen? Bitte beachten
          Sie, dass die Tiere jeweils mit einem Foto dargestellt werden, was die
          Ladezeiten der Seiten, je nach Bandbreite Ihrer Internetverbindung,
          erheblich verlängern kann. Auch bitten wir um Verständnis dafür dass
          nicht immer tagesaktuell veröffentlicht werden kann. Die Fotos und
          Beschreibungen sind sehr aufwändig und manchmal lässt uns die
          Tierschutzarbeit einfach keine Zeit...
        </p>
        <p>
          Tiervermittlung zu Pandemiezeiten bitte mit Voranmeldung unter
          <span className=" font-bold"> 08131 53610</span>.
        </p>
      </Section>

      <div className="grid grid-cols-1 gap-2 bg-mainBg md:my-6 md:grid-cols-2 md:bg-thirdBg xl:mx-36 xl:grid-cols-3">
        {sections.map((section) => {
          return (
            <Link
              key={section.id}
              to={section.to}
              className="relative hover:opacity-75"
            >
              <img
                src={section.image}
                alt={section.name}
                className="h-full self-center rounded-none brightness-90 md:rounded-md md:object-cover"
              />
              <h6 className="absolute bottom-0 mb-1 w-full text-center text-2xl text-secondText ">
                {section.name}
              </h6>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Tiervermittlung;
