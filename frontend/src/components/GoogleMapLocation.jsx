import React from "react";

const GoogleMapLocation = () => {
  return (
    <>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5311.237684000173!2d11.4526312!3d48.2717092!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e7af94260e541%3A0x7b1073b07aefb83c!2sTierschutzverein%20Dachau%20e.V.!5e0!3m2!1sde!2sde!4v1701784533888!5m2!1sde!2sde"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-[250px] mt-4 border-none"
      ></iframe>
    </>
  );
};

export default GoogleMapLocation;
