import React from 'react'
import facebook from './facebook.svg'
import twitter from "./twitter.svg";
import instagram from "./instagram.svg";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__icons}>
        <a href="https://github.com/lucassmaniotto" className={styles.footer__icon}><img src={facebook} alt="Ícone do Facebook" /></a>
        <a href="https://github.com/lucassmaniotto" className={styles.footer__icon}><img src={twitter} alt="Ícone do Twitter" /></a>
        <a href="https://github.com/lucassmaniotto" className={styles.footer__icon}><img src={instagram} alt="Ícone do Instagram" /></a>
      </div>
      <p>Desenvolvido no <a href="https://github.com/lucassmaniotto">mim</a> no curso da<a href="https://cursos.alura.com.br/course/react-javascript-arquivos-estaticos"> Alura</a> 😃</p>
    </footer>
  )
}
