import MenuLink from '../MenuLink';
import styles from './Menu.module.css';

export default function Menu() {
  return (
    <header>
      <nav className={styles.nav}>
        <MenuLink to="/">Início</MenuLink>
        <MenuLink to="/about">Sobre mim</MenuLink>
      </nav>
    </header>
  )
}