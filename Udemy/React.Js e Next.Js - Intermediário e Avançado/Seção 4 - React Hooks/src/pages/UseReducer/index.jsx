import React, { useReducer } from 'react';
import './styles.css';

const globalState = {
  title: 'The title of context',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'change':
      console.log(`${action.type} executed`);
      return {
        ...state,
        title: action.payload,
      };
    case 'invert':
      // eslint-disable-next-line no-case-declarations
      const { title } = state;
      console.log(`${action.type} executed`);
      return {
        ...state,
        title: title.split('').reverse().join(''),
      };
  }
  console.log(`${action.type} is not a valid action`);
  return { ...state };
};

export const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, globalState);
  const { counter, title } = state;

  return (
    <div>
      <h2>useReducer( );</h2>
      <p className="description" style={{ width: '70%', margin: '0 auto' }}>
        O useReducer é uma alternativa ao useState. Ele é utilizado quando o estado possui uma lógica mais complexa, e
        quando o estado possui múltiplos valores. O hook retorna um array com dois elementos: o primeiro é o estado
        atual, e o segundo é a função dispatch. A função dispatch é utilizada para executar uma action. <br /> <br />
        No exemplo abaixo, a função reducer recebe o estado atual e a action, e retorna um novo estado. A action é um
        objeto que possui um atributo type, que é utilizado para identificar qual ação deve ser executada, além de
        possuir um atributo payload, que é utilizado para passar um valor para a action. <br /> <br />
        Abra o console do navegador para ver o resultado das ações.
      </p>
      <div className="content">
        <h2>{title}</h2>
        <p>{counter}</p>
        <div className="buttons">
          <button onClick={() => dispatch({ type: 'change', payload: new Date().toLocaleString('pt-BR') })}>
            Payload
          </button>
          <button onClick={() => dispatch({ type: 'invert' })}>Invert</button>
          <button onClick={() => dispatch({ type: 'notExist' })}>Not Exist</button>
        </div>
      </div>
    </div>
  );
};
