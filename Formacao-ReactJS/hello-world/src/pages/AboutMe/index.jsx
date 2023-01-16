import styles from "./AboutMe.module.css";
import PagesModel from "components/PagesModel";
import photoCover from "assets/about_me_cover.jpg";
import photoAboutMe from "assets/about_me_photo.jpg";

export default function AboutMe() {
  return (
    <main>
      <PagesModel
        photoCover={photoCover}
        title="Sobre mim"
      >
        <h3 className={styles.subtitle}>Olá, eu sou o Lucas :)</h3>
        <img 
          src={photoAboutMe}
          alt="Foto de Lucas Smaniotto Schuch"
          className={styles.photoAboutMe}
        />
        <p className={styles.paragraph}>
          Como Obi-Wan Kenobi diria, hello there! Sou estudante de programação em formação, apaixonado por tecnologia e muito interessado em assuntos relacionados a programação Front-end, Back-end e UX & Design. Sempre busco o aperfeiçoamento e o estudo das várias áreas da Computação.
        </p>
        <p className={styles.paragraph}>
          Começei a programar em 2015 em aulas de robótica no meu colégio de ensino médio com Lego Mindstorms e Arduino até 2017 quando me formei. Desde então, decidi me aprofundar mais na área e resolvi cursar Ciência da Computação, onde estou atualmente no 3º semestre do curso da <a className={styles.ancor} href="https://cc.uffs.edu.br/">Universidade Federal da Fronteira Sul (UFFS)</a> em Chapecó/SC. Também em meu tempo livre gosto muito de estudar sobre programação e sempre que posso estou fazendo um curso novo da área, seja em plataformas como <a className={styles.ancor} href="https://www.udemy.com/">Udemy</a>, <a className={styles.ancor} href="https://www.alura.com.br/">Alura</a> ou <a className={styles.ancor} href="https://www.coursera.org/">Coursera</a>.
        </p>
        <p className={styles.paragraph}>
          Atualmente estou focado em desenvolvimento Front-end com ReactJS, mas também tenho conhecimento em Back-end com NodeJS. Além disso, tenho conhecimentos nas linguagens C, Java, Python e JavaScript, e conhecimentos em HTML, CSS e SQL. Em breve pretendo me aprofundar mais em UX & Design e também em Back-end, ja possuindo alguns conhecimentos básicos dos dois, como por exemplo, as ferramentas de edição e o Figma, além do uso de API's e bancos de dados relacionais e não relacionais.
        </p>
        <p className={styles.paragraph}>
          Além de programar, gosto muito de jogar videogame, principalmente jogos de RPG, como The Witcher, Skyrim, Cyberpunk 2077 e entre outros, além de ser apaixonado por RPG's de mesa, sejam eles Dungeons & Dragons, Call of Cthulhu, Cyberpunk 2020 e RED, ou Ordem Paranormal. Uma das coisas que me fizeram um grande fã de RPG foi a trilogia O Senhor dos Anéis, sendo essa os meus livros favoritos. Amo assistir séries e filmes clássicos, desde (minha paixãozinha) Star Wars, Blade Runner, Matrix e séries como Friends, The Office e The Mandalorian, até desenhos que vão de Cyberpunk Edgerunners até Ursos Sem Curso. Falando em animações, amo todas as obras do Studio Ghibli e Into The Spiderverse. Confesso que possuo uma paixão fervorosa por música e sou viciado em criar playlists o tempo todo no meu spotify, me considerando um grande fã de alt-rock, metal, punk, indie e música brasileira. (Se quiser me seguir no spotify, meu perfil é <a className={styles.ancor} href="https://open.spotify.com/user/22gktbankxa4r3eaxarfxdzgi">Lucas Smaniotto</a>)
        </p>
        <p className={styles.paragraph}>
          Se você chegou até aqui, obrigado por ler e querer me conhecer um pouquinho! Espero que tenha gostado do meu site e que possamos nos conhecer melhor. Se quiser entrar em contato comigo, pode me mandar um e-mail em <a className={styles.ancor} href="mailto:lucas91755@gmail.com">lucas91755@gmail.com</a>. Aproveite sua estadia por aqui e volte sempre! :D
        </p>
      </PagesModel>
    </main>
  )
}