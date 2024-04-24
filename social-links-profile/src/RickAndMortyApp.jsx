import React, { useState, useEffect } from "react";
import "./RickAndMortyApp.css";
import Card2 from "./components/Card2";
import { useSearchParams } from "react-router-dom";

function RickAndMortyApp() {
  const [character, setPersonaje] = useState([]);
  let [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id");
  //no se donde se usa el setSearchParams :v
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPersonaje(data);
        fetchEpisodes(data.episode.slice(0, 4));
      });
  }, []);

  const fetchEpisodes = (episodesUrls) => {
    const promises = episodesUrls.map((url) =>
      fetch(url).then((res) => res.json())
    );

    Promise.all(promises)
      .then((episodios) => {
        setEpisodio(episodios);
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="ConTodo">
      <div className="Characters2Section">
        <Card2 key={character.id} character={character} />
      </div>
    </div>
  );
}
//Ya funcaaaaaaaaaaaaa GAAAAAAAAAAAAAAAAAAAAAAAAA :3
export default RickAndMortyApp;
//----------------------------------------------------------------
//Gracias Lozano por la explicacion :y
