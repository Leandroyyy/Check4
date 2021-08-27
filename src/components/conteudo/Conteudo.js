import React from "react"
import Author from "../../img/author.png"

import "./Conteudo.css"

export default function Conteudo(){
    return(
        <>      
            <main className="content">         

                <div className="title">   
                    <h1>Quais são os sintomas da variante Delta da Covid-19? Teste seus conhecimentos</h1>

                    <hr/>
                    <p>
                    A infecção causada pela variante Delta pode provocar sintomas diferentes da doença 
                    causada pela linhagem original do novo coronavírus
                    </p>
                    
                    <img id="imageAuthor" src={Author} alt="autor"/> 

                    <hr/>

                    <p>
                    24/08/2021 às 16:44 | Atualizado às 16:56
                    </p>
                </div>
                
        
            </main>
        </>
    )
}
