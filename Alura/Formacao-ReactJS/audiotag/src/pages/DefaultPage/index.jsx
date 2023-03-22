import Container from "components/Container";
import Footer from "components/Footer";
import Header from "components/Header";

import FavoritesProvider from "context/Favorites";

import { Outlet } from "react-router-dom";

export default function DefaultPage() {
  return (
    <main>
        <Header />
        <FavoritesProvider>
            <Container>
                <Outlet />
            </Container>
        </FavoritesProvider>
        <Footer />
    </main>
  )
}
