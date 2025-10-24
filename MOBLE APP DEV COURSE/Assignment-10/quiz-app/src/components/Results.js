import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuiz } from '../context/QuizContext';
import './Results.css';

const Results = () => {
  const { calculateResults, resetQuiz, userInfo } = useQuiz();
  const navigate = useNavigate();
  
  const results = calculateResults();

  const handleRetake = () => {
    resetQuiz();
    navigate('/');
  };

  const handleNewQuiz = () => {
    resetQuiz();
    navigate('/');
  };

  if (!results) {
    return (
      <div className="results-container">
        <div className="error-message">
          <h2>No Results Found</h2>
          <p>Please complete a quiz first.</p>
          <button onClick={() => navigate('/')} className="home-btn">
            Go Home
          </button>
        </div>
      </div>
    );
  }

  const getScoreColor = (score) => {
    if (score >= 80) return '#4CAF50';
    if (score >= 60) return '#FF9800';
    return '#F44336';
  };

  const getScoreMessage = (score) => {
    if (score >= 90) return 'Excellent! 🎉';
    if (score >= 80) return 'Great Job! 👍';
    if (score >= 70) return 'Good Work! 👏';
    if (score >= 60) return 'Not Bad! 😊';
    return 'Keep Practicing! 💪';
  };

  return (
    <div className="results-container">
      <div className="results-card">
        <div className="results-header">
          <h1>Quiz Results</h1>
          <div className="user-info">
            <p><strong>Name:</strong> {results.userInfo.name}</p>
            <p><strong>Email:</strong> {results.userInfo.email}</p>
            <p><strong>Topic:</strong> {results.topic}</p>
          </div>
        </div>

        <div className="score-section">
          <div 
            className="score-circle"
            style={{ 
              background: `conic-gradient(${getScoreColor(results.score)} ${results.score * 3.6}deg, #e0e0e0 0deg)` 
            }}
          >
            <div className="score-inner">
              <span className="score-percent">{results.score}%</span>
            </div>
          </div>
          <div className="score-details">
            <h2>{getScoreMessage(results.score)}</h2>
            <p>You scored {results.correctAnswers} out of {results.totalQuestions} questions correctly</p>
            <div className="stats">
              <div className="stat">
                <span className="stat-value">{results.correctAnswers}</span>
                <span className="stat-label">Correct</span>
              </div>
              <div className="stat">
                <span className="stat-value">{results.totalQuestions - results.correctAnswers}</span>
                <span className="stat-label">Incorrect</span>
              </div>
              <div className="stat">
                <span className="stat-value">{Math.round(results.timeTaken / 60)}m</span>
                <span className="stat-label">Time</span>
              </div>
            </div>
          </div>
        </div>

        <div className="detailed-results">
          <h3>Detailed Breakdown</h3>
          <div className="questions-list">
            {results.results.map((result, index) => (
              <div key={index} className="question-result">
                <div className="question-header">
                  <span className="question-number">Q{result.questionNumber}</span>
                  <span className={`status ${result.isCorrect ? 'correct' : 'incorrect'}`}>
                    {result.isCorrect ? '✓ Correct' : '✗ Incorrect'}
                  </span>
                </div>
                <p className="question-text">{result.question}</p>
                <div className="answer-comparison">
                  <div className="answer-row">
                    <span className="label">Your Answer:</span>
                    <span className={`answer ${result.isCorrect ? 'correct' : 'incorrect'}`}>
                      {result.userAnswer || 'Not answered'}
                    </span>
                  </div>
                  {!result.isCorrect && (
                    <div className="answer-row">
                      <span className="label">Correct Answer:</span>
                      <span className="answer correct">{result.correctAnswer}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="action-buttons">
          <button onClick={handleRetake} className="btn retake-btn">
            Retake This Quiz
          </button>
          <button onClick={handleNewQuiz} className="btn new-quiz-btn">
            Take New Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default Results;