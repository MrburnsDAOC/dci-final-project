import pdfFile from "../../assets/Beitritt-Neu.pdf";

function Satzung() {

  return (
    <div>
        <a href={pdfFile} target="_blank" rel="noopener noreferrer" className="underline">Beitritt-pdf</a>
    </div>
  );
}

export default Satzung;
