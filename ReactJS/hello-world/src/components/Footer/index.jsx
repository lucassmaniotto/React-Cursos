import styles from './Footer.module.css';
import { AiOutlineTwitter, AiFillGithub, AiOutlineInstagram } from 'react-icons/ai';

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <p>Deselvolvido por <a href="https://github.com/lucassmaniotto" target="_blank" rel="noreferrer">mim mesmo</a> 😃</p>
        <div className={styles.socialLinks}>
            <a href="https://github.com/lucassmaniotto"><AiFillGithub size={25}/></a>
            <a href="https://www.instagram.com/corvus_tenebrae"><AiOutlineInstagram size={25}/></a>
            <a href="https://twitter.com/alpiste_punk"><AiOutlineTwitter size={25}/></a>
        </div>
    </footer>
  )
}
