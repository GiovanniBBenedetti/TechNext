import "./perifericos.css";
import Horizon  from "next/font/local"

const font = Horizon({
  src: '../fontes/horizon.otf'
})


export const metadata = {
  title: "Configuração de um pc",
};


export default function Perifericos(){
    return(
        <>
        <div>
      <main className="main">

        <div className="titulo">
          <h1 className={`${font.className}`}>Nossos Periféricos</h1>
        </div>



        <div className="container-pai">
          <div className="card"> 
            <div className="descricao">
              <h1 className={`${font.className}`}>Mouse Logitech G502</h1>
              <p>Com RGB LIGHTSYNC, Ajustes de Peso, 11 Botões Programáveis e Sensor HERO 25K</p>
              <a target="blank" href="https://www.amazon.com.br/Logitech-LIGHTSYNC-Ajustes-Bot%C3%B5es-Program%C3%A1veis/dp/B07JM7DR7K">Ver mais</a>
            </div>
            <img src="/MouseLogi.jpg" alt="" />
          </div>



          <div className="card">
            <div className="descricao">
              <h1 className={`${font.className}`}>Logitech G PRO X SUPERLIGHT</h1>
              <p>Com Tecnologia LIGHTSPEED, Ultraleve 63g, 5 Botões Programáveis, Sensor HERO 25K e Bateria Recarregável - Compatível com POWERPLAY - Rosa Magenta</p>
              <a target="blank" href="https://www.amazon.com.br/Logitech-SUPERLIGHT-Tecnologia-Program%C3%A1veis-Recarreg%C3%A1vel/dp/B09S3Y124Y/ref=asc_df_B09S3Y124Y/?tag=googleshopp00-20&linkCode=df0&hvadid=709884378379&hvpos=&hvnetw=g&hvrand=2577885257569092525&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9216076&hvtargid=pla-1646458669091&mcid=1497cfd8b78137d4bf0e512c3a258e86&gad_source=1&th=1">Ver mais</a>
            </div>
            <img src="/MouseLogi2.jpg" alt="" />
          </div>

          <div className="card">
            <div className="descricao">
              <h1 className={`${font.className}`}>MACHENIKE Teclado</h1>
              <p>Interruptor vermelho, 61 teclas (K500-B61), teclado mecânico com retroiluminação RGB Hot Swap USB-C com fio PBT para jogos de PC e trabalho</p>
              <a target="blank" href="https://www.amazon.com.br/MACHENIKE-interruptor-vermelho-K500-B61-retroilumina%C3%A7%C3%A3o/dp/B0CM2YK8FB/ref=asc_df_B0CM2YK8FB/?tag=googleshopp00-20&linkCode=df0&hvadid=709884378379&hvpos=&hvnetw=g&hvrand=16936840209418145038&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9216076&hvtargid=pla-2266224692045&mcid=29879b2f665c35f9903fe56df940d349&gad_source=1&th=1">Ver mais</a>
            </div>
            <img src="/TecladoMachine.jpg" alt="" />
          </div>

          <div className="card">
            <div className="descricao">
              <h1 className={`${font.className}`}>Headtset Gamer Redragon Zeus Pro</h1>
              <p>Surround 7.1, Cabo USB-C Removível, Wireless, c/Microfone, Preto - H510-PRO</p>
              <a target="blank" href="https://www.amazon.com.br/Headtset-Redragon-Surround-Remov%C3%ADvel-Microfone/dp/B0CNKVYLF5/ref=asc_df_B0CNKVYLF5/?tag=googleshopp00-20&linkCode=df0&hvadid=709884378181&hvpos=&hvnetw=g&hvrand=11806257305883320150&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9216076&hvtargid=pla-2263543121260&mcid=c002d32cfa463945bd160edec2c60a88&gad_source=1&th=1">Ver mais</a>
            </div>
            <img src="/FoneReadragon.jpg" alt="" />
          </div>

        </div>
      </main>

    </div>

        </>
    )
}