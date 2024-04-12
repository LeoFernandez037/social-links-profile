// import React, { useState, useEffect } from "react";
import "./UserDetails.css";
//React es un teatro donde los componentes son actores, y su ciclo de vida es su actuacion
const UserDetails = (props) => {
  // const [user, setUser] = useState({});
  // setUser(props.user);
  const character = props.characters;
  //user es un objeto, setUser es una funcion que cambia los valores de user
  console.log(character.name);
  //Useeffect nos cambia el estado
  return (
    <div className="Contenedor1">
      <div className="contenedorImagen">
        <img
          className="redonda"
          // src={character.image}
          alt={`avatar de ${character.name}`}
        ></img>
      </div>
      <h1 className="nombre">{character.name}</h1>
      <p className="ubicacion">{character.location}</p>
      <p className="descripcion">{character.description}</p>
    </div>
  );
};

export default UserDetails;
