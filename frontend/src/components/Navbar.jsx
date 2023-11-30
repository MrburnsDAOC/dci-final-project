import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

function Navbar() {
  const [showLinks, setShowLinks] = useState(true);
  const [showBtn, setShowBtn] = useState(false);

  const handleClick = () => {
    //klick auf Burgermenu => zeigt die Navlinks
    setShowLinks(!showLinks);
  };

  //"media queries"
  window.addEventListener("resize", (e) => {
    if (e.target.innerWidth > 768) {
      //großer Bildschirm => Navbar
      setShowBtn(false);
      setShowLinks(true);
    } else {
      //kleiner Bildschirm => Burger menu
      setShowBtn(true);
      setShowLinks(false);
    }
  });

  useEffect(() => {
    if (window.innerWidth > 768) {
      setShowBtn(false);
      setShowLinks(true);
    } else {
      setShowBtn(true);
      setShowLinks(false);
    }
  }, []);

  return (
    <div>
      <div>
        <button>Spenden</button>
      </div>
      <div>Logo</div>
      {showBtn && <FontAwesomeIcon icon={faBars} onClick={handleClick} />}

      {showLinks && (
        <div>
          <a href="#home">Home</a>
          <a href="#home">Über uns</a>
          <a href="#home">Tiervermittlung</a>
          <a href="#home">Termine</a>
          <a href="#home">Kontakt</a>
          <a href="#home">Impressum</a>
        </div>
      )}
    </div>
  );
}

export default Navbar;
