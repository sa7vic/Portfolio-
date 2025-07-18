import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5 display-5 fw-bold">About <span className="text-primary">Me</span></h2>
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
            <div className="terminal">
              <div className="terminal-header">
                <span className="terminal-dot dot-red"></span>
                <span className="terminal-dot dot-yellow"></span>
                <span className="terminal-dot dot-green"></span>
                <span className="ms-2 text-light">satvic@portfolio:~</span>
              </div>
              <div className="terminal-content p-3">
                <div className="mb-2">$ cat about.txt</div>
                <div className="mb-2">Name: Sourav Kumar</div>
                <div className="mb-2">Jawaharlal Nehru University</div>
                <div className="mb-2">Education: B.Tech Electronics and Communication Engineering</div>
                <div className="mb-2">Status: Available for hire</div>
                <div className="mb-2">$ skills --list</div>
                <div className="mb-2">React, Node.js, Python, MongoDB</div>
                <div className="mb-2">Machine Learning, Data Science</div>
                <div className="mb-2">$ echo "Let's build something amazing!"</div>
                <div>Let's build something amazing!</div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 d-flex align-items-center">
            <div>
              <h3 className="mb-4 text-primary">My Journey</h3>
              <p className="mb-3">
                I'm a passionate developer with a strong interest in building modern, user-friendly web applications. I started with frontend development and gradually expanded into full-stack work, enjoying the challenge of creating complete, end-to-end solutions.
              </p>
              <p className="mb-3">
                Lately, my focus has shifted toward backend development—working with tools like Node.js, Express, and databases to build scalable APIs and efficient server-side systems. Also I am learning Golang. I’m also deepening my understanding of deployment, performance, and architecture.
              </p>
              <p>
                My journey into Machine Learning began out of curiosity about how data drives intelligent systems. I started with small projects and have been learning key ML and data science concepts, aiming to integrate them into real-world applications alongside my web development skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
