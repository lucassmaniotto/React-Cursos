import Banner from 'components/Banner';
import Card from 'components/Card';
import Title from 'components/Title';

import { useFavoriteContext } from 'context/Favorites';

import styles from './Favorites.module.css';

export default function Favorites() {

  const { favorite } = useFavoriteContext();
    return (
      <>
        <Banner image="favorites" />
        <Title>
          <h1>Meus Favoritos</h1>
        </Title>
        <section className={styles.container}>
          {favorite.length > 0 ? (favorite.map((fav) => {return <Card {...fav} key={fav.id} />})) : (<p className={styles.empty}>Nenhuma banda foi adicionada!<h1>¯\_(ツ)_/¯</h1></p>)}
        </section>
      </>
    )
  }
