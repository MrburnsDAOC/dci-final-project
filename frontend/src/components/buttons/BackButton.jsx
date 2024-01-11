import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)}
      className="z-45 fixed  bottom-3 right-1/2 w-fit translate-x-1/2 rounded-full border-2 border-white bg-mainBg p-3 text-secondText"
    >
      zurück
    </button>
  );
};

export default BackButton;
