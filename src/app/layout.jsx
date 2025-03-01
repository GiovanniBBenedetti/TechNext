import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/Componenetes/Header/Header.jsx"; 
import Footer from "@/Componenetes/Footer/footer.jsx";
import Horizon  from "next/font/local"



const font = Horizon({
  src: './fontes/horizon.otf'
})

export const metadata = {
  title: "Meu primeiro site next",
  description: "Ola meu caro amigo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={``}>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossOrigin="anonymous"></script>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
