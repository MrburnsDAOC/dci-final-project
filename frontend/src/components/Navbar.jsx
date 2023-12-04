import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const paths = [
    { name: "Home", to: "/", id: 1 },
    { name: "Über uns", to: "/über-uns", id: 2 },
    { name: "Tiervermittlung", to: "/tiervermittlung", id: 3 },
    { name: "Termine", to: "/termine", id: 4 },
    { name: "Spenden", to: "/spenden", id: 5 },
    { name: "Kontakt", to: "/kontakt", id: 6 },
    { name: "Impressum", to: "/impressum", id: 7 },
  ];

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
    <header className="bg-mainBg flex justify-between ">
      <div>
        <button className="bg-red-700">Spenden</button>
      </div>
      <div>Logo Bild</div>
      {/* if showBtn true => we see the burger menu */}
      {showBtn && <FontAwesomeIcon icon={faBars} onClick={handleClick} />}

      {/* if showLinks true => we see the nav links */}
      {showLinks && (
        <nav className="pt-6">
          <ul>
            {paths.map((path) => {
              return (
                <li key={path.id}>
                  <NavLink
                    to={path.to}
                    style={({ isActive }) => ({
                      color: isActive ? "black" : "white",
                    })}
                  >
                    {path.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
