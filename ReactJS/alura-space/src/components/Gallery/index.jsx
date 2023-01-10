import { useState } from 'react';
import Tags from '../Tags';
import styles from './Gallery.module.scss';
import Cards from './Cards';
import photos from './photos.json';

export default function Gallery() {
  const [itens, setItens] = useState(photos);
  const tags = [...new Set(photos.map((value) => value.tag))];

  const filterPhotos = (tag) => {
    const filteredPhotos = photos.filter((value) => {
      return value.tag === tag; 
    });

    setItens(filteredPhotos);
  };

  return (
    <section className={styles.gallery}>
        <h2>Navegue pela Galeria</h2>
        <Tags 
          tags={tags}
          filterPhotos={filterPhotos}
          setItens={setItens}
        />
        <Cards 
            photos={itens}
            styles={styles}
        />
    </section>
  );
}