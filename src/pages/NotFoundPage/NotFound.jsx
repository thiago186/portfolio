import React from 'react';
import './NotFound.css';

import Navbar from '../../components/Navbar/Navbar';

function NotFound() {
  return (
    <div className="not-found-container">
      <h1>404</h1>
      <p>Página Não Encontrada</p>
      <a href="/">Voltar para a Home</a>
    </div>
  );
}

export default NotFound;
