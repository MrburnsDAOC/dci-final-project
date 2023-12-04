import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-mainBg text-white py-6">
      <div className="container mx-auto flex flex-col items-center text-center ">
        <div className="mb-4">
          <div>
            <a href="#" className="text-white hover:underline">
              Kontakt
            </a>
          </div>

          <div>
            <a href="#" className="text-white hover:underline">
              Social Media <FontAwesomeIcon icon={faFacebook} />
            </a>
          </div>

          <div className="">
            <a href="#" className="text-white hover:underline">
              Mitglied werden
            </a>
          </div>

          <div>Dachverbände</div>

          <div>
            <a href="#" className="text-white hover:underline">
              Impressum und Datenschutz
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
