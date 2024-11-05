import React, { useState } from "react";
import './header.css'; // Corrigido para refletir o padrão de importação CSS
import { Link } from "react-router-dom";
function Header(props) {
const [isOpen, setIsOpen] = useState(false);

const toggleMenu = () => {
setIsOpen(!isOpen);
};

const closeMenu = () => {
setIsOpen(false);
};


return (
<>
  <header className="mobile">
    <div>
      <Link to="/"><img id="logo" src="../assets/icons/logo-mobile.svg" alt="Logo" /></Link>
    </div>
    <div>
      <span id="menu-hamburguer" class="material-symbols-outlined" onClick={toggleMenu}>
        menu
      </span>

      <input type="text" placeholder="Pesquisar..."/>
      <span id="carrinho" class="material-symbols-outlined">
        shopping_cart
      </span>
    </div>

    {/* Menu */}
    <div className={`menu-container ${isOpen ? 'open' : '' }`}>
      <nav className={`container-menu ${isOpen ? 'open' : '' }`}>
        <div className="menu-area-login">
          <div className="user-login-container">
            <div className="user-login-icon">
              <span class="material-symbols-outlined">person</span>
              <p>Entrar</p>
            </div>
            <Link to="/"><img src="../assets/icons/logo-desktop.svg" alt="Logo desktop" /></Link>
          </div>
          <button>Promoções</button>
        </div>

        <div className="navigation">
          <ul>
            <Link to="/">
            <li><span class="material-symbols-outlined">home</span>
              <p>Início</p>
            </li>
            </Link>
            <li><span class="material-symbols-outlined">liquor</span>
              <p>Produtos</p>
            </li>
            <Link to="/localizacao">
            <li><span class="material-symbols-outlined">map</span>
              <p>Localização</p>
            </li>
            </Link>
            <li><span class="material-symbols-outlined">mic_external_on</span>
              <p> Shows</p>
            </li>
            <li><span class="material-symbols-outlined">chat</span>
              <p>Fale Conosco</p>
            </li>
            <li><span class="material-symbols-outlined">info</span>
              <p>Nos Conheça</p>
            </li>
          </ul>
        </div>
      </nav>
      <div className={`overlay ${isOpen ? 'open' : '' }`} onClick={closeMenu}></div>
    </div>
  </header>

  <header className="desktop">
    <div className="container_header">
      <Link to="/"><img src="../assets/icons/logo-desktop.svg" alt="" /></Link>

      <form action="#" className="pesquisa">
        <input id="barra-pesquisa" type="text" name="barra-pesquisa" placeholder="Pesquisar..."  />
      
      </form>
      <Link to="/loginUsuario" className="login">
        <div className="iconLogin">
          <span class="material-symbols-outlined">
            person
          </span>
          <p>Olá, Faça seu login</p>
        </div>
      </Link>
      <div className="carrinho_header">
        <span class="material-symbols-outlined">
          shopping_cart
        </span>
      </div>

    </div>

    <nav>



      <ul className="navegacao-header-desk ">
        <li>
       <Link to="/"> HOME  </Link>
          <hr />
        </li>
        <li>
          <Link to="/destaques">PRODUTOS</Link>
          <hr />
        </li>
        <li>
          <Link to="/shows">SHOWS</Link>
          <hr />
        </li>
          <li>
        <Link to="/localizacao">
            LOCALIZAÇÃO
            <hr />
        </Link>
          </li>
        <li>
          <Link to="/nos-conheca">NOS CONHEÇA</Link>
          <hr />
        </li>
        <li>
<Link to="/fale-conosco"> FALE CONOSCO</Link>
          <hr />
        </li>
      </ul>
    </nav>
  </header>
</>

);
}

export default Header;