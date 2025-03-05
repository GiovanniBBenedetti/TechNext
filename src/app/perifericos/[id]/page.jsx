import { redirect } from "next/navigation";

export default async function DetailsCard({ params }) {
    const { id } = await params;

 
    const response = await fetch(`http://localhost:3333/cards1/${id}`);

    if (!response.ok) {
        redirect("/not-found.jsx");
    }

    const data = await response.json();


    return (
        <div>
            <h1>Card {id}</h1>
            <p>{data.descricao}</p>
        </div>
    );
}