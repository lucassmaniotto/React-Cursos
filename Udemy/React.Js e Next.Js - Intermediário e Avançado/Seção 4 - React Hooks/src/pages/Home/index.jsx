import React from 'react';
import logo from '../../logo.svg';
import './styles.css';

export const Home = () => {
  return (
    <div>
      <h1>Bem vindo!</h1>
      <img src={logo} className="logo" alt="logo" />
      <div className="description">
        <p>Este é um projeto de exemplo para demonstrar o uso de React Hooks.</p>
        <p>Navegue pelas páginas para ver as implementações.</p>
      </div>
      <a href="https://reactjs.org/docs/hooks-intro.html" target="_blank" rel="noopener noreferrer">
        Documentação React Hooks
      </a>
      <br />
      <a href="https://pt-br.legacy.reactjs.org/docs/hooks-rules.html" target="_blank" rel="noopener noreferrer">
        Regras dos Hooks
      </a>
    </div>
  );
};
