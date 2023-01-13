import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import Footer from 'components/Footer';
import AboutMe from "./pages/AboutMe";
import Home from "./pages/Home";
import DefaultPage from 'components/DefaultPage';
import Projects from 'pages/Projects';
import NotFound from 'pages/NotFound';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<DefaultPage />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutMe />} />
        </Route>
        <Route path="projects/:id" element={<Projects />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;