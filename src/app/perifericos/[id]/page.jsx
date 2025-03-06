import { redirect } from "next/navigation";
import "./id.css";

export default async function DetailsCard({ params }) {
    const { id } = await params;

 
    const response = await fetch(`http://localhost:3333/cards1/${id}`);

    if (!response.ok) {
        redirect("/not-found.jsx");
    }

    const data = await response.json();


    return (
        <div className="container-produto">
            <div className="container-imagem">
               <img src={`/${data.imagem}`} alt="" /> 
            </div>
           <div className="descricao">
            <h1>{data.nome}</h1>
            <p>{data.descricao}</p>
           </div>
        </div>
    );
}