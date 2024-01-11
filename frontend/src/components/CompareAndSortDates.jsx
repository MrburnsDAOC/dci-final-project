// import { useContext } from "react";
// import DataContext from "./kontentAi/DataContext";

// const CompareAndSortDates = () => {
//   // Function to compare dates for sorting
//   const compareDates = (a, b) => {
//     const dateA = new Date(a.elements.datum.value);
//     const dateB = new Date(b.elements.datum.value);

//     return dateA - dateB;
//   };

//   // Function to sort "aktuelle Meldungen" reports by date
//   const sortAktuelleMeldungenByDate = (data) => {
//     if (!data) return [];

//     return data
//       .filter(
//         (element) =>
//           element.system.type.toLowerCase() === "termin" &&
//           element.elements.archiv.value[0].name?.toLowerCase() === "aktuell",
//       )
//       .sort(compareDates)
//       .reverse();
//   };

//   const { data } = useContext(DataContext);
//   const aktuelleMeldungenDataSorted = sortAktuelleMeldungenByDate(data);
//   console.log(aktuelleMeldungenDataSorted);

//   return aktuelleMeldungenDataSorted;
// };

// export default CompareAndSortDates;
