import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(localStorage.getItem('count') || 0);
  const setChange = () => {
    localStorage.setItem('count', count + 1);
    setCount(count + 1);
  };
  return (
    <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
    }}
    >
      <h1>Hello World</h1>
      <button onClick={() => setChange()}>Click me</button>
      <p>Count: {count}</p>
    </div>
  );
}

export default App;