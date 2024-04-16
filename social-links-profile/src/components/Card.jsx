import React from "react";
import UserDetails from "./UserDetails";
import ButtonSection from "./ButtonSection";
import "./Card.css";

function Card(props) {
  const character = props.character;
  //console.log(character.name);
  // const socialLinks = user["Social-links"];
  //const locations = character["location"];
  return (
    <div className="contenedorDinamico">
      <UserDetails character={character} />
      {/* <ButtonSection socialLinks={socialLinks} /> */}
    </div>
  );
}

export default Card;
