import MainButton from 'components/MainButton';
import { Link } from 'react-router-dom';
import styles from './Card.module.css';

export default function Card({ post }) {
  return (
    <Link to={`/projects/${post.id}`}>
      <div className={styles.card}>
          <img
              className={styles.cover}
              src={`/assets/image/posts/${post.id}/cover.png`}
              alt={post.title}
          />
          <h2 className={styles.title}>{post.title}</h2>
          <MainButton>Ver projeto</MainButton>
      </div>
    </Link>
  )
}