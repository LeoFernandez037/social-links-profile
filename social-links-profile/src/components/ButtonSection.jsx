import React from "react";
import "./ButtonSection.css";

const ButtonSection = ({ socialLinks }) => {
  console.log(socialLinks);
  return (
    <div className="Contenedor1">
      <div className="container">
        {socialLinks.map((socialLink) => (
          <button key={socialLink.name} onclick={socialLink.URL}>
            {socialLink.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ButtonSection;
