import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
function NextButton() {
  const sectionsRef = useRef([]);
  const [isLastSection, setIsLastSection] = useState(false);

  const isAtEndOfPage = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrolledFromTop = window.scrollY;
    return windowHeight + scrolledFromTop >= documentHeight;
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsLastSection(isAtEndOfPage());
    };

    // Update sectionsRef whenever the page changes
    sectionsRef.current = Array.from(document.querySelectorAll("section"));

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setIsLastSection(false);
  };
  return (
    <div className="fixed right-0 top-3/4 mr-1 -translate-y-1/2 text-right xl:hidden">
      <button
        onClick={isLastSection ? scrollToTop : scrollToNextSection}
        className="h-7 w-7 rounded-full border bg-secondBg shadow-md"
      >
        <FontAwesomeIcon icon={isLastSection ? faChevronUp : faChevronDown} />
      </button>
    </div>
  );
}
export default NextButton;