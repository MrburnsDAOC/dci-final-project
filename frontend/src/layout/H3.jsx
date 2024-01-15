/* eslint-disable react/prop-types */
const H3 = ({ children, className = "", py = 3 }) => {
  return (
    <h3 className={["text-2xl", className, `py-${py}`].join(" ")}>
      {children}
    </h3>
  );
};

export default H3;
