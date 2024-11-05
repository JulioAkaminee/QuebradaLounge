// NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';
import './pagesCSS/notFound.css'; // Importando o CSS

const NotFound = () => {
  return (
    <div className="not-found-container">
      <span className="material-icons" style={{ fontSize: '50px', marginBottom: '20px', color: 'var(--cor-secundaria)' }}>
        error
      </span>
      <h1 className="not-found-heading">404 - Página não encontrada</h1>
      <p className="not-found-paragraph">
        A página que você está procurando não existe.
      </p>
      <Link to="/" className="not-found-link">
        Voltar para a página inicial
      </Link>

      
    </div>
  );
};

export default NotFound;
