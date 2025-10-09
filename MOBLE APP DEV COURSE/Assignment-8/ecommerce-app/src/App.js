import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import TraditionalWear from './pages/TraditionalWear';
import WesternWear from './pages/WesternWear';
import Deals from './pages/Deals';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="main-container">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/traditional-wear" element={<TraditionalWear />} />
            <Route path="/western-wear" element={<WesternWear />} />
            <Route path="/deals" element={<Deals />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;