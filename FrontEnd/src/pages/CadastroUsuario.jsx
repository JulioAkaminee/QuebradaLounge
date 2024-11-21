import { useState } from "react";
import Header from "../componentes/header/header.js";
import Footer from "../componentes/footer/footer.js";
import './pagesCSS/cadastroUsuario.css';
import { Link } from "react-router-dom";

function CadastroUsuario() {
  const [formData, setFormData] = useState({
    nomeCompleto: "",
    cpf: "",
    email: "",
    numTelefone: "",
    senha: "",
    confirmacaoSenha: "",
  });

  // Função para capturar os dados do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Função para enviar os dados ao servidor
  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita o comportamento padrão de envio do formulário

    // Verifica se as senhas coincidem
    if (formData.senha !== formData.confirmacaoSenha) {
      alert("As senhas não coincidem!");
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/cadastrar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Envia os dados como JSON
      });

      const result = await response.json();

      if (response.ok) {
        Swal.fire({
          title: "Cadastro Realizado",
          icon: "success"
        });
      } else {
        alert(result.message || "Erro no cadastro");
      }
    } catch (error) {
      console.error('Erro ao enviar os dados:', error);
      alert("Erro ao cadastrar. Tente novamente.");
    }
  };

  return (
    <>
      <Header textoInput="Pesquisar..." />
      <main>
        <section className="cadastro">
          <div className="containerFormCadastro">
            <h1>Cadastre-se</h1>
            <p>Venha fazer parte e tenha em suas mãos preços competitivos e grandes ofertas.</p>
            <form onSubmit={handleSubmit} className="formCadastro">
              <input
                placeholder="Digite Seu Nome Completo"
                type="text"
                className="nome inputCadastro"
                name="nomeCompleto"
                value={formData.nomeCompleto}
                onChange={handleChange}
              />
              <input
                type="text"
                className="cpf inputCadastro"
                name="cpf"
                placeholder="Digite seu cpf"
                value={formData.cpf}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                className="email inputCadastro"
                placeholder="Digite seu email"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type="text"
                className="numero inputCadastro"
                name="numTelefone"
                placeholder="Digite seu telefone"
                value={formData.numTelefone}
                onChange={handleChange}
              />
              <div className="containerSenhaCadastro">
                <input
                  type="password"
                  name="senha"
                  className="inputCadastroSenha"
                  placeholder="Digite sua senha"
                  value={formData.senha}
                  onChange={handleChange}
                />
                <input
                  type="password"
                  name="confirmacaoSenha"
                  className="inputCadastroSenha"
                  placeholder="Confirme sua senha"
                  value={formData.confirmacaoSenha}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="btnCadastro">Cadastrar</button>
            </form>
            <p className="linkParaLogin">
              Já possui uma conta? <Link to="/loginUsuario">Faça seu Login</Link>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default CadastroUsuario;
