import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

const KontaktData = () => {
  // &nbsp; ist ein HTML-Code für „geschütztes Leerzeichen“.
  // &ndash; selbiges mit "-"
  return (
    <div>
      <p className="font-bold">Tierschutzverein&nbsp;Dachau&nbsp;e.&nbsp;V.</p>
      <p className="leading-4">Tierheim&nbsp;und&nbsp;Geschäftsstelle:</p>
      <p>Roßwachtstr&nbsp;33,&nbsp;D&ndash;85221&nbsp;Dachau</p>
      <p className="mt-2">
        Telefon:&nbsp;08131&nbsp;/&nbsp;53610 (tägl.: 10-12&nbsp;Uhr &
        14-18&nbsp;Uhr)
      </p>
      <p className="leading-4">Telefax:&nbsp;08131&nbsp;/&nbsp;53650 </p>
      <p>Email:&nbsp;tierschutz@dachau.net</p>
      <a
        href="https://www.facebook.com/tierheim.dachau"
        target="_blank"
        className=" text-[#3b5998] text-2xl"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faFacebook} className="my-2" />
      </a>
      <p className="mt-2 font-semibold">Notruf:&nbsp;08131&nbsp;/&nbsp;53636</p>
    </div>
  );
};

export default KontaktData;
