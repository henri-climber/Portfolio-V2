import React from "react";
import "./icon_button.scss";

const WebsiteButton = ({ websiteUrl, icon }) => {
  const handleButtonClick = () => {
    window.open(websiteUrl, '_blank');
  };

  return (
    <button className="website-button" onClick={handleButtonClick}>
      <img src={icon} alt="icon" />
    </button>
  );
};

export default WebsiteButton;