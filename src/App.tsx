import Banner from "./components/Banner"

import calendar from './assets/calendar_black.png'
import wallet from './assets/wallet_black.png'
import clock from './assets/clock.png'
import soccer from './assets/soccer.png'
import barbecue from './assets/barbecue.png'
import map_location from './assets/map_location.png'

function App() {

  return (
    <>
      <div className="banner">
        <Banner />
      </div>
      <div className="container">

        <div className="versiculo">
          <h1 id="versiculo-titulo">Provérbios 16:21-24</h1>
          <p>
            O homem sábio se torna famoso pelo seu bom senso; quem fala com equilíbrio 
            promove o ensino. A sabedoria é a fonte da vida para os sábios, mas o 
            tolo será castigado pela sua própria tolice. O coração do homem 
            sábio controla suas palavras e os seus lábios promovem a instrução.
          </p>
        </div>

        <div className="container-card">
          <div className="card">
            <img src={calendar} alt="calendar" />
            <h1>Data</h1>
            <p>08/06/2024</p>
          </div>
          <div className="card">
            <img src={clock} alt="clock" />
           <h1>Horário</h1>
           <p>Das 13:00 às 22:00</p>
          </div>
          <div className="card">
            <img src={wallet} alt="wallet" />
            <h1>Valor</h1>
            <p>R$ 50,00</p>
          </div>
        </div>

        <div className="container-card">
          <div className="card">
            <img src={map_location} alt="wallet" />
            <h1>Local</h1>
            <p>Rua Brejaúva, 337 -  Diadema</p>
          </div>

          <div className="card">
            <img src={soccer} alt="calendar" />
            <h1>Futebol</h1>
            <p>Das 15:00 às 16:30</p>
          </div>
          <div className="card">
            <img src={barbecue} alt="clock" />
           <h1>Churrasqueira</h1>
           <p>Número 07</p>
          </div>
        </div>
        
          <div className="container-mais-infos">
            <div className="div-mais-local"></div>
            <div className="div-mais-society"></div>
            <div className="div-mais-churrasqueira"></div>
          </div>

        <div className="container-images">
            <div className="img-00">
              <h1 id="alerta-pagamaento">Pagamentos até 05/06/2024</h1>
              <p>Precisamos providenciar as coisas com antecedência</p>
            </div>
            <div className="img-01">
            </div>
            <div className="img-02">
            </div>
            <div className="img-03">
            </div>
        </div>

        <div className="container-images-times">
            <div className="img-04">
            </div>
            <div className="img-05">
            </div>
            <div className="img-06">
            </div>
            <div className="img-07">
            </div>
        </div>

        <div className="rodape">
            <div className="participantes">
              <h2 className="participantes-titulo">Participação Especial</h2>
              <p>Erik Alcântara -<strong> Chico Lang da IBG</strong></p>
            </div>
            <div className="outros">
              <h2 className="participantes-titulo">Organização</h2>
              <p>Tio Gordo</p>
              <p>Alessandro Dias</p>
            </div>
            <div className="logo-pix">
              <h2 className="participantes-titulo">Pagamento</h2>
              <p>PIX 11940266961 - <span id="nubank">Nubank</span></p>
              
              <strong>Alessandro Dias da Silva</strong>
            </div>
          </div>
          
      </div>
    </>
  )
}

export default App
