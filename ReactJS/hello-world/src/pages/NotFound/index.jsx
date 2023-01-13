import styles from './NotFound.module.css';
import error404 from 'assets/error_404.png';

export default function NotFound() {
  return (
    <>
        <div className={styles.contentContainer}>
            <span className={styles.text404}>404</span>
            <h1 className={styles.title}>Ops! Página não encontrada.</h1>
            <p className={styles.paragraph}>Tem certeza de que era isso que você estava procurando?</p>
            <p className={styles.paragraph}>Aguarde uns instantes e recarregue a página ou volte para a página inicial</p>
            <div className={styles.buttonContainer}>
                <button>Voltar</button>
            </div>
            <img className={styles.imageDog} src={error404} alt="Cachorro Salsicha mexendo no computador de óculos" />
        </div>    
        <div className={styles.blankSpace}></div>
    </>
  )
}
