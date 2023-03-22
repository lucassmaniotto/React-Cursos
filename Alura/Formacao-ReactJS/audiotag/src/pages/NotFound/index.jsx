import Banner from 'components/Banner';
import styles from './NotFound.module.css';

export default function NotFound() {
  return (
    <>
      <div className={styles.notFound}>
        <h2>404</h2>
        <h3>Ops! Página não encontrada.</h3>
      </div>
      <div className={styles.container}>
        <Banner image="404"/>
        <div className={styles.content}>
          <h1>¯\_(ツ)_/¯</h1>
          <p>Tem certeza de que era isso que você estava procurando?</p>
          <p>Aguarde uns instantes e recarregue a página ou volte para a página inicial</p>
        </div>
      </div>
    </>
    )
}
