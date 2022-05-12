import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import MatchPage from './MatchPage';

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/MatchPage" element={<MatchPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
