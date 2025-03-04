import Horizon  from "next/font/local"
import "./style.css";

const font = Horizon({
  src: './fontes/horizon.otf'
})



export default function Home(){
    return(
        <>
        <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://placehold.co/1600x400" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://placehold.co/1600x400" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://placehold.co/1600x400" className="d-block w-100" alt="..." />
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExample"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExample"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>


<div className="conatinerOferta container">
  <h1 className={`${font.className}`}>Nossas ofertas</h1>
</div>

        </>
    )
}