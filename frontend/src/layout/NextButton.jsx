import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";

function NextButton() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    sectionsRef.current = Array.from(document.querySelectorAll("section"));
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
        break;
      }
    }
  };
  return (
    <div className="fixed top-3/4 right-0 -translate-y-1/2 text-right mr-1">
      <button
        onClick={scrollToNextSection}
        className="w-7 h-7 border rounded-full shadow-md bg-secondBg"
      >
        <FontAwesomeIcon icon={faAnglesDown}></FontAwesomeIcon>
      </button>
    </div>
  );
}

export default NextButton;
