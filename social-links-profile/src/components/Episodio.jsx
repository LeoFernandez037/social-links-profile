import React from "react";
import "./Episodio.css";

const Episodio = (props) => {
  const episodio = props.episodio;
  return (
    <div className="CardEpisodio">
      <p className="verde">Nombre:</p>
      <p>{episodio.name}</p>
      <p className="verde">Episodio:</p>
      <p>{episodio.episode}</p>
      <p className="verde">Fecha:</p>
      <p>{episodio.air_date}</p>
    </div>
  );
};

export default Episodio;
