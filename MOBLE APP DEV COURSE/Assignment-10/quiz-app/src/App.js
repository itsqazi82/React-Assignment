import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Results from './components/Results';
import { QuizProvider } from './context/QuizContext';

function App() {
  return (
    <QuizProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz/:topic" element={<Quiz />} />
            <Route path="/results" element={<Results />} />
          </Routes>
        </div>
      </Router>
    </QuizProvider>
  );
}

export default App;