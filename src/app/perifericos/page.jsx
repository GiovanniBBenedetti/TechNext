import "./perifericos.css";
import Horizon  from "next/font/local"

const font = Horizon({
  src: '../fontes/horizon.otf'
})


export const metadata = {
  title: "Periféricos",
};


export default async function Perifericos(){

  const response = await fetch('http://localhost:3333/cards1')
  const data = await response.json()


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
      <div className="descricao">
        <h2 className={`${font.className}`}>{cards.nome}</h2>
        <p>{cards.descricao}</p>
        <a className="" href="#">Ver mais</a>
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