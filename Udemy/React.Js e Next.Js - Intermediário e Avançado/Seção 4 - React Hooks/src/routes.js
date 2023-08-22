import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { DefaultPage } from './pages/DefaultPage';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { UseState } from './pages/UseState';
import { UseEffect } from './pages/UseEffect';
import { UseCallback } from './pages/UseCallback';
import { UseMemo } from './pages/UseMemo';
import { UseRef } from './pages/UseRef';

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultPage />}>
          <Route index element={<Home />} />
          <Route path="useState" element={<UseState />} />
          <Route path="useEffect" element={<UseEffect />} />
          <Route path="useCallback" element={<UseCallback />} />
          <Route path="useMemo" element={<UseMemo />} />
          <Route path="useRef" element={<UseRef />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
