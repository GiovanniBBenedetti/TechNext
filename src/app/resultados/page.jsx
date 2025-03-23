'use client'

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";



export default function Results() {
  const searchParams = useSearchParams();
  const query = searchParams.get("produtos") || "";
  const [produtosFiltrados, setProdutosFiltrados] = useState([]);

  useEffect(() => {
    async function fetchData() {
      
        const response = await fetch('http://localhost:3333/cards1'  );
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

      {produtosFiltrados.length > 0 ? (
        <ul className="mt-4 w-full max-w-md">
          {produtosFiltrados.map(produto => (
            <li key={produto.id} className="border p-2 mb-2 rounded-lg shadow">
              <p className="text-lg font-semibold">{produto.nome}</p>
              <p className="text-gray-600">{produto.descricao}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-4 text-red-500">Nenhum produto encontrado.</p>
      )}
    </div>
  );
}
