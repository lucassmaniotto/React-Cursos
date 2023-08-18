import React from 'react';
import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(-1);
  };
  return (
    <div>
      <h1>404</h1>
      <p>Page not found</p>
      <button onClick={handleNavigate}>Go back</button>
    </div>
  );
};
