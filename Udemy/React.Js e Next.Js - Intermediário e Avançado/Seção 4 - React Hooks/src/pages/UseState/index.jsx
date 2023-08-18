import React, { useState } from 'react';
import logo from '../../logo.svg';
import './styles.css';

export const UseState = () => {
  const [reverse, setReverse] = useState(false);
  const [counter, setCounter] = useState(0);
  const reverseClass = reverse ? 'reverse' : '';

  const handleClick = () => {
    setReverse(!reverse);
  };

  const handleIncrement = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  return (
    <div>
      <h2>useState( );</h2>
      <img src={logo} className={`logo ${reverseClass}`} alt="logo" />
      <h1>Contador: {counter}</h1>
      <div className="buttons">
        <button type="button" onClick={handleClick}>
          Reverter
        </button>
        <button type="button" onClick={handleIncrement}>
          Incrementar
        </button>
      </div>
    </div>
  );
};
