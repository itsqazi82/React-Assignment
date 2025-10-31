import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  increment, 
  decrement, 
  incrementByAmount, 
  reset,
  selectCount 
} from './counterSlice';

const Counter = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Redux Counter App</h1>
      
      <div style={{ margin: '20px 0' }}>
        <span style={{ 
          fontSize: '48px', 
          fontWeight: 'bold',
          color: '#333'
        }}>
          {count}
        </span>
      </div>

      <div style={{ margin: '10px 0' }}>
        <button 
          onClick={() => dispatch(increment())}
          style={buttonStyle}
        >
          +
        </button>
        
        <button 
          onClick={() => dispatch(decrement())}
          style={buttonStyle}
        >
          -
        </button>
      </div>

      <div style={{ margin: '10px 0' }}>
        <button 
          onClick={() => dispatch(reset())}
          style={{...buttonStyle, backgroundColor: '#ff6b6b'}}
        >
          Reset
        </button>
      </div>

      <div style={{ margin: '20px 0' }}>
        <input
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
          style={{
            padding: '8px',
            fontSize: '16px',
            width: '60px',
            textAlign: 'center',
            marginRight: '10px'
          }}
        />
        <button 
          onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}
          style={buttonStyle}
        >
          Add Amount
        </button>
      </div>
    </div>
  );
};

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '18px',
  margin: '0 5px',
  backgroundColor: '#4CAF50',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default Counter;