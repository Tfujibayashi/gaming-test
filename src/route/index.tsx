import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Battle } from '~/components/pages';

const Routing: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Battle />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
