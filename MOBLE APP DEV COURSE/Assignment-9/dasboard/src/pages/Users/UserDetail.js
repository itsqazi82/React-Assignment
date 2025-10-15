// src/pages/Users/UserDetail.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const UserDetail = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const data = await response.json();
        setUser(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user:', error);
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  if (loading) {
    return <div className="loading">Loading user details...</div>;
  }

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className="page">
      <button onClick={() => navigate('/users')} className="back-button">
        ← Back to Users
      </button>
      <div className="user-detail">
        <div className="user-header">
          <div className="user-avatar large">
            {user.name.charAt(0)}
          </div>
          <div>
            <h1>{user.name}</h1>
            <p>@{user.username}</p>
          </div>
        </div>
        
        <div className="user-info-grid">
          <div className="info-section">
            <h3>Contact Information</h3>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Website:</strong> {user.website}</p>
          </div>
          
          <div className="info-section">
            <h3>Address</h3>
            <p>{user.address.street}, {user.address.suite}</p>
            <p>{user.address.city}, {user.address.zipcode}</p>
          </div>
          
          <div className="info-section">
            <h3>Company</h3>
            <p><strong>{user.company.name}</strong></p>
            <p>{user.company.catchPhrase}</p>
            <p>{user.company.bs}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;