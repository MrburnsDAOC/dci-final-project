export const compareDates = (a, b) => {
  const dateA = new Date(a.elements.datum.value);
  const dateB = new Date(b.elements.datum.value);
  return dateA - dateB;
};
