import React, { useState, useEffect } from 'react';

const DealTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 20,
    minutes: 45,
    seconds: 12
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        const { hours, minutes, seconds } = prevTime;
        
        if (seconds > 0) {
          return { ...prevTime, seconds: seconds - 1 };
        } else if (minutes > 0) {
          return { ...prevTime, minutes: minutes - 1, seconds: 59 };
        } else if (hours > 0) {
          return { hours: hours - 1, minutes: 59, seconds: 59 };
        } else {
          return { hours: 0, minutes: 0, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="timer">
      {String(timeLeft.hours).padStart(2, '0')} : 
      {String(timeLeft.minutes).padStart(2, '0')} : 
      {String(timeLeft.seconds).padStart(2, '0')} Left
    </div>
  );
};

export default DealTimer;