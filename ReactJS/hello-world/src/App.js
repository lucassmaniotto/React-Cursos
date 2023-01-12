import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutMe from "./pages/AboutMe";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path='*' element={<h1>404 - Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;