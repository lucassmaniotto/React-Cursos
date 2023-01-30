import styles from './Banner.module.css'

export default function Banner({image}) {
  return (
    <div 
        className={styles.cover}
        style={{ backgroundImage : `url(/assets/images/banner-${image}.png` }}
    >
    </div>
  )
}
