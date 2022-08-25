import React from "react";
import ReactDom from "react-dom/client";
import {Greeting2, Hola} from './Greeting'

const root = ReactDom.createRoot(document.getElementById("root"));

function Greeting() {
  const hola = "Easy";
  const user = {
    firstname: "cristian",
    secondname: "david",
  };
  function add(x, y) {
    return x + y;
  }
  return (
    <div>
      <h1>Hola Mundo</h1>
      <p>Esto es una prueba</p>
      {hola}
      <h3>{user.firstname}</h3>
      <h3>{user.secondname}</h3>
      <h3>{add(10,20)}</h3>
    </div>
  );
}

root.render(
  <>
    <Greeting />
    <Greeting2/>
    <Hola/>
  </>
);
