import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)}
      className="z-45 fixed  bottom-3 right-1/2 w-fit translate-x-1/2 rounded-full border-2 border-white bg-mainBg p-3 text-secondText shadow-md hover:shadow-sm"
    >
      zurück <FontAwesomeIcon icon={faPaw} className=" ml-1" />
    </button>
  );
};

export default BackButton;
