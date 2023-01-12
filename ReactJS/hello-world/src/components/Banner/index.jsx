import styles from './Banner.module.css';
import coloredCircle from 'assets/colored_circle.png';

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.intro}>
        <h1 className={styles.title}>Olá Mundo!</h1>
        <p className={styles.paragraph}>Boas vindas ao meu espaço pessoal! Meu nome é Lucas Smaniotto, sou estudante de Ciência da Computação em formação, e é aqui que você poderá conhecer a mim e meus projetos. Espero que goste :)</p>
      </div>
      <div className={styles.images}>
        <img 
          className={styles.coloredCircle} 
          src={coloredCircle}
          aria-hidden="true"
          alt="Círculo colorido atrás da foto"
          />
        <img 
          className={styles.myPhoto}
          src="https://github.com/lucassmaniotto.png"
          alt="Foto de Lucas Smaniotto sorrindo"
        />
      </div>
    </div>
  )
}
