import Header from "../componentes/header/header.js";
import Footer from "../componentes/footer/footer.js";
import './pagesCSS/cadastroUsuario.css'
import { Link } from "react-router-dom";

function CadastroUsuario() {
  return (
    <>
   
    <Header textoInput="Pesquisar..." />
    <main>
      
        <section className="cadastro">
          <div className="containerFormCadastro">
            <h1>Cadastre-se</h1>
            <p>Venha fazer parte e tenha em suas mãos preços competitivos e grandes ofertas.</p>
            <form action="" className="formCadastro">
              <input placeholder="Digite Seu Nome Completo" type="text" className="nome inputCadastro" name="nomeCompleto"  />
              <input type="text" className="cpf inputCadastro" name="cpf" placeholder="Digite seu cpf" />
              <input type="email" name="email" className="email inputCadastro" placeholder="Digite seu email" />
              <input type="text" className="numero inputCadastro" name="numTelefone" placeholder="Digite seu telefone" />
              <div className="containerSenhaCadastro">
                <input type="password" name="senha" className="inputCadastroSenha" placeholder="Digite sua senha" />
                <input type="password" name="confirmacaoSenha" className="inputCadastroSenha" placeholder="Confirme sua senha" />
            
              </div>
          <button className="btnCadastro">Cadastrar</button>
            </form>
            <p className="linkParaLogin">Já possui uma conta? <Link to="/loginUsuario">Faça seu Login</Link></p>
          </div>
        </section>

    </main>
    <Footer/>
    </>
    
  );
}

export default CadastroUsuario;
