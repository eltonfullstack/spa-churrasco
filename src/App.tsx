import Banner from "./components/Banner"

import calendar from './assets/calendar_black.png'
import wallet from './assets/wallet_black.png'
import clock from './assets/clock.png'

function App() {

  return (
    <>
      <div className="banner">
        <Banner />
      </div>
      <div className="container">

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
        
          <div className="container-mais-infos">
            <div className="div-mais-local"></div>
            <div className="div-mais-society"></div>
            <div className="div-mais-churrasqueira"></div>
          </div>

        <div className="container-images">
            <div className="img-00">
              <h1>Churrasco dos Homens</h1>
              <p>Entre 13:00 e 22:00</p>
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
              <p>PIX 11940266961</p>
              <strong>Alessandro Dias da Silva</strong>
            </div>
          </div>
      </div>
    </>
  )
}

export default App
