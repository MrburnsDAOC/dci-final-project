import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import tierschutzDachauLogo from "../../assets/tierschutzDachauLogo.jpeg";

function Navbar() {
  const paths = [
    { name: "Home", to: "/", id: 1 },
    { name: "Über uns", to: "/über-uns", id: 2 },
    { name: "Tiervermittlung", to: "/tiervermittlung", id: 3 },
    { name: "Termine", to: "/termine", id: 4 },
    { name: "Spenden", to: "/spenden", id: 5 },
    { name: "Presse", to: "/presse", id: 6 },
    { name: "Kontakt", to: "/kontakt", id: 7 },
    { name: "Impressum", to: "/impressum", id: 8 },
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
    if (e.target.innerWidth >= 768) {
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
    if (window.innerWidth >= 768) {
      setBurgerMenu(false);
      setNavLinks(true);
    } else {
      setBurgerMenu(true);
      setNavLinks(false);
    }
  }, []);

  useEffect(() => {
    //closes the open burger menu when click outside
    const handleClickOutside = (e) => {
      let header = document.getElementById("header");
      let clickedItem = e.target;
      if (showBurgerMenu && showNavLinks && !header.contains(clickedItem)) {
        setNavLinks(false);
      }
    };

    window.addEventListener("click", handleClickOutside, true);
    return () => {
      window.removeEventListener("click", handleClickOutside, true);
    };
  }, [showBurgerMenu, showNavLinks]);

  return (
    <header
      id="header"
      className="bg-mainBg py-3 px-3 flex justify-between sticky top-0 z-50 md:justify-center xl:justify-between md:flex-row-reverse md:flex-wrap md:gap-x-60 md:gap-y-3 text-secondText"
    >
      <button
        className="bg-[#FE4A49] w-[95px] h-10 p-1.5 text-secondText rounded-lg cursor-pointer md:hover:shadow-md"
        onClick={() => navigate("/spenden")}
      >
        Spenden
      </button>

      {/* <div className="w-[55px] h-[55px] bg-secondBg rounded-full flex justify-center cursor-pointer md:hidden"> */}

      {(!showNavLinks || !showBurgerMenu) && (
        <div className="w-[70px] h-[70px] xl:w-[80px] xl:h-[80px] bg-secondBg rounded-full flex justify-center cursor-pointer absolute top-[90%] left-1/2 translate-x-[-50%] translate-y-[-50%] md:top-[100%] shadow-xl z-50">
          <img
            src={tierschutzDachauLogo}
            alt="Tierschutz Dachau e.V."
            className="w-[50px] h-[50px] xl:w-[65px] xl:h-[65px] rounded-2xl self-center"
            onClick={() => {
              navigate("/");
              window.scrollTo(0, 0);
            }}
          />
        </div>
      )}

      <div className="w-[95px] h-10 flex justify-end md:w-fit md:h-[65px] xl:h-[65px]">
        {/* if showBurgerMenu true => we see the burger menu */}
        {showBurgerMenu && (
          <FontAwesomeIcon
            icon={showNavLinks ? faXmark : faBars}
            onClick={handleNavClick}
            className="text-secondText text-3xl self-center cursor-pointer"
          />
        )}
        {/* if showNavLinks true => we see the nav links */}
        {showNavLinks && (
          <nav className="bg-mainBg absolute h-fit w-full left-0 top-[62.5px] text-2xl md:relative md:h-auto md:top-0">
            <ul className="md:flex md:justify-start md:flex-wrap">
              {paths.map((path) => {
                return (
                  <li
                    key={path.id}
                    className="py-2 px-8 border-solid border-t-2 border-secondBg md:border-none md:py-1 md:min-w-fit md:px-2"
                    onClick={handleNavClick}
                  >
                    <NavLink
                      to={path.to}
                      style={({ isActive }) => ({
                        textDecoration: isActive ? "underline" : "none",
                      })}
                      className="block md:inline md:hover:drop-shadow-md"
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
