import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

// Funktionskomponente für einen Button zur Navigation zum nächsten Abschnitt oder zum Seitenanfang
function NextButton() {
  // Ref, um Referenzen zu jedem Abschnitt im Dokument zu speichern
  const sectionsRef = useRef([]);
  
  // State, um festzustellen, ob sich der Benutzer am letzten Abschnitt der Seite befindet
  const [isLastSection, setIsLastSection] = useState(false);

  // Funktion zum Überprüfen, ob der Benutzer ans Ende der Seite gescrollt hat
  const isAtEndOfPage = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrolledFromTop = window.scrollY;
    return windowHeight + scrolledFromTop >= documentHeight;
  };

  useEffect(() => {
    // Funktion zum Behandeln von Scroll-Ereignissen und Aktualisieren des Zustands isLastSection
    const handleScroll = () => {
      setIsLastSection(isAtEndOfPage());
    };

    // Aktualisieren von sectionsRef, wenn sich die Seite ändert
    sectionsRef.current = Array.from(document.querySelectorAll("section"));

    // Hinzufügen eines Ereignislisteners für das Scroll-Ereignis beim Rendern der Komponente
    window.addEventListener("scroll", handleScroll);

    // Entfernen des Scroll-Ereignislisteners beim Demontieren der Komponente
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Leeres Abhängigkeitsarray stellt sicher, dass der Effekt nur einmal beim Rendern der Komponente ausgeführt wird

  // Funktion zum Scrollen zum nächsten Abschnitt oder zum Seitenanfang
  const scrollToNextSection = () => {
    const currentScroll = window.scrollY;

    // Durchlaufen jeder Sektion, um die nächste zu finden
    for (let i = 1; i < sectionsRef.current.length; i++) {
      const section = sectionsRef.current[i];
      const sectionTop = section.offsetTop - 70;

      // Scrollen zur gefundenen Sektion mit sanftem Verhalten
      if (sectionTop > currentScroll) {
        window.scrollTo({
          top: sectionTop,
          behavior: "smooth",
        });

        // Aktualisieren des Zustands isLastSection basierend darauf, ob es sich um die letzte Sektion handelt
        setIsLastSection(i === sectionsRef.current.length - 1);
        break;
      }
    }
  };

  // Funktion zum Scrollen zum Seitenanfang
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    // Zurücksetzen des Zustands isLastSection, da sich der Benutzer nicht mehr am letzten Abschnitt befindet
    setIsLastSection(false);
  };

  // Rendern der NextButton-Komponente
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