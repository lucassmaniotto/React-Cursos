import React, { createContext, useContext, useState } from 'react';
import './styles.css';

const GlobalContext = createContext();

export const UseContext = () => {
  const [counter, setCounter] = useState(42);

  const handleIncrement = () => {
    setCounter(counter + 1);
    console.log('counter', counter);
  };

  const globalState = {
    title: 'The title of context',
    counter: counter,
    incrementCounter: handleIncrement,
  };

  return (
    <GlobalContext.Provider value={globalState}>
      <div>
        <h2>useEffect( );</h2>
        <p className="description">
          Ao clicar no botão do RightContent, o valor do contador é incrementado, e o componente LeftContent é
          atualizado. Os componentes estão dentro do componente GlobalContext.Provider, que é o componente que possui o
          estado global. <br /> <br />
          Dessa forma, o componente LeftContent consegue acessar o estado global, e o componente RightContent consegue
          alterar o estado global, sem a necessidade de passar props entre os dois.
        </p>
        <div className="content">
          <Left />
          <div className="divider"></div>
          <Right />
        </div>
      </div>
    </GlobalContext.Provider>
  );
};

const LeftContent = () => {
  const context = useContext(GlobalContext);
  return (
    <div>
      <h2>LeftContent</h2>
      <p>{context.title}</p>
      <p>{context.counter}</p>
    </div>
  );
};

const RightContent = () => {
  const context = useContext(GlobalContext);

  const handleClick = () => {
    context.incrementCounter();
  };

  return (
    <div>
      <h2>RightContent</h2>
      <button onClick={handleClick}>+</button>
    </div>
  );
};

const Left = () => {
  return (
    <div className="left">
      <LeftContent />
    </div>
  );
};

const Right = () => {
  return (
    <div className="right">
      <RightContent />
    </div>
  );
};

export default UseContext;
