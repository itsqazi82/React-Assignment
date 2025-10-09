import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { path: '/', label: 'Home' },
    { path: '/traditional-wear', label: 'Traditional Wear' },
    { path: '/western-wear', label: 'Western Wear' },
    { path: '/deals', label: 'Deals' }
  ];

  const categories = [
    'Swim & Beachwear',
    'Winter & Seasonal Wear',
    'Beauty & Grooming',
    'Jewellery',
    'Personal Care Appliances',
    'International Brands',
    'Foot Wear',
    'Watches',
    'Accessories'
  ];

  return (
    <div className="sidebar">
      <h2>Categories</h2>
      <ul>
        {menuItems.map((item) => (
          <li
            key={item.path}
            onClick={() => navigate(item.path)}
            style={{
              background: location.pathname === item.path ? '#667eea' : 'transparent',
              color: location.pathname === item.path ? 'white' : '#555'
            }}
          >
            {item.label}
          </li>
        ))}
      </ul>
      
      <h2 style={{ marginTop: '2rem' }}>Western Wear</h2>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;