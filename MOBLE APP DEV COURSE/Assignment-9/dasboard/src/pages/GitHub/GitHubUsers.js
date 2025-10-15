// src/pages/GitHub/GitHubUsers.js
import React, { useState } from 'react';
import UserCard from '../../components/UserCard';

const GitHubUsers = () => {
  const [username, setUsername] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const searchUsers = async (e) => {
    e.preventDefault();
    if (!username.trim()) return;

    setLoading(true);
    setError('');

    try {
      const response = await fetch(`https://api.github.com/search/users?q=${username}`);
      const data = await response.json();
      
      if (data.items) {
        // Fetch detailed information for each user
        const detailedUsers = await Promise.all(
          data.items.slice(0, 10).map(async (user) => {
            const userResponse = await fetch(user.url);
            return userResponse.json();
          })
        );
        setUsers(detailedUsers);
      } else {
        setUsers([]);
      }
    } catch (err) {
      setError('Failed to fetch users');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <h1>GitHub User Finder</h1>
      
      <form onSubmit={searchUsers} className="search-form">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username..."
          className="search-input"
        />
        <button type="submit" disabled={loading} className="search-button">
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>

      {error && <div className="error">{error}</div>}

      <div className="github-users-grid">
        {users.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>

      {users.length === 0 && !loading && username && (
        <div className="no-results">No users found</div>
      )}
    </div>
  );
};

export default GitHubUsers;