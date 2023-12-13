// eslint-disable-next-line react/prop-types
const Section = ({ children }) => {
  return (
    <section className="bg-secondBg px-8 py-3 mt-2 break-words xl:mx-36">
      {children}
    </section>
  );
};

export default Section;
