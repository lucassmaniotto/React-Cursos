import Banner from "../../components/Banner";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import styles from "./HomePage.module.scss";

export default function HomePage() {
  return (
    <>
        <Header />
        <main>
          <section className={styles.main}>
            <Menu />
            <Banner />
          </section>
        </main>
    </>
  );
}