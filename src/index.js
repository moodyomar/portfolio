import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Bubbles from './components/common/Bubbles'

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Bubbles/>
  </React.StrictMode>,
  document.getElementById('root')
);
