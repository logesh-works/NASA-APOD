import React from 'react';
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
    <a href="https://github.com/logesh-works" rel="noreferrer" target="_blank">GitHub</a>
    <a href="https://www.linkedin.com/in/cl-me-logesh007" rel="noreferrer" target="_blank">LinkedIn</a>
    <a href="https://telegram.me/cl_me_logesh" rel="noreferrer" target="_blank">Telegram</a>
    <a href="mailto:logesh007kg@gmail.com" rel="noreferrer">Email</a>
  </div>
      </footer>
    </div>
  );
};
export default App

