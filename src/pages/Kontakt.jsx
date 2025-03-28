// src/pages/Kontakt.jsx
import React, { useState } from 'react';
import Layout from '../components/Layout';
import Section from '../components/Section';
import Grid from '../components/Grid';
import './Kontakt.css';

const Kontakt = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send the form data to a server here
    // This is just a simulation for demonstration purposes
    try {
      // Simulate server delay
      setTimeout(() => {
        setFormStatus({
          submitted: true,
          error: false
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      }, 1000);
    } catch (error) {
      setFormStatus({
        submitted: false,
        error: true
      });
    }
  };

  return (
    <Layout title="Kontaktujte nás">
      <Section>
        <Grid columns={3} className="kontakt-methods">
          <div className="kontakt-method-card">
            <h2>Email</h2>
            <p>
              <a href="mailto:info@plameniaky.sk">info@plameniaky.sk</a>
            </p>
          </div>

          <div className="kontakt-method-card">
            <h2>Telefón</h2>
            <p>
              <a href="tel:+421918488525">+421 918 488 525</a>
            </p>
          </div>

          <div className="kontakt-method-card">
            <h2>Sociálne siete</h2>
            <div className="social-links">
              <a href="https://www.instagram.com/plameniaky_oz" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i> Instagram
              </a>
              <a href="https://www.facebook.com/plameniaky" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i> Facebook
              </a>
            </div>
          </div>
        </Grid>
      </Section>
      
      <Section title="Kontaktný formulár" background="alt">
        {formStatus.submitted ? (
          <div className="form-success">
            <p>Ďakujeme za Vašu správu! Čoskoro Vás budeme kontaktovať.</p>
          </div>
        ) : (
          <form className="kontakt-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Meno a priezvisko <span className="required">*</span></label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                aria-required="true"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email <span className="required">*</span></label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                aria-required="true"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">Telefón</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Správa <span className="required">*</span></label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                aria-required="true"
              ></textarea>
            </div>
            
            <div className="form-submit">
              <button type="submit" className="btn">Odoslať správu</button>
            </div>
            
            {formStatus.error && (
              <div className="form-error">
                <p>Niečo sa pokazilo. Prosím skúste to znova.</p>
              </div>
            )}
          </form>
        )}
      </Section>
      
      <Section title="Kde nás nájdete">
        <div className="locations-grid">
          <div className="location-card">
            <div className="location-info">
              <h3>Plameniaky oz</h3>
              <p>Bratislava, Slovensko</p>
            </div>
            <div className="location-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d85329.42344483698!2d17.07231735!3d48.14512985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476c89360aca6197%3A0x631f9b82fd884368!2sBratislava!5e0!3m2!1sen!2ssk!4v1711631553874!5m2!1sen!2ssk"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa - Plameniaky oz"
                aria-label="Mapa zobrazujúca lokalitu organizácie Plameniaky oz v Bratislave"
              ></iframe>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Kontakt;