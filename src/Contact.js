
import React from 'react';
import './Contact.css'
const Contact = () => {
  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <p>
        Feel free to get in touch with me for collaboration, questions, or just to say hello. You can reach me via email or through my social media profiles.
      </p>
      <div className="contact-details">
        <div className="contact-item">
          <h3>Email:</h3>
          <p>goyalkshitiz3@gmail.com</p>
        </div>
        <div className="contact-item">
          <h3>LinkedIn:</h3>
          <p>linkedin.com/in/kshitiz2506</p>
        </div>
        <div className="contact-item">
          <h3>GitHub:</h3>
          <p>github.com/kshitiz2506</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
