import React from "react";
import FooterCss from "../footer/footer.css";


function Footer() {
  return (
    <footer>
      <section id="group_information" className="footer_group">
        <div>
          <h2>HORARIO DE ATENDIMENTO</h2>
          <p>De Qua. a DOM das 18:00h as 23:30h </p>
        </div>
        
        <div>
          <h2>NOS SIGA NO INSTAGRAM</h2>
          <p>@lider_quebradaloungebar </p>
        </div>
        <div>
          <h2>LOCALIZAÇÃO</h2>
          <p>Rua Horma, 158 - São Paulo - SP CEP:02984-000 </p>
        </div>
      </section>
      
      <section id="footer_payment" className="footer_group">
        <h1>FORMAS DE PAGAMENTO</h1>
        <img className="img-payment" src="../assets/icons/american_express_logo.svg" alt="" />
        <img className="img-payment" src="../assets/icons/visa-logo.svg" alt="" />
        <img className="img-payment" src="../assets/icons/pix-logo.svg" alt="" />
        <img className="img-payment" src="../assets/icons/elo-logo.svg" alt="" />
        <img className="img-payment" src="../assets/icons/mastercard-logo.svg" alt="" />
      </section>

      <section id="footer_download" className="footer_group">
        <h1>BAIXE NOSSO APLICATIVO</h1>
        <img src="../assets/icons/apple-store-badge.svg" alt="" />
        <img src="../assets/icons/google-play-badge.svg" alt="" />
      </section>
    </footer>
  );
}

export default Footer;
