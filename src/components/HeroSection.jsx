import React from 'react';

const HeroSection = ({ heroTyping, currentRole }) => {
  return (
    <section id="home" className="min-vh-100 d-flex align-items-center" style={{paddingTop: '120px'}}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 text-center mb-4 mb-lg-0 order-1 order-lg-1">
            <img src="/assets/profile-pic.jpeg" alt="Satvic" className="hero-image" />
          </div>
          <div className="col-lg-6 col-md-12 order-2 order-lg-2">
            <h1 className="display-4 fw-bold mb-3">
              Hello! I am <span className="text-primary">Satvic</span>
            </h1>
            <h2 className="mb-4" style={{fontSize: '2rem', fontWeight: 'bold'}}>
              I am a {currentRole}<span className="hero-cursor text-primary">|</span>
            </h2>
            <p className="lead mb-4">
              Passionate about creating innovative solutions and building amazing web experiences. 
              Let's turn ideas into reality!
            </p>
            <button className="btn download-cv" onClick={() => {
              const link = document.createElement('a');
              link.href = '/SouravResume.pdf';
              link.download = 'SouravResume.pdf'; 
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
