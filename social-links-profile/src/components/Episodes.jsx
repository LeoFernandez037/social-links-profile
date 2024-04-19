import React, { useState, useEffect } from "react";
import Episodio from "./Episodio";
import "./Episodes.css";

const Episodes = (props) => {
  const character = props.character;
  const episodio = character["episode"];
  // console.log(`Elemento en la posición ${i}: ${episodio[i]}`);
  // const string = episodio[i];
  const [episodios, setEpisodios] = useState([]);
  useEffect(() => {
    /*aca el fetch hace el trabajo de un get*/
    const fetchEpisodes = async () => {
      const data = await Promise.all(
        episodio
          .slice(0, 5)
          .map((url) => fetch(url).then((response) => response.json()))
      );
      setEpisodios(data);
    };
    fetchEpisodes();
  }, []);
  return (
    <div className="ContCardEpisodes">
      {episodios.map((episodio, index) => (
        <Episodio key={index} episodio={episodio} />
      ))}
    </div>
  );
};

export default Episodes;
