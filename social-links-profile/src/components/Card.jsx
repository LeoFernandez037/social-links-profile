import React from "react";
import UserDetails from "./UserDetails";
import ButtonSection from "./ButtonSection";
import "./Card.css";

function Card(props) {
  const character = props.character;
  //console.log(character);
  // const socialLinks = user["Social-links"];
  const locations = character["location"];
  return (
    <div className="contenedorDinamico">
      <UserDetails user={character} />
      {/* <ButtonSection socialLinks={socialLinks} /> */}
    </div>
  );
}

export default Card;
