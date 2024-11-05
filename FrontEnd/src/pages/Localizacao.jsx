import { useState } from 'react';
import Header from '../componentes/header/header';
import Footer from '../componentes/footer/footer';
import './pagesCSS/localizacao.css';

function Localizacao() {
  const [isLoading, setIsLoading] = useState(false);

  const latitudeDestinatario = -23.449798757504773;
  const longitudeDestinatario = -46.72316072377011;

  // Função para traçar a rota com modal de carregamento
  const handleRouteClick = () => {
    setIsLoading(true); // Exibe o modal de carregamento
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const routeLink = `https://www.google.com/maps/dir/?api=1&origin=${latitude},${longitude}&destination=${latitudeDestinatario},${longitudeDestinatario}`;
          setIsLoading(false); // Oculta o modal antes de abrir o link
          window.open(routeLink, "_blank");
        },
        (error) => {
          console.error("Erro ao obter localização: ", error);
          setIsLoading(false); // Oculta o modal em caso de erro
        }
      );
    } else {
      console.error("Geolocalização não é suportada neste navegador.");
      setIsLoading(false);
    }
  };

  return (
    <>
      <Header textoInput="Pesquisar..." />
      <section className="localizacao">
        <h1>Venha nos visitar</h1>
        <p>Aberto de quarta-feira a domingo, das 18:00 às 00:30h</p>

        {/* Iframe do Google Maps */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660.295622796691!2d-46.72316072377011!3d-23.449798757504773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cefbc5c5487481%3A0xf0e86da1b07bc889!2sR.%20Horma%2C%20158%20-%20Jardim%20Pirituba%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2002984-000!5e0!3m2!1spt-BR!2sbr!4v1708622569334!5m2!1spt-BR!2sbr"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localização no Google Maps"
        ></iframe>

        {/* Botão para traçar a rota */}
        <button onClick={handleRouteClick} className="botao-rota">
          TRAÇAR ROTA
        </button>
      </section>
      <Footer />

      {/* Modal de Carregamento */}
      {isLoading && (
        <div className="modal">
          <div className="modal-content">
          <div class="loader"></div> 
          </div>
        </div>
      )}
    </>
  );
}

export default Localizacao;
