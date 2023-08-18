import React, { useCallback, useState } from 'react';
import { HiPlus } from 'react-icons/hi';
import P from 'prop-types';
import './styles.css';

const Button = React.memo(function Button({ increment }) {
  console.log('Filho, renderizou');
  return (
    <button onClick={() => increment(10)} className="button">
      <HiPlus size={20} className="icon" />
    </button>
  );
});

Button.propTypes = {
  increment: P.func,
};

export const UseCallback = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = useCallback((num) => {
    setCounter((c) => c + num);
  }, []);

  console.log('Pai, renderizou');
  return (
    <div>
      <h2>useCallBack( );</h2>
      <p className="description">Confira no console de seu navegador as atualizações dos componentes Pai e Filho</p>
      <div className="buttons">
        <h3>Contador: {counter}</h3>
        <Button increment={incrementCounter} />
      </div>
    </div>
  );
};
