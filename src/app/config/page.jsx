import Image from "next/image";
import Link from "next/link"
import "./style.css";
import Horizon  from "next/font/local"

const font = Horizon({
  src: '../fontes/horizon.otf'
})


export const metadata = {
  title: "Configuração de um pc",
};


export default function Config() {
  return (
    <div>
      <main className="main">

        <div className="titulo">
          <h1 className={`${font.className}`}>Nossos Hardwars</h1>
        </div>



        <div className="container-pai">
          <div className="card">
            <div className="descricao">
              <h1 className={`${font.className}`}>Ryzen 7 5700x3d</h1>
              <p> 8 núcleos e 16 threads de processamento, combinados com uma enorme cache de 100 MB</p>
              <a target="blank" href="https://www.amazon.com.br/Processador-AMD-Ryzen-5700X3D-100100001503WOF/dp/B0CQ4H4H7X/ref=asc_df_B0CQ4H4H7X/?tag=googleshopp00-20&linkCode=df0&hvadid=709884378235&hvpos=&hvnetw=g&hvrand=13012501918884457624&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1001768&hvtargid=pla-2275433404761&psc=1&mcid=46991a6409143b56b0c6416998c740b3&gad_source=1">Ver mais</a>
            </div>
            <img src="/Ryzen7.jpg" alt="" />
          </div>



          <div className="card">
            <div className="descricao">
              <h1 className={`${font.className}`}>RTX 4070 super</h1>
              <p> Placa de Video Gigabyte NVIDIA GeForce RTX 4070 Super Eagle OC, 12GB, GDDR6X, DLSS, Ray Tracing, GV-N407SEAGLE OC-12GD</p>
              <a target="blank" href="https://www.amazon.com.br/GIGABYTE-ventoinhas-WINDFORCE-GV-N4060EAGLEOC-ICE-8GD/dp/B0D2JDP1VK?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&psc=1&smid=AWB2CG7VJ8BSY">Ver mais</a>
            </div>
            <img src="/Rtx-4070.jpg" alt="" />
          </div>

          <div className="card">
            <div className="descricao">
              <h1 className={`${font.className}`}>Memória Mancer Magnus</h1>
              <p>RGB, 8GB (2X8GB) DDR4, 3200Mhz, C22, MCR-MGN8RGB-3200</p>
              <a target="blank" href="https://mancer.com.br/p/memoria-mancer-magnus/">Ver mais</a>
            </div>
            <img src="/MemoriaRam.jpg" alt="" />
          </div>

          <div className="card">
            <div className="descricao">
              <h1 className={`${font.className}`}>Placa Mãe Gigabyte B550M AORUS ELITE </h1>
              <p>Socket: AM4, compatível com processadores AMD Ryzen. Memória: 4 slots DDR4. Conectividade de Vídeo: HDMI e DVI-D. Armazenamento: Slots M.2 NVMe.B</p>
              <a target="blank" href="https://www.amazon.com.br/GIGABYTE-B550M-AORUS-AX-Motherboard/dp/B0BZQ1TNW8?th=1">Ver mais</a>
            </div>
            <img src="/b550m.jpg" alt="" />
          </div>

        </div>
      </main>

    </div>


  );
}
