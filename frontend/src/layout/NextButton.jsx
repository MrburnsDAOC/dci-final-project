<<<<<<< HEAD
// import { useEffect, useRef } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";

// function NextButton() {
//   const sectionsRef = useRef([]);

//   useEffect(() => {
//     sectionsRef.current = Array.from(document.querySelectorAll("section"));
//   }, []);

//   const scrollToNextSection = () => {
//     const currentScroll = window.scrollY;
//     for (let i = 1; i < sectionsRef.current.length; i++) {
//       const section = sectionsRef.current[i];
//       const sectionTop = section.offsetTop - 70;

//       if (sectionTop > currentScroll) {
//         window.scrollTo({
//           top: sectionTop,
//           behavior: "smooth",
//         });
//         break;
//       }
//     }
//   };
//   return (
//     <div className="fixed top-3/4 right-0 -translate-y-1/2 text-right mr-1 xl:hidden">
//       <button
//         onClick={scrollToNextSection}
//         className="w-7 h-7 border rounded-full shadow-md bg-secondBg"
//       >
//         <FontAwesomeIcon icon={faAnglesDown} />
//       </button>
//     </div>
//   );
// }

// export default NextButton;
=======
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
>>>>>>> 2a5d2400394309ae90bf22f90e92d2f02610e108

import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
function NextButton() {
  const sectionsRef = useRef([]);
  const [isLastSection, setIsLastSection] = useState(false);
<<<<<<< HEAD
=======

  const isAtEndOfPage = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrolledFromTop = window.scrollY;
    return windowHeight + scrolledFromTop >= documentHeight;
  };

>>>>>>> 2a5d2400394309ae90bf22f90e92d2f02610e108
  useEffect(() => {
    const handleScroll = () => {
      setIsLastSection(isAtEndOfPage());
    };

    // Update sectionsRef whenever the page changes
    sectionsRef.current = Array.from(document.querySelectorAll("section"));
<<<<<<< HEAD
    setIsLastSection(false);
=======

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
>>>>>>> 2a5d2400394309ae90bf22f90e92d2f02610e108
  }, []);
  const scrollToNextSection = () => {
    const currentScroll = window.scrollY;
    for (let i = 1; i < sectionsRef.current.length; i++) {
      const section = sectionsRef.current[i];
      const sectionTop = section.offsetTop - 70;
      if (sectionTop > currentScroll) {
        window.scrollTo({
          top: sectionTop,
          behavior: "smooth",
        });
        setIsLastSection(i === sectionsRef.current.length - 1);
        break;
      }
    }
  };
<<<<<<< HEAD
=======

>>>>>>> 2a5d2400394309ae90bf22f90e92d2f02610e108
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setIsLastSection(false);
  };
<<<<<<< HEAD
=======

>>>>>>> 2a5d2400394309ae90bf22f90e92d2f02610e108
  return (
    <div className="fixed top-3/4 right-0 -translate-y-1/2 text-right mr-1 xl:hidden">
      <button
        onClick={isLastSection ? scrollToTop : scrollToNextSection}
        className="w-7 h-7 border rounded-full shadow-md bg-secondBg"
      >
        <FontAwesomeIcon icon={isLastSection ? faChevronUp : faChevronDown} />
      </button>
    </div>
  );
}
export default NextButton;
