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
    if (e.target.innerWidth >= 1280) {
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
    if (window.innerWidth >= 1280) {
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
      className="sticky top-0 z-40 flex justify-between bg-mainBg px-3 py-3 text-secondText md:px-[32px] xl:justify-between"
    >
      {(!showNavLinks || !showBurgerMenu) && (
        //Logo
        <div className="absolute left-1/2 top-[90%] z-40 flex h-[65px] min-w-[65px] translate-x-[-50%] translate-y-[-50%] cursor-pointer justify-center rounded-full border-2 bg-secondBg drop-shadow-md hover:drop-shadow-lg xl:relative xl:left-0 xl:top-0 xl:translate-x-0 xl:translate-y-0">
          <img
            src={tierschutzDachauLogo}
            alt="Tierschutz Dachau e.V."
            className="h-[50px] w-[50px] self-center rounded-2xl "
            onClick={() => {
              navigate("/");
              window.scrollTo(0, 0);
            }}
          />
        </div>
      )}

      {/* Spendenbtn und Nav */}
      <div className="flex w-full justify-between xl:ml-[36px] xl:flex-row-reverse xl:items-center">
        <button
          className="h-10 w-[95px] cursor-pointer rounded-lg bg-[#FE4A49] p-1.5 text-xl font-bold text-secondText xl:hover:shadow-md "
          onClick={() => navigate("/spenden")}
        >
          Spenden
        </button>
        <div className="flex h-10 w-[95px] justify-end  xl:h-[56px] xl:w-fit">
          {/* if showBurgerMenu true => we see the burger menu */}
          {showBurgerMenu && (
            <FontAwesomeIcon
              icon={showNavLinks ? faXmark : faBars}
              onClick={handleNavClick}
              className="cursor-pointer self-center text-3xl text-secondText"
            />
          )}
          {/* if showNavLinks true => we see the nav links */}
          {showNavLinks && (
            <nav className="absolute left-0 top-[62.5px] h-fit w-full bg-mainBg text-2xl xl:relative xl:top-0 xl:h-auto xl:self-center">
              <ul className="xl:flex xl:justify-start">
                {paths.map((path) => {
                  return (
                    <li
                      key={path.id}
                      className="border-t-2 border-solid border-secondBg px-8 py-2 xl:min-w-fit xl:border-none xl:px-3 xl:py-1"
                      onClick={handleNavClick}
                    >
                      <NavLink
                        to={path.to}
                        style={({ isActive }) => ({
                          textDecoration: isActive ? "underline" : "none",
                        })}
                        className="block xl:inline xl:hover:drop-shadow-md"
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
      </div>

      {/* <div className="w-[55px] h-[55px] bg-secondBg rounded-full flex justify-center cursor-pointer md:hidden"> */}
    </header>
  );
}

export default Navbar;
