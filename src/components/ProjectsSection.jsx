import React from 'react';

const ProjectsSection = () => {
  const projects = [
     {
      id: 1,
      name: "CashMate",
      description: "Manage personal and group finances in one place, from tracking expenses to settling debts.",
      image: "/assets/cashmate.png",
      githubUrl: "https://github.com/SarveshShahane/CashMate",
      color: "rgba(147, 51, 234, 0.4)" 
    },
    {
      id: 2,
      name: "Stock Movement Prediction",
      description: "Jupyter notebook to predict next-day tech stock movements using machine learning.", 
      image: "/assets/stock.png",
      githubUrl: "https://github.com/sa7vic/Stock-movement-Prediction",
      color: "rgba(37, 99, 235, 0.4)" 
    },
    {
      id: 3,
      name: "Bhaasha", 
      description: "Speak, translate, and listen — automatically, using the Web Speech API.",
      image: "/assets/bhaasha.png",
      githubUrl: "https://github.com/SarveshShahane/Bhaasha",
      color: "rgba(16, 185, 129, 0.4)" 
    },
    {
      id: 4,
      name: "FlowSense",
      description: "Cognitive pattern visualization dashboard that acts as a mirror for your focus patterns over time.",
      image: "/assets/flowsense.png",
      githubUrl: "https://github.com/sa7vic/FlowSense",
      color: "rgba(59, 130, 246, 0.4)" 
    },
    {
      id: 5,
      name: "SmartGov",
      description: "Explainable audit risk intelligence system providing transparency in government spending analysis.",
      image: "/assets/smartgov.png",
      githubUrl: "https://github.com/sa7vic/SmartGov",
      color: "rgba(234, 179, 8, 0.4)" 
    }
  ];

  return (
    <section id="projects" className="py-5" >
      <div className="container">
        <h2 className="text-center mb-5 display-5 fw-bold">
          My <span style={{ color: 'var(--primary-blue)' }}> Projects</span>
        </h2>
        <div className="row">
          {projects.map((project) => (
            <div key={project.id} className="col-lg-4 col-md-6 mb-4">
              <div className="project-card position-relative rounded overflow-hidden h-100">
                <img src={project.image} alt={project.name} className="w-100 h-100" style={{ objectFit: 'cover', height: '300px' }}/>
                <div 
                  className="project-overlay position-absolute top-0 start-0 w-100 h-100 d-flex flex-column align-items-center justify-content-center text-white p-4"
                  style={{ backgroundColor: project.color }}
                >
                  <h5 className="fw-bold mb-3 text-center">{project.name}</h5>
                  <p className="text-center mb-4 small">{project.description}</p>
                  <div className="d-flex justify-content-center">
                    <a href={project.githubUrl} className="btn btn-outline-light btn-sm" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-github me-1"></i>GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
