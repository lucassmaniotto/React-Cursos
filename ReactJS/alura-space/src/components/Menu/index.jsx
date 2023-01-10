import React from 'react'
import home from 'assets/icons/home-active.png'
import mostLiked from 'assets/icons/most-liked-inactive.png'
import mostViewed from 'assets/icons/most-viewed-inactive.png'
import newImages from 'assets/icons/new-inactive.png'
import surpriseMe from 'assets/icons/surprise-me-inactive.png'
import styles from './Menu.module.scss'

export default function Menu() {
  return (
    <nav className={styles.menu}>
        <ul className={styles.menu__list}>
            <li className={styles.menu__item}>
                <img src={home} alt="" />
                <a href="/">Início</a>
            </li>
            <li className={styles.menu__item}>
                <img src={mostLiked} alt="" />
                <a href="/">Mais curtidas</a>
            </li>
            <li className={styles.menu__item}>
                <img src={mostViewed} alt="" />
                <a href="/">Mais vistas</a>
            </li>
            <li className={styles.menu__item}>
                <img src={newImages} alt="" />
                <a href="/">Novas imagens</a>
            </li>
            <li className={styles.menu__item}>
                <img src={surpriseMe} alt="" />
                <a href="/">Surpreenda-me</a>
            </li>
        </ul>
    </nav>
  )
}