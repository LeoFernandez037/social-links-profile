// import React, { useState, useEffect } from "react";
import "./UserDetails.css";
//React es un teatro donde los componentes son actores, y su ciclo de vida es su actuacion
const UserDetails = (props) => {
  // const [user, setUser] = useState({});
  // setUser(props.user);
  const user = props.user;
  //user es un objeto, setUser es una funcion que cambia los valores de user
  //console.log(user.name);
  //Useeffect nos cambia el estado
  return (
    <div className="Contenedor1">
      <div className="contenedorImagen">
        <img
          className="redonda"
          src={user.avatar}
          alt={`avatar de ${user.name}`}
        ></img>
      </div>
      <h1 className="nombre">{user.name}</h1>
      <p className="ubicacion">{user.location}</p>
      <p className="descripcion">{user.description}</p>
    </div>
  );
};

export default UserDetails;
