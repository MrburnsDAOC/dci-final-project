/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const Section = ({
  children,
  className = "",
  bg = "bg-secondBg",
  mt = 2,
  mx = 36,
}) => {
  return (
    // xl:mx-36",
    <section
      className={[
        "break-words px-8 py-3",
        className,
        bg,
        `mt-${mt}`,
        `xl:mx-${mx}`,
      ].join(" ")}
    >
      {children}
    </section>
  );
};

export default Section;
