import Favorites from 'pages/Favorites';
import Home from 'pages/Home';
import Player from 'pages/Player';
import NotFound from 'pages/NotFound';
import DefaultPage from 'pages/DefaultPage';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function AppRoutes() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultPage />}>
            <Route index element={<Home />} />
            <Route path="favorites" element={<Favorites />} />
            <Route path="videos/:id" element={<Player />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
}