import styles from './MainButton.module.css';

export default function MainButton({ children, size }) {
  return (
    <button className={`
      ${styles.mainButton}
      ${styles[size]}
    `}>
      {children}
    </button>
  )
}
