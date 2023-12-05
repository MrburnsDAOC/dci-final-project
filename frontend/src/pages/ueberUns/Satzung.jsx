import React from "react";
import { Document, Page } from "react-pdf";

function Satzung() {
  const pdfURL =
    "../../assets/Satzung des Tierschutzvereins Dachau 2018_08_17.pdf";
  return (
    <div>
      <Document file={pdfURL}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
}

export default Satzung;
