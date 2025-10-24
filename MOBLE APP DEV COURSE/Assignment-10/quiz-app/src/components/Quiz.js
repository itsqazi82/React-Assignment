import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuiz } from '../context/QuizContext';
import './Quiz.css';

const Quiz = () => {
  const { topic } = useParams();
  const { quizData, submitAnswer, userAnswers } = useQuiz();
  const navigate = useNavigate();
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timeLeft, setTimeLeft] = useState(quizData?.duration || 300);
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    if (!quizData) {
      navigate('/');
      return;
    }

    // Timer
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmitQuiz();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [quizData, navigate]);

  // Load previously selected answer
  useEffect(() => {
    if (userAnswers[currentQuestion]) {
      setSelectedOption(userAnswers[currentQuestion].answer);
    } else {
      setSelectedOption('');
    }
  }, [currentQuestion, userAnswers]);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    submitAnswer(quizData.questions[currentQuestion].id, option, currentQuestion);
  };

  const handleNext = () => {
    if (currentQuestion < quizData.questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      handleSubmitQuiz();
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const handleSubmitQuiz = () => {
    navigate('/results');
  };

  if (!quizData) {
    return <div>Loading...</div>;
  }

  const question = quizData.questions[currentQuestion];
  const progress = ((currentQuestion + 1) / quizData.questions.length) * 100;

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <div className="quiz-info">
          <h1>{quizData.name}</h1>
          <div className="quiz-meta">
            <span>Question {currentQuestion + 1} of {quizData.questions.length}</span>
            <span className="timer">⏱️ {formatTime(timeLeft)}</span>
          </div>
        </div>
        
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <div className="question-card">
        <div className="question-header">
          <h2>Question {currentQuestion + 1}</h2>
          <div className="question-number">
            {currentQuestion + 1}/{quizData.questions.length}
          </div>
        </div>
        
        <div className="question-text">
          <p>{question.question}</p>
        </div>

        <div className="options-container">
          {question.options.map((option, index) => (
            <div
              key={index}
              className={`option-card ${
                selectedOption === option ? 'selected' : ''
              }`}
              onClick={() => handleOptionSelect(option)}
            >
              <div className="option-marker">
                {String.fromCharCode(65 + index)}
              </div>
              <div className="option-text">{option}</div>
            </div>
          ))}
        </div>

        <div className="navigation-buttons">
          <button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="nav-btn prev-btn"
          >
            ← Previous
          </button>
          
          <button
            onClick={handleNext}
            className="nav-btn next-btn"
          >
            {currentQuestion === quizData.questions.length - 1 ? 'Submit Quiz' : 'Next →'}
          </button>
        </div>
      </div>

      <div className="question-indicators">
        {quizData.questions.map((_, index) => (
          <div
            key={index}
            className={`indicator ${
              index === currentQuestion ? 'active' : 
              userAnswers[index] ? 'answered' : 'unanswered'
            }`}
            onClick={() => setCurrentQuestion(index)}
          >
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quiz;