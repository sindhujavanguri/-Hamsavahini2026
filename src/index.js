import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import schoolLogo from './Assets/images/School.jpeg';

document.title = 'Hamsavahini School';

const favicon = document.querySelector("link[rel='icon']") || document.createElement('link');
favicon.rel = 'icon';
favicon.type = 'image/png';
favicon.href = schoolLogo;
document.head.appendChild(favicon);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
