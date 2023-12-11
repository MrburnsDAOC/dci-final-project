import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import Tierschutzbund from "../assets/Deutscher-Tierschutzbund.png";
import Bayern from "../assets/Tierschutzbund-Bayern.png";
import Kontakt from "../pages/kontakt/Kontakt.jsx";
import Mitglied from "../assets/ueber-uns/Beitritt-Neu.pdf";
import Impressum from "../pages/impressum/Impressum.jsx";

const Footer = () => {
  return (
    <footer className="bg-mainBg text-white py-2 flex  justify-center item-center w-full mt-auto">
      <div className="container ml-4 flex flex-col sm:flex-row justify-around ">
        <div className="my-1">
          <a
            href="/kontakt"
            className="text-white hover:underline  text-xl sm:text-base lg:text-xl "
          >
            Kontakt
          </a>
        </div>

        <div className="my-1">
          <a
            href="https://www.facebook.com/search/top/?q=tierheim%20dachau&epa=SEARCH_BOX"
            target="_blank"
            className="text-white hover:underline text-xl sm:text-base lg:text-xl"
            rel="noopener noreferrer"
          >
            Social Media <FontAwesomeIcon icon={faFacebook} />
          </a>
        </div>

        <div className="my-1">
          <a
            href={Mitglied}
            target="_blank"
            className="text-white hover:underline text-xl sm:text-base lg:text-xl"
            rel="noopener noreferrer"
          >
            Mitglied werden
          </a>
        </div>

        <div className="text-lg flex my-1 text-xl sm:text-base lg:text-xl">
          <p className="mr-2">Dachverbände</p>
          <a
            href="https://www.tierschutzbund.de/"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-2"
          >
            <img
              src={Tierschutzbund}
              alt="Deutscher Tierschutzbund"
              className="w-6 h-6 "
            />
          </a>

          <a
            href="https://www.tierschutz-bayern.de/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Bayern}
              alt="Deutscher Tierverbund-Bayern"
              className="w-6 h-6 rounded-full "
            />
          </a>
        </div>

        <div className="my-1">
          <a
            href="/impressum"
            className=" text-white hover:underline text-xl sm:text-base lg:text-xl"
          >
            Impressum und Datenschutz
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
