// src/components/UserCard.js
import React from 'react';

const UserCard = ({ user }) => {
  return (
    <div className="github-user-card">
      <div className="github-user-avatar">
        <img src={user.avatar_url} alt={user.login} />
      </div>
      <div className="github-user-info">
        <h3>{user.name || user.login}</h3>
        <p>@{user.login}</p>
        {user.bio && <p className="bio">{user.bio}</p>}
        <div className="user-stats">
          <span>📊 Followers: {user.followers}</span>
          <span>👥 Following: {user.following}</span>
          <span>📝 Repos: {user.public_repos}</span>
        </div>
        {user.location && <p>📍 {user.location}</p>}
        {user.blog && (
          <p>
            🌐 <a href={user.blog} target="_blank" rel="noopener noreferrer">Website</a>
          </p>
        )}
        <a 
          href={user.html_url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="github-link"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
};

export default UserCard;