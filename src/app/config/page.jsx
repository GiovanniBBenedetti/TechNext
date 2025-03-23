'use client'

import Image from "next/image";
import Link from "next/link"
import "./style.css";
import Horizon from "next/font/local"
import { useState, useEffect } from "react";

const font = Horizon({
  src: '../fontes/horizon.otf'
})






export default  function Config() {

  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchData() {
      
        const response = await fetch('http://localhost:3333/cards');
        const json = await response.json();
        const filteredData = json.filter(item => item.categoria === "Hardware");
        setData(filteredData);
    }
  
    fetchData();
  }, []);
  
 

  return (
    <div>
      <main className="main">

        <div className="titulo">
          <h1 className={`${font.className}`}>Nossos hardwares</h1>
        </div>



        <div className="container-pai">


          {data.map(cards => (

            <div key={cards.id}>
              <div className="card">
                <div className="descricao2">
                  <h2 className={`${font.className}`}>{cards.nome}</h2>
                  <p>{cards.descricao}</p>
                  <a className="" href={`/config/${cards.id}`}>Ver mais</a>
                </div>
                <img src={cards.imagem} alt="" />
              </div>
            </div>


          ))}


        </div>
      </main>

    </div>


  );
}
