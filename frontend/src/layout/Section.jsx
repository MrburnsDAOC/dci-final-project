// eslint-disable-next-line react/prop-types
const Section = ({ children, className = "", bg = "bg-secondBg", mt = 2 }) => {
  return (
    <section
      className={[
        "px-8 py-3 break-words xl:mx-36",
        className,
        bg,
        `mt-${mt}`,
      ].join(" ")}
    >
      {children}
    </section>
  );
};

export default Section;
