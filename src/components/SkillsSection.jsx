import React from 'react';

const SkillsSection = () => {
  const skills = [
    { icon: 'fas fa-coffee', name: 'Java' },
    { icon: 'fab fa-python', name: 'Python' },
    { icon: 'fab fa-html5', name: 'HTML5' },
    { icon: 'fab fa-css3-alt', name: 'CSS3' },
    { icon: 'fab fa-bootstrap', name: 'Bootstrap'},
    { icon: 'fab fa-js-square', name: 'JavaScript' },
    { icon: 'fab fa-react', name: 'React' },
    { icon: 'fab fa-node-js', name: 'Node.js' },
    { icon: 'fas fa-database', name: 'MongoDB' },
    { icon: 'fab fa-git-alt', name: 'Git' },
    { icon: 'fab fa-docker', name: 'Docker' },
    { icon: 'fas fa-brain', name: 'ML' }
  ];

  return (
    <section id="skills" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5 display-5 fw-bold">My <span className="text-primary">Skills</span></h2>
        <div className="row text-center">
          {skills.map((skill, index) => (
            <div key={index} className="col-lg-2 col-md-3 col-4 mb-4">
              <div className="skill-sphere d-flex flex-column align-items-center justify-content-center mx-auto">
                <i className={`${skill.icon} skill-icon fs-3 mb-1`}> </i>
                <small className="skill-name fw-bold">{skill.name}</small>
              </div>
            </div>
          )) }
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;