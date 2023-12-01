import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

function Navbar() {
  const [showLinks, setShowLinks] = useState(true);
  const [showBtn, setShowBtn] = useState(false);

  const handleClick = () => {
    //click on burger icon => show me nav links
    setShowLinks(!showLinks);
  };

  //"media queries"
  //listen to it when we drag the screen larger or smaller
  window.addEventListener("resize", (e) => {
    if (e.target.innerWidth > 768) {
      //big screen => nav links
      setShowBtn(false);
      setShowLinks(true);
    } else {
      //small screen => burger icon
      setShowBtn(true);
      setShowLinks(false);
    }
  });

  //dependency array [] => what it should listen to
  //run at least once a mount
  //listen to it when we open the website
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
      {/* if showBtn true => we see the burger menu */}
      {showBtn && <FontAwesomeIcon icon={faBars} onClick={handleClick} />}

      {/* if showLinks true => we see the nav links */}
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
