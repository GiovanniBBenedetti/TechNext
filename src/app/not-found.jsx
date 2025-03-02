import Link from 'next/link'
import Styles from './not-found.css'
import Horizon  from "next/font/local"

const font = Horizon({
  src: './fontes/horizon.otf'
})


export default function NotFound() {
  return (
    <div className='erro'>
      <h1 className={`${font.className}`}>404</h1>
      <p>Opss... Pagína não encontrada</p>
      <img src="/Erro.png" alt="" />
      <Link className={`Return ${font.className}`} href="/"> Voltar </Link>
    </div>
  )
}