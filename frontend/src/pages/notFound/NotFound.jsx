import { Link } from "react-router-dom";
import Section from "../../layout/Section";

const NotFound = () => {
  return (
    <Section>
      <div className="my-[30vh] text-center">
        <h6 className=" text-2xl my-4">404: Seite nicht gefunden</h6>
        <Link to="/">
          <button className="bg-mainBg border-white border-2 text-secondText p-3 rounded-full">
            zurück zu Home
          </button>
        </Link>
      </div>
    </Section>
  );
};

export default NotFound;
