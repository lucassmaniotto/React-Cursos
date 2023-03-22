import styles from './NotFound.module.css';
import error404 from 'assets/error_404.png';
import MainButton from 'components/MainButton';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
    const navegate = useNavigate();

    return (
        <>
            <div className={styles.contentContainer}>
                <span className={styles.text404}>404</span>
                <h1 className={styles.title}>Ops! Página não encontrada.</h1>
                <p className={styles.paragraph}>Tem certeza de que era isso que você estava procurando?</p>
                <p className={styles.paragraph}>Aguarde uns instantes e recarregue a página ou volte para a página inicial</p>
                <div 
                    className={styles.buttonContainer}
                    onClick={() => navegate(-1)}
                >
                    <MainButton
                        size={'lg'}
                    >
                        Voltar
                    </MainButton>
                </div>
                <img 
                    className={styles.imageDog} 
                    src={error404} 
                    alt="Cachorro Salsicha mexendo no computador de óculos" 
                />
            </div>    
            <div className={styles.blankSpace}></div>
        </>
    )
}
