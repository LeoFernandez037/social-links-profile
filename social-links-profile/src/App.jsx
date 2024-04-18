import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import "./App.css";

function generarNumerosAleatorios() {
  const numeros = [];
  for (let i = 0; i < 10; i++) {
    numeros.push(Math.floor(Math.random() * 857)); // Puedes ajustar el rango según tus necesidades
  }
  numeros.toString();
  //console.log(numeros);
  return numeros;
}

function App() {
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
        //console.log(data);
      });
  }, []);
  return (
    <div>
      {characters.map((character) => (
        <Card key={character.id} character={character} />
      ))}
    </div>
  );
}
export default App;
