import React from "react";

function Footer() {
  return (
    <footer className="bg-blue-500 text-white py-6">
      <div className="container mx-auto flex flex-col items-center justify-center text-center ">
        <div className="mb-4">
          <div>
            <a href="#" className="text-white hover:underline">
              Kontakt
            </a>
          </div>

          <div>
            <a href="#" className="text-white hover:underline">
              Social Media
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
}

export default Footer;
