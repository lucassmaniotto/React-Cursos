import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import './styles.css';

export default function About() {
  const { slug } = useParams();
  const location = useLocation();
  const history = useHistory();

  console.log(location);
  console.log(history);

  useEffect(() => {
    if (slug) {
      alert('Você descobriu um segredo!');
      setTimeout(() => {
        history.push('/');
      }, 1000);
    }
  }, [history, slug]);

  return (
    <div>
      <h1>Sobre</h1>
      {slug && <h2>Isso é um segredo! Estaremos te redirecionando...</h2>}
      <h2>{slug}</h2>
    </div>
  );
}
