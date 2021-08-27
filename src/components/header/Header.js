import React from "react"

import Author from "../../img/author.png"

import "./Header.css"

export default function Header() {
  return (
    <>
      <header>
        <div className="title">
          <h1>
            Quais são os sintomas da variante Delta da Covid-19? Teste seus
            conhecimentos
          </h1>

          <hr />
          <p>
            A infecção causada pela variante Delta pode provocar sintomas
            diferentes da doença causada pela linhagem original do novo
            coronavírus
          </p>

          <img className="imageAuthor" src={Author} alt="autor" />

          <hr />

          <span className="dia">24/08/2021 às 16:44 | Atualizado às 16:56</span>
        </div>
      </header>
    </>
  );
}
