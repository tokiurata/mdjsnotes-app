import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  return <h1>JBOOK APP</h1>
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <App />
);
