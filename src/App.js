import React from 'react';
import ReactDOM from 'react-dom';
import Apod from './Compontens/Apod'; // Import your Apod component
import './index.css'; // Import global CSS styles
import './App.css'

const App = () => {
  return (
    <div>
      <Apod />
      <footer>
      <div class="social-links">
        Created By ~Logesh
    <a href="https://github.com/logesh-works" target="_blank">GitHub</a>
    <a href="https://www.linkedin.com/in/cl-me-logesh007" target="_blank">LinkedIn</a>
    <a href="https://telegram.me/cl_me_logesh" target="_blank">Telegram</a>
    <a href="mailto:logesh007kg@gmail.com">Email</a>
  </div>
      </footer>
    </div>
  );
};
export default App

