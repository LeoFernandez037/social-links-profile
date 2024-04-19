import React from "react";
import "./UserDetails2.css";

const UserDetails2 = (props) => {
  const character = props.character;
  return (
    <div className="Contenedor2">
      <div className="contenedorImagen2">
        <img src={character.image} alt={`avatar de ${character.name}`}></img>
      </div>
      <div className="Status">
        <p className="ubicacion2">STATUS: </p>
        <p className="descripcion2">{character.status}</p>
      </div>
      <p className="descripcion2">
        {character.name} TYPE: {character.species}
      </p>
    </div>
  );
};

export default UserDetails2;
