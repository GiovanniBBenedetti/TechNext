'use client'

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";



export default function Results() {
  const searchParams = useSearchParams();
  const query = searchParams.get("produtos") || "";
  const [produtosFiltrados, setProdutosFiltrados] = useState([]);

  useEffect(() => {
    async function fetchData() {
      
        const response = await fetch('http://localhost:3333/cards');
        const json = await response.json();
          const resultados = json.filter(produto =>
          produto.nome.toLowerCase().includes(query.toLowerCase())
        );

        setProdutosFiltrados(resultados)
    }
  
    fetchData();
  }, [query]);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Resultados da Pesquisa</h1>
      <p className="text-lg">Você pesquisou por: <strong>{query}</strong></p>

          {produtosFiltrados.map(cards  => (
           <div key={cards.id}>
           <div className="">
             <div className="">
               <h2 className={``}>{cards.nome}</h2>
               <p>{cards.descricao}</p>
               <a className="" href={`/perifericos/${cards.id}`}>Ver mais</a>
             </div>
             <img src={cards.imagem} alt="" />
           </div>
         </div>
          ))}
       
  
    </div>
  );
}
