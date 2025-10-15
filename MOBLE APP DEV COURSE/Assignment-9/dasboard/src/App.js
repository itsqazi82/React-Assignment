// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products/Products';
import ProductDetail from './pages/Products/ProductDetail';
import Users from './pages/Users/Users';
import UserDetail from './pages/Users/UserDetail';
import GitHubUsers from './pages/GitHub/GitHubUsers';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:productId" element={<ProductDetail />} />
            <Route path="/users" element={<Users />} />
            <Route path="/users/:userId" element={<UserDetail />} />
            <Route path="/github" element={<GitHubUsers />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;