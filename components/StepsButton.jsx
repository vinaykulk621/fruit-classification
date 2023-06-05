import Image from "next/image";
import React from "react";

const StepsButton = ({ icon, title, info }) => {
  return (
    <>
      <div className="usageButton">
        <Image
          className="imageIcons"
          src={icon}
          alt="upload button"
        />
        <h2 className="usageTitle">{title}</h2>
        <p className="usageInfo">{info}</p>
      </div>
    </>
  );
};

export default StepsButton;
