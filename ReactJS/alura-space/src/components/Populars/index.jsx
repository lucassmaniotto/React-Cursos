import React from 'react';
import styles from './Populars.module.scss';
import popularPhotos from './popular-photos.json';

export default function Populars() {
  return (
    <aside className={styles.populars}>
        <h2>Populares</h2>
        <ul className={styles.populars__images}>
            {popularPhotos.map((popularPhoto) => { 
                return (
                    <li key={popularPhoto.id}>
                        <img 
                            src={popularPhoto.path} 
                            alt={popularPhoto.title}
                        />
                    </li>
                );
            })}
        </ul>
        <button>Ver mais</button>
    </aside>
  )
}
