import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Gallery from "../../components/Gallery";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import Populars from "../../components/Populars";
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
        <div className={styles.gallery}>
          <Gallery />
          <Populars />
        </div>
        </main>
        <Footer />
    </>
  );
}