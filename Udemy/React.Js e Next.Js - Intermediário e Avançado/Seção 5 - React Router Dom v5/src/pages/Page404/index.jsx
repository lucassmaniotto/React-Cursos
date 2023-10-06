import React from 'react';
import { useHistory } from 'react-router-dom';
import './styles.css';

const Page404 = () => {
  const history = useHistory();

  return (
    <div>
      <h1>404</h1>
      <h2>Página não encontrada</h2>
      <button onClick={() => history.push('/')}>Voltar para Home</button>
    </div>
  );
};

export default Page404;
