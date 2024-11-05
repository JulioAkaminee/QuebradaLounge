import React from 'react';
import './pagesCSS/nosConheca.css';
import Header from '../componentes/header/header';
import Footer from '../componentes/footer/footer';

const NosConheca = () => {
  return (
    <>
      <Header />
      <section className='nosConheca'>
        <div className="container">
          <h1 className="titulo">🎉 Bem-vindo à Lider Quebrada Lounge Bar! 🍻</h1>
          <p className="descricao">
            Aqui é o lugar onde a diversão e as boas bebidas se encontram! Nossa adega/bar pode ser pequena, mas temos um charme irresistível e vibrações que vão te fazer sentir em casa.
          </p>
          <p className="descricao">
            Nas nossas prateleiras, você vai descobrir uma seleção incrível de bebidas. Desde cervejas artesanais que vão fazer seu paladar dançar até destilados locais que são puro amor, estamos prontos para explorar sabores e criar memórias inesquecíveis. 
          </p>
          <p className="descricao">
            E quando a festa começa? Ah, meu amigo! Regularmente, transformamos nosso espaço em um palco vibrante, com shows ao vivo e eventos que tornam cada visita uma experiência única. Se você quer relaxar depois de um dia puxado ou celebrar uma ocasião especial, aqui na Quebrada Lounge, a alegria é garantida e todos são super bem-vindos!
          </p>

        </div>
      </section>
      <Footer />
    </>
  );
};

export default NosConheca;
