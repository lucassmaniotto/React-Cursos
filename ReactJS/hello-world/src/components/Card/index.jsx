import styles from './Card.module.css';

export default function Card({ post }) {
  return (
    <div className={styles.card}>
        <img
            className={styles.cover}
            src={`/assets/image/posts/${post.id}/cover.png`}
            alt={post.title}
        />
        <h2 className={styles.title}>{post.title}</h2>
        <button className={styles.buttonSee}>Ver projeto</button>
    </div>
  )
}