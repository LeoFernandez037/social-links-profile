import React from "react";
import UserDetails from "./UserDetails";
import { NavLink } from "react-router-dom";
import "./Card.css";

function Card(props) {
  const character = props.character;
  //console.log(character.name);
  // const socialLinks = user["Social-links"];
  //const locations = character["location"];
  return (
    <NavLink to={`/character?id=${character.id}`}>
      <div className="contenedorDinamico">
        <UserDetails character={character} />
        {/* <ButtonSection socialLinks={socialLinks} /> */}
      </div>
    </NavLink>
  );
}

export default Card;
