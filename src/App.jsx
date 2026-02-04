import React, { useState, useEffect } from 'react';
import LoadingPage from './components/LoadingPage';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import StarfieldBackground from './components/StarfieldBackground';

function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [typingText, setTypingText] = useState('');
  const [currentRole, setCurrentRole] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);

  const fullText = '<HELLO!/>';
  const roles = [ 
    'ML Enthusiast',
    'Full Stack Developer'
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (loading) {
      let index = 0;
      const typingInterval = setInterval(() => {
        if (index < fullText.length) {
          setTypingText(fullText.substring(0, index + 1));
          index++;
        } else {
          clearInterval(typingInterval);
        }
      }, 200);

      return () => clearInterval(typingInterval);
    }
  }, [loading]);

  useEffect(() => {
    if (!loading) {
      const typeRole = () => {
        const currentRoleText = roles[roleIndex];
        let charIndex = 0;
        let isDeleting = false;
        
        const typingInterval = setInterval(() => {
          if (!isDeleting && charIndex < currentRoleText.length) {
            setCurrentRole(currentRoleText.substring(0, charIndex + 1));
            charIndex++;
          } else if (!isDeleting && charIndex === currentRoleText.length) {
            setTimeout(() => {
              isDeleting = true;
            }, 2000);
          } else if (isDeleting && charIndex > 0) {
            charIndex--;
            setCurrentRole(currentRoleText.substring(0, charIndex));
          } else if (isDeleting && charIndex === 0) {
            clearInterval(typingInterval);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }, isDeleting ? 50 : 100);
      };

      typeRole();
    }
  }, [loading, roleIndex]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  if (loading) {
    return <LoadingPage typingText={typingText} />;
  }

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <StarfieldBackground />
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      <HeroSection currentRole={currentRole} />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
