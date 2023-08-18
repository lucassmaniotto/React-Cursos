import React, { useState, useEffect } from 'react';
import { HiPlus } from 'react-icons/hi';
import './styles.css';

export const UseEffect = () => {
  const [counter, setCounter] = useState(0);
  const [counterWithoutDependency, setCounterWithoutDependency] = useState(0);

  useEffect(() => {
    console.log('useEffect( ); sem dependências');
    console.log('Atua como componentDidUpdate()');
  });

  useEffect(() => {
    console.log('useEffect( () => {}, [] );');
    console.log('Atua como componentDidMount()');
  }, []);

  useEffect(() => {
    console.log('useEffect( ); com dependências');
    console.log('Atua como componentDidUpdate()');
  }, [counter]);

  return (
    <div>
      <h2>useEffect( );</h2>
      <div className="code-display">
        <div className="code-block">
          <p>
            useEffect( () ={'>'} {} );
          </p>
        </div>
        <p className="description">Executa toda vez que o componente atualiza, independente de qualquer variável</p>
      </div>
      <div className="code-display">
        <div className="code-block">
          <p>
            useEffect( () ={'>'} {}, [] );
          </p>
        </div>
        <p className="description">Executa apenas uma vez quando o componente é renderizado</p>
      </div>
      <div className="code-display">
        <div className="code-block">
          <p>
            useEffect( () ={'>'} {}, [counter] );
          </p>
        </div>
        <p className="description">Executa toda vez que o componente atualiza e a variável counter é alterada</p>
      </div>
      <p className="description">Confira no console de seu navegador as atualizações dos useEffects</p>
      <div className="buttons">
        <h3>Contador com dependência: {counter}</h3>
        <button onClick={() => setCounter(counter + 1)} className="button">
          <HiPlus size={20} className="icon" />
        </button>
        <h3>Contador sem dependência: {counterWithoutDependency}</h3>
        <button onClick={() => setCounterWithoutDependency(counterWithoutDependency + 1)} className="button">
          <HiPlus size={20} className="icon" />
        </button>
      </div>
    </div>
  );
};
