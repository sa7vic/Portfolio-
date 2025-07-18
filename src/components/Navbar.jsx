import React from 'react';

const Navbar = ({ darkMode, toggleTheme }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-glass fixed-top">
      <div className="container">
        <a className="navbar-brand fw-bold text-primary d-flex align-items-center" href="#home">
          <i className="fas fa-code me-2"></i>Satvic
        </a>
        
        <div className="d-flex align-items-center order-lg-3">
          <button className="theme-toggle me-3" onClick={toggleTheme}>
            <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'}` } > </i>
          </button>
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" id="navbar-toggler"
          >
            <span className="navbar-toggler-icon-custom">
              <i className="fas fa-bars" id="hamburger-icon"></i>
              <i className="fas fa-times d-none" id="close-icon"></i>
            </span>
          </button>
        </div>

        <div className="collapse navbar-collapse order-lg-2" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link nav-link-hover rounded px-3 py-2 mx-1 text-white" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-hover rounded px-3 py-2 mx-1 text-white" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-hover rounded px-3 py-2 mx-1 text-white" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-hover rounded px-3 py-2 mx-1 text-white" href="#skills">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-hover rounded px-3 py-2 mx-1 text-white" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      
      <script dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('DOMContentLoaded', function() {
            const toggler = document.getElementById('navbar-toggler');
            const hamburger = document.getElementById('hamburger-icon');
            const close = document.getElementById('close-icon');
            const navbarCollapse = document.getElementById('navbarNav');
            
            if (toggler && hamburger && close && navbarCollapse) {
              toggler.addEventListener('click', function() {
                hamburger.classList.toggle('d-none');
                close.classList.toggle('d-none');
              });
              
              navbarCollapse.addEventListener('hidden.bs.collapse', function() {
                hamburger.classList.remove('d-none');
                close.classList.add('d-none');
              });
            }
          });
        `
      }} />
    </nav>
  );
};

export default Navbar;