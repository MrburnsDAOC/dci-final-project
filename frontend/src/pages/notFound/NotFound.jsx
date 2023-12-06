import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-[70vh]">
      <p>404</p>
      <br />
      This is NotFound
      <Link to="/">Go to home Page</Link>
    </div>
  );
};

export default NotFound;
