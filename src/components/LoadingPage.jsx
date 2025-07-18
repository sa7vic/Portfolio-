import React from 'react';

const LoadingPage = ({ typingText }) => {
  return (
    <div className="loading-container d-flex flex-column justify-content-center align-items-center min-vh-100">
      <div className="loading-content text-center">
        <div className="loading-text-wrapper mb-4">
          <span className="loading-text">{typingText}</span>
          <span className="loading-cursor">|</span>
        </div>
        <div className="loading-bar-container">
          <div className="loading-bar"></div>
        </div>
      </div>
      <div className="stars"></div>
      <div className="stars2"></div>
      <div className="stars3"></div>
    </div>
  );
};

export default LoadingPage;