import React from "react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)}
      className="w-fit bg-mainBg  border-white border-2 text-secondText p-3 rounded-full z-50 fixed bottom-3 right-1/2 translate-x-1/2"
    >
      zurück
    </button>
  );
};

export default BackButton;
