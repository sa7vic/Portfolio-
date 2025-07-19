import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      alert('Message sent successfully!');
      e.target.reset();
    })
    .catch((error) => {
      console.error('Error sending message:', error);
      alert('Oops! Something went wrong. Please try again.');
    });
  };

  const socialLinks = [
    { icon: 'fab fa-linkedin', name: 'LinkedIn', link: 'https://www.linkedin.com/in/sourav-satvic?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
    { icon: 'fab fa-github', name: 'GitHub', link: 'https://github.com/sa7vic' },
    { icon: 'fab fa-instagram', name: 'Instagram', link: 'https://www.instagram.com/souravkumar.20' },
    { icon: 'fas fa-code', name: 'CodeChef', link: 'https://www.codechef.com/users/satvic' }
  ];

  return (
    <section id="contact" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5 display-5 fw-bold">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-12 mb-5">
            <h3 className="mb-4 text-primary">Let's Connect</h3>
            <p className="mb-4">
              I'm always open to discussing new opportunities, interesting projects, 
              or just having a chat about technology. Feel free to reach out!
            </p>

            <form ref={form} onSubmit={sendEmail} className="contact-form">
              <div className="mb-3">
                <input type="text" name="name" className="form-control" placeholder="Your Name" required />
              </div>
              <div className="mb-3">
                <input type="email" name="email" className="form-control" placeholder="Your Email" required />
              </div>
              <div className="mb-3">
                <input type="text" name="subject" className="form-control" placeholder="Subject" required />
              </div>
              <div className="mb-3">
                <textarea name="message" className="form-control" rows="5" placeholder="Your Message" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">
                <i className="fas fa-paper-plane me-2"></i>Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="row justify-content-center mt-5">
          <div className="col-12">
            <h4 className="text-center mb-4 text-primary">Follow Me</h4>
            <div className="d-flex justify-content-center flex-wrap gap-3">
              {socialLinks.map((social, index) => (
                <div key={index} className="text-center">
                  <a href={social.link} className="text-decoration-none" target="_blank" rel="noopener noreferrer">
                    <div className="contact-sphere d-flex align-items-center justify-content-center mx-auto">
                      <i className={`${social.icon} contact-icon fs-4`}></i>
                    </div>
                    <small className="d-block mt-2 fw-bold contact-name">{social.name}</small>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
