import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Hello World</h1>
      <p>This is a minimal React app to test if the basic setup works.</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);