import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuiz, quizTopics } from '../context/QuizContext';
import './Home.css';

const Home = () => {
  const [userData, setUserData] = useState({ name: '', email: '' });
  const [selectedTopic, setSelectedTopic] = useState('');
  const { startQuiz } = useQuiz();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedTopic && userData.name && userData.email) {
      startQuiz(selectedTopic, userData);
      navigate(`/quiz/${selectedTopic}`);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="home-container">
      <div className="home-card">
        <div className="home-header">
          <h1>🎯 Quiz Master</h1>
          <p>Test your knowledge with our interactive quizzes</p>
        </div>

        <form onSubmit={handleSubmit} className="quiz-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={userData.name}
              onChange={handleInputChange}
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={userData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="topic">Select Quiz Topic</label>
            <select
              id="topic"
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value)}
              required
            >
              <option value="">Choose a topic...</option>
              {quizTopics.map(topic => (
                <option key={topic.id} value={topic.id}>
                  {topic.name}
                </option>
              ))}
            </select>
          </div>

          {selectedTopic && (
            <div className="topic-info">
              <h3>{quizTopics.find(t => t.id === selectedTopic)?.name}</h3>
              <p>{quizTopics.find(t => t.id === selectedTopic)?.description}</p>
              <p><strong>Duration:</strong> {quizTopics.find(t => t.id === selectedTopic)?.duration / 60} minutes</p>
              <p><strong>Questions:</strong> {quizTopics.find(t => t.id === selectedTopic)?.questions.length}</p>
            </div>
          )}

          <button type="submit" className="start-btn">
            Start Quiz 🚀
          </button>
        </form>

        <div className="features">
          <h3>Features:</h3>
          <div className="feature-grid">
            <div className="feature-item">
              <span>⏱️</span>
              <p>Timed Quizzes</p>
            </div>
            <div className="feature-item">
              <span>📊</span>
              <p>Detailed Results</p>
            </div>
            <div className="feature-item">
              <span>🎯</span>
              <p>Multiple Topics</p>
            </div>
            <div className="feature-item">
              <span>📱</span>
              <p>Responsive Design</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;