import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import tierschutzDachauLogo from "../assets/tierschutzDachauLogo.jpeg";

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

  const navigate = useNavigate();

  const [showNavLinks, setNavLinks] = useState(true);
  const [showBurgerMenu, setBurgerMenu] = useState(false);

  const handleNavClick = () => {
    //click on burger icon => show me nav links
    if (showBurgerMenu) {
      setNavLinks(!showNavLinks);
    }
  };

  //"media queries"
  //listen to it when we drag the screen larger or smaller
  window.addEventListener("resize", (e) => {
    if (e.target.innerWidth > 768) {
      //big screen => nav links
      setBurgerMenu(false);
      setNavLinks(true);
    } else {
      //small screen => burger icon
      setBurgerMenu(true);
      setNavLinks(false);
    }
  });

  //dependency array [] => what it should listen to
  //run at least once a mount
  //listen to it when we open the website
  useEffect(() => {
    if (window.innerWidth > 768) {
      setBurgerMenu(false);
      setNavLinks(true);
    } else {
      setBurgerMenu(true);
      setNavLinks(false);
    }
  }, []);

  //closes the open burger menu when click outside
  const handleClickOutside = (e) => {
    let header = document.getElementById("header");
    let clickedItem = e.target;
    if (showBurgerMenu && showNavLinks && !header.contains(clickedItem)) {
      console.log("wird ausgeführt");
      setNavLinks(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside, true);
    return () => {
      window.removeEventListener("click", handleClickOutside, true);
    };
  }, [handleClickOutside]);

  return (
    <header
      id="header"
      className="bg-mainBg h-15 py-3 px-3 flex justify-between items-center sticky top-0 z-50"
    >
      <button
        className="bg-[#FE4A49] w-[95px] h-10 p-1.5 text-white rounded-lg cursor-pointer	"
        onClick={() => navigate("/spenden")}
      >
        Spenden
      </button>

      <div className="w-[55px] h-[55px] bg-white rounded-full flex justify-center cursor-pointer	">
        <img
          src={tierschutzDachauLogo}
          alt="Tierschutz Dachau e.V."
          className="w-12 h-12 rounded-2xl self-center"
          onClick={() => navigate("/")}
        />
      </div>
      <div className="w-[95px] h-10 flex  justify-end">
        {/* if showBurgerMenu true => we see the burger menu */}
        {showBurgerMenu && (
          <FontAwesomeIcon
            icon={showNavLinks ? faXmark : faBars}
            onClick={handleNavClick}
            className="text-white text-3xl self-center cursor-pointer"
          />
        )}
        {/* if showNavLinks true => we see the nav links */}
        {showNavLinks && (
          <nav className="bg-mainBg h-fit w-full absolute left-0 top-[70px] text-2xl">
            <ul>
              {paths.map((path) => {
                return (
                  <li
                    key={path.id}
                    className="py-2 px-8 border-solid border-t-2 border-white"
                    onClick={handleNavClick}
                  >
                    <NavLink
                      to={path.to}
                      style={({ isActive }) => ({
                        color: isActive ? "black" : "white",
                      })}
                      className="block"
                    >
                      {path.name}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Navbar;
