import React from 'react'
import open from './open.png'
import favorite from './favorite.png'

export default function Cards({photos, styles}) {
  return (
    <ul className={styles.gallery__cards}>
        {photos.map((photo) => {
            return(
                <li key={photo.id} className={styles.gallery__card}>
                    <img 
                        className={styles.gallery__img}
                        src={photo.image}
                        alt={photo.title}
                    />
                    <div>
                        <div>
                            <h3>{photo.title}</h3>
                            <p>{photo.credits}</p>
                        </div>
                        <span>
                            <img src={favorite} alt='Ícone coração de curtir' />
                            <img src={open} alt='Ícone de abrir modal' />
                        </span>
                    </div>
                </li>
            );
        })}
    </ul>
  );
}
