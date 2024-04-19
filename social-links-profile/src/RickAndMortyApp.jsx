import React, { useState, useEffect } from "react";
import "./RickAndMortyApp.css";
import Card from "./components/Card";
import Card2 from "./components/Card2";

function generarNumerosAleatorios() {
  const numeros = [];
  for (let i = 0; i < 10; i++) {
    numeros.push(Math.floor(Math.random() * 826)); // Puedes ajustar el rango según tus necesidades
  }
  numeros.toString();
  //console.log(numeros);
  return numeros;
}

function RickAndMortyApp() {
  const [characters, setcharacters] = useState([]);
  useEffect(() => {
    /*aca el fetch hace el trabajo de un get*/
    fetch(
      "https://rickandmortyapi.com/api/character/" + generarNumerosAleatorios()
    )
      .then((res) => {
        /*le damos el formato de json*/
        return res.json();
      })
      /*le colocamos una variable data y lo mostramos por consola*/
      .then((data) => {
        setcharacters(data);
      });
  }, []);
  return (
    <div className="ConTodo">
      <div className="CharactersSection">
        {characters.map((character) => (
          <Card key={character.id} character={character} />
        ))}
      </div>
      <div className="Characters2Section">
        {characters.map((character) => (
          <Card2 key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
}
export default RickAndMortyApp;
