import React from 'react';
import styles from './Tags.module.scss';

export default function Tags() {
  return (
    <div className={styles.tags}>
        <p>Busque por tags:</p>
        <ul className={styles.tags__list}>
            <li>Estrelas</li>
            <li>Galáxias</li>
            <li>Luas</li>
            <li>Planetas</li>
        </ul>
    </div>
  )
}
