import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import Tierschutzbund from "../assets/Deutscher-Tierschutzbund.png";
import Bayern from "../assets/Tierschutzbund-Bayern.png";

const Footer = () => {
  return (
    <footer className="bg-mainBg text-white flex py-5 justify-center w-full ">
      <div className="container ml-4 flex flex-col sm:flex-row justify-around ">
        <div className="mb-1.5">
          <a
            href="#"
            className="text-white hover:underline text-lg sm:text-sm lg:text-lg "
          >
            Kontakt
          </a>
        </div>

        <div className="mb-1.5">
          <a
            href="https://www.facebook.com/search/top/?q=tierheim%20dachau&epa=SEARCH_BOX"
            target="_blank"
            className="text-white hover:underline text-lg sm:text-sm lg:text-lg"
            rel="noreferrer"
          >
            Social Media <FontAwesomeIcon icon={faFacebook} />
          </a>
        </div>

        <div className="mb-1.5">
          <a
            href="#"
            className="text-white hover:underline text-lg sm:text-sm lg:text-lg"
          >
            Mitglied werden
          </a>
        </div>

        <div className="text-lg flex mb-1.5 sm:text-sm lg:text-lg">
          <p className="mr-2">Dachverbände</p>
          <a
            href="https://www.tierschutzbund.de/"
            target="_blank"
            className="mr-2"
            rel="noreferrer"
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
            rel="noreferrer"
          >
            <img
              src={Bayern}
              alt="Deutscher Tierverbund-Bayern"
              className="w-6 h-6 "
            />
          </a>
        </div>

        <div>
          <a
            href="#"
            className="text-white hover:underline text-lg sm:text-sm lg:text-lg"
          >
            Impressum und Datenschutz
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
