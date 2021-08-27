import React from "react"

import Bolinha from "../../img/bolinha.png"

import "./Nav.css"

export default function Nav(){
    return(
        <>
            <nav>
                <ul className="list">
                    <li><a href="#">Nacional <img src={Bolinha} alt="ao vivo" /> </a></li>
                    <li><a href="#">Business</a></li>
                    <li><a href="#">Internacional</a></li>
                    <li><a href="#">Saúde</a></li>
                    <li><a href="#">Tecnologia</a></li>
                    <li><a href="#">Esporte</a></li>
                    <li><a href="#">Entretenimento</a></li>
                    <li><a href="#">Estilo</a></li>
                    <li><a href="#">Viagem e Gastronomia </a></li>
                    <li><a href="#">Newsletters</a></li>
                    <li><a href="#">Podcasts</a></li>
                </ul>
            </nav>   
        </>
    )
}
