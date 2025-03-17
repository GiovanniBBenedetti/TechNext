'use client'

import "./perifericos.css";
import Horizon  from "next/font/local"
import { useEffect, useState } from "react";


const font = Horizon({
  src: '../fontes/horizon.otf'
})





export default function Perifericos(){
  


  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchData() {
      
        const response = await fetch('http://localhost:3333/cards1');
        const json = await response.json();
        setData(json);
    }
  
    fetchData();
  }, []);
  
 

    return(
        <>
        
      <main className="main">

        <div className="titulo">
          <h1 className={`${font.className}`}>Nossos Periféricos</h1>
        </div>



        <div className="container-pai">


{data.map(cards => (

  <div key={cards.id}>
    <div className="card">
      <div className="descricao2">
        <h2 className={`${font.className}`}>{cards.nome}</h2>
        <p>{cards.descricao}</p>
        <a className="" href={`/perifericos/${cards.id}`}>Ver mais</a>
      </div>
      <img src={cards.imagem} alt="" />
    </div>
  </div>


))}


</div>
      </main>


        </>
    )
}