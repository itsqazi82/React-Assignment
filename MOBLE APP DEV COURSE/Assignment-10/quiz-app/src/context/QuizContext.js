import React, { createContext, useContext, useState } from 'react';

const QuizContext = createContext();

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
};

export const QuizProvider = ({ children }) => {
  const [userAnswers, setUserAnswers] = useState([]);
  const [quizData, setQuizData] = useState(null);
  const [userInfo, setUserInfo] = useState({ name: '', email: '' });
  const [startTime, setStartTime] = useState(null);

  const startQuiz = (topic, userData) => {
    setUserInfo(userData);
    setStartTime(new Date());
    setUserAnswers([]);
    
    // Load quiz data based on topic
    const data = quizTopics.find(t => t.id === topic);
    setQuizData(data);
  };

  const submitAnswer = (questionId, answer, questionIndex) => {
    setUserAnswers(prev => {
      const newAnswers = [...prev];
      newAnswers[questionIndex] = {
        questionId,
        answer,
        timestamp: new Date()
      };
      return newAnswers;
    });
  };

  const calculateResults = () => {
    if (!quizData) return null;

    let correct = 0;
    const results = quizData.questions.map((question, index) => {
      const userAnswer = userAnswers[index];
      const isCorrect = userAnswer && userAnswer.answer === question.correctAnswer;
      if (isCorrect) correct++;
      
      return {
        ...question,
        userAnswer: userAnswer ? userAnswer.answer : null,
        isCorrect,
        questionNumber: index + 1
      };
    });

    const score = (correct / quizData.questions.length) * 100;
    const endTime = new Date();
    const timeTaken = Math.round((endTime - startTime) / 1000);

    return {
      userInfo,
      score: Math.round(score),
      correctAnswers: correct,
      totalQuestions: quizData.questions.length,
      timeTaken,
      results,
      topic: quizData.name
    };
  };

  const resetQuiz = () => {
    setUserAnswers([]);
    setQuizData(null);
    setUserInfo({ name: '', email: '' });
    setStartTime(null);
  };

  return (
    <QuizContext.Provider value={{
      userAnswers,
      quizData,
      userInfo,
      startQuiz,
      submitAnswer,
      calculateResults,
      resetQuiz
    }}>
      {children}
    </QuizContext.Provider>
  );
};

// Quiz data
export const quizTopics = [
  {
    id: 'javascript',
    name: 'JavaScript Fundamentals',
    description: 'Test your JavaScript knowledge',
    duration: 300, // 5 minutes
    questions: [
      {
        id: 1,
        question: 'What is the output of: console.log(typeof null)?',
        options: ['"null"', '"object"', '"undefined"', '"boolean"'],
        correctAnswer: '"object"'
      },
      {
        id: 2,
        question: 'Which method is used to add an element to the end of an array?',
        options: ['push()', 'pop()', 'shift()', 'unshift()'],
        correctAnswer: 'push()'
      },
      {
        id: 3,
        question: 'What does the "===" operator do?',
        options: [
          'Compares values only',
          'Compares values and types',
          'Assigns a value',
          'Checks for null'
        ],
        correctAnswer: 'Compares values and types'
      },
      {
        id: 4,
        question: 'Which keyword is used to declare a constant in JavaScript?',
        options: ['let', 'var', 'const', 'constant'],
        correctAnswer: 'const'
      },
      {
        id: 5,
        question: 'What is a closure in JavaScript?',
        options: [
          'A function that has access to its outer scope',
          'A way to close a program',
          'A type of loop',
          'A method for array iteration'
        ],
        correctAnswer: 'A function that has access to its outer scope'
      }
    ]
  },
  {
    id: 'react',
    name: 'React.js',
    description: 'Test your React knowledge',
    duration: 300,
    questions: [
      {
        id: 1,
        question: 'What is JSX?',
        options: [
          'JavaScript XML',
          'Java Syntax Extension',
          'JavaScript Extension',
          'Java XML'
        ],
        correctAnswer: 'JavaScript XML'
      },
      {
        id: 2,
        question: 'Which hook is used for side effects in functional components?',
        options: ['useState', 'useEffect', 'useContext', 'useReducer'],
        correctAnswer: 'useEffect'
      },
      {
        id: 3,
        question: 'What is the purpose of keys in React lists?',
        options: [
          'To improve performance',
          'To add styling',
          'To handle events',
          'To create routes'
        ],
        correctAnswer: 'To improve performance'
      },
      {
        id: 4,
        question: 'Which method is called after a component is rendered?',
        options: [
          'componentDidMount',
          'componentWillMount',
          'componentRendered',
          'componentUpdated'
        ],
        correctAnswer: 'componentDidMount'
      },
      {
        id: 5,
        question: 'What is Virtual DOM?',
        options: [
          'A lightweight copy of the real DOM',
          'A new type of DOM',
          'A browser feature',
          'A React component'
        ],
        correctAnswer: 'A lightweight copy of the real DOM'
      }
    ]
  }
];