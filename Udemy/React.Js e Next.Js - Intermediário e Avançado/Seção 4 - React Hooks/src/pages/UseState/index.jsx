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
      <p>useState( );</p>
      <img src={logo} className={`logo ${reverseClass}`} alt="logo" />
      <h1>Counter: {counter}</h1>
      <div className="buttons">
        <button type="button" onClick={handleClick}>
          Reverse
        </button>
        <button type="button" onClick={handleIncrement}>
          Increment
        </button>
      </div>
    </div>
  );
};
