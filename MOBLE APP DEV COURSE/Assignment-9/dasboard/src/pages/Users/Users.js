// src/pages/Users/Users.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching users:', error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div className="loading">Loading users...</div>;
  }

  return (
    <div className="page">
      <h1>Users</h1>
      <div className="users-grid">
        {users.map(user => (
          <div 
            key={user.id} 
            className="user-card"
            onClick={() => navigate(`/users/${user.id}`)}
          >
            <div className="user-avatar">
              {user.name.charAt(0)}
            </div>
            <div className="user-info">
              <h3>{user.name}</h3>
              <p>@{user.username}</p>
              <p>📧 {user.email}</p>
              <p>🏢 {user.company.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;