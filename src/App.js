import React from "react"
import Nav from "./components/nav/Nav"
import Conteudo from "./components/conteudo/Conteudo"
import Header from "./components/header/Header";

import "./App.css"

function App() {
  return (
    <div className="App">
      <Nav/>
      <Header/>
      <Conteudo/>
    </div>
  );
}

export default App;
