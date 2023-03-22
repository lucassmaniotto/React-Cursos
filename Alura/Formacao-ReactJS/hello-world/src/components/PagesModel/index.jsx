import styles from './PagesModel.module.css';

export default function PagesModel({ children, photoCover, title }) {
  return (
    <article className={styles.pageModelContainer}>
      <div 
        className={styles.photoCover}
        style={{ backgroundImage: `url(${photoCover})` }}
      />
      <h2 className={styles.title}>
        {title}
      </h2>
      <div className={styles.pageContentContainer}>
        {children}
      </div>
    </article>
  )
}
