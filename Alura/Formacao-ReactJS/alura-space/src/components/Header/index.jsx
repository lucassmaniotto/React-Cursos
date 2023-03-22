import { ReactComponent as Logo } from './Logo.svg';
import { ReactComponent as SearchIcon } from './Search.svg';
import styles from './Header.module.scss'

export default function Header() {
    return (
        <header className={styles.header}>
            <Logo />
            <div className={styles.header__container}>
                <input type="text" placeholder="O que você procura?" className={styles.header__input}/>
                <SearchIcon />
            </div>
        </header>
    );
}