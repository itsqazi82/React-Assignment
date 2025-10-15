// src/components/Sidebar.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Dashboard</h2>
      </div>
      <nav className="sidebar-nav">
        <Link 
          to="/dashboard" 
          className={location.pathname === '/dashboard' ? 'nav-link active' : 'nav-link'}
        >
          🏠 Dashboard
        </Link>
        <Link 
          to="/products" 
          className={location.pathname.startsWith('/products') ? 'nav-link active' : 'nav-link'}
        >
          📦 Products
        </Link>
        <Link 
          to="/users" 
          className={location.pathname.startsWith('/users') ? 'nav-link active' : 'nav-link'}
        >
          👥 Users
        </Link>
        <Link 
          to="/github" 
          className={location.pathname === '/github' ? 'nav-link active' : 'nav-link'}
        >
          🔍 GitHub Users
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;