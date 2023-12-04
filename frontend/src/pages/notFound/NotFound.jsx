import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <p>404</p>
      <br />
      This is NotFound
      <Link to="/">Go to home Page</Link>
    </>
  );
};

export default NotFound;
