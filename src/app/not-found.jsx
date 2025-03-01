import Link from 'next/link'
import Styles from './not-found.css'
import Horizon  from "next/font/local"

const font = Horizon({
  src: './fontes/horizon.otf'
})


export default function NotFound() {
  return (
    <div className='main'>
      <h1 className={`${font.className}`}>Opps.....</h1>
      <p>Pagína não encontrada</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}