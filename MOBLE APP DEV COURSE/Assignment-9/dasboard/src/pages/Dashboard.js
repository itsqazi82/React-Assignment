// src/pages/Dashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();

  const dashboardCards = [
    {
      title: 'Products',
      description: 'Manage your product catalog',
      icon: '📦',
      path: '/products',
      color: '#4CAF50'
    },
    {
      title: 'Users',
      description: 'View and manage users',
      icon: '👥',
      path: '/users',
      color: '#2196F3'
    },
    {
      title: 'GitHub Users',
      description: 'Search GitHub users',
      icon: '🔍',
      path: '/github',
      color: '#FF9800'
    }
  ];

  return (
    <div className="dashboard">
      <h1>Welcome to Dashboard</h1>
      <p>Select a section to explore</p>
      
      <div className="dashboard-grid">
        {dashboardCards.map((card, index) => (
          <div 
            key={index}
            className="dashboard-card"
            style={{ borderTop: `4px solid ${card.color}` }}
            onClick={() => navigate(card.path)}
          >
            <div className="card-icon">{card.icon}</div>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <button className="card-button">Explore →</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;