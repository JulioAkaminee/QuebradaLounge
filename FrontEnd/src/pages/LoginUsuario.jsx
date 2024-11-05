import Header from "../componentes/header/header.js";
import Footer from "../componentes/footer/footer.js";
import './pagesCSS/loginUsuario.css'; // Você pode criar um arquivo CSS para o login
import { Link } from "react-router-dom";

function LoginUsuario() {
  return (
    <>
      <Header textoInput="Pesquisar..." />
      <main>
        <section className="loginUser">
          <div className="containerFormLogin">
            <h1>Login</h1>
            <p>Entre na sua conta para acessar ofertas exclusivas.</p>
            <form action="" className="formLogin">
              <input 
                type="email" 
                name="email" 
                className="email inputLogin" 
                placeholder="Digite seu email" 
                required 
              />
              <input 
                type="password" 
                name="senha" 
                className="inputLoginSenha" 
                placeholder="Digite sua senha" 
                required 
              />
              <button className="btnLogin">Entrar</button>
            </form>
            <p className="linkParaCadastro">
              Não tem uma conta? <Link to="/cadastroUsuario">Cadastre-se</Link>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default LoginUsuario;
