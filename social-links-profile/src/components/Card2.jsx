import React from "react";
import UserDetails2 from "./UserDetails2";
import Episodes from "./Episodes";
import { NavLink } from "react-router-dom";
import "./Card2.css";
const Card2 = (props) => {
  const character = props.character;
  return (
    <div className="contenedorDinamico2">
      <UserDetails2 character={character} />
      {/* <ButtonSection socialLinks={socialLinks} /> */}
      <h2>Episodios</h2>
      <Episodes character={character} />
      <NavLink to="/">
        <button className="boton">HOME</button>
      </NavLink>
    </div>
  );
};

export default Card2;
