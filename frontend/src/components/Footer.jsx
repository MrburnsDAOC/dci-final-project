import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import Tierschutzbund from "../assets/Deutscher-Tierschutzbund.png";
import Bayern from "../assets/Tierschutzbund-Bayern.png";

const Footer = () => {
  return (
    // <footer className="bg-mainBg text-white flex py-5 justify-center w-full">
    <footer className="bg-mainBg text-white py-5 mt-auto flex justify-center">
      <div className="container ml-4 flex flex-col sm:flex-row justify-around ">
        <div className="mb-1.5">
          <a
            href="#"
            className="text-white hover:underline text-lg sm:text-md lg:text-lg "
          >
            Kontakt
          </a>
        </div>

        <div className="mb-1.5">
          <a
            href="https://www.facebook.com/search/top/?q=tierheim%20dachau&epa=SEARCH_BOX"
            target="_blank"
            className="text-white hover:underline text-lg sm:text-md lg:text-lg"
            rel="noopener noreferrer"
          >
            Social Media <FontAwesomeIcon icon={faFacebook} />
          </a>
        </div>

        <div className="mb-1.5">
          <a
            href="#"
            className="text-white hover:underline text-lg sm:text-md lg:text-lg"
          >
            Mitglied werden
          </a>
        </div>

        <div className="text-lg flex mb-1.5 sm:text-md lg:text-lg">
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
              className="w-6 h-6 "
            />
          </a>
        </div>

        <div>
          <a
            href="#"
            className="text-white hover:underline text-lg sm:text-md lg:text-lg"
          >
            Impressum und Datenschutz
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
