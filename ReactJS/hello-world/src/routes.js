import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import AboutMe from "./pages/AboutMe";
import Home from "./pages/Home";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path='*' element={<h1>404 - Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;