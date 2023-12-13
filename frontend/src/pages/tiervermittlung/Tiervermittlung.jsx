import emergency from "../../assets/tiervermittlung/main/emergency.jpg";
import cat from "../../assets/tiervermittlung/main/cat.jpg";
import dog from "../../assets/tiervermittlung/main/dog.jpg";
import budgie from "../../assets/tiervermittlung/main/budgie.jpg";
import guineaPig from "../../assets/tiervermittlung/main/guinea-pig.jpg";
import adopted from "../../assets/tiervermittlung/main/adopted.jpg";
import { Link } from "react-router-dom";

const Tiervermittlung = () => {
  const sections = [
    {
      id: 1,
      name: "Notfall-Vermittlung",
      image: emergency,
      to: "/tiervermittlung/notfall-vermittlung",
    },
    { id: 2, name: "Hunde", image: dog },
    { id: 3, name: "Katzen", image: cat },
    { id: 4, name: "Nagetiere", image: guineaPig },
    { id: 5, name: "Wellensittiche", image: budgie },
    { id: 6, name: "Vermittelte Tiere", image: adopted },
  ];
  return (
    <div className="md:flex md:gap-5 md:flex-wrap md:justify-center md:my-10">
      {sections.map((section) => {
        return (
          <Link
            key={section.id}
            to={section.to}
            className="flex flex-col mb-2 relative cursor-pointer md:max-w-[500px]  "
          >
            <img
              src={section.image}
              alt={section.name}
              className="w-fit h-full self-center md:object-cover md:border-2 md:rounded-md "
            />
            <h2 className="self-center absolute bottom-0 text-secondText text-2xl mb-1">
              {section.name}
            </h2>
          </Link>
        );
      })}
    </div>
  );
};

export default Tiervermittlung;
