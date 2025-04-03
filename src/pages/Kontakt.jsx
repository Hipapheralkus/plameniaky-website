// src/pages/Kontakt.jsx
import React, { useState, useRef } from 'react';
import PageLayout from '../components/PageLayout';
import Section from '../components/Section';
import ReCAPTCHA from "react-google-recaptcha";
import './kontakt.css'; // Ensure lowercase 'k'

const Kontakt = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    submitting: false,
    errorMessage: '' // Store potential error messages
  });

  const recaptchaRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, error: false, submitted: false, errorMessage: '' }); // Reset status on new submission

    let captchaToken = null;
    try {
      if (recaptchaRef.current) {
        captchaToken = await recaptchaRef.current.executeAsync();
        recaptchaRef.current.reset(); // Reset after getting token
      }
      if (!captchaToken) {
        throw new Error("CAPTCHA token not received.");
      }
    } catch (error) {
      console.error("CAPTCHA Error:", error);
      setFormStatus({ submitted: false, error: true, submitting: false, errorMessage: "Chyba pri overení CAPTCHA." });
      return;
    }

    // --- Actual Fetch to Backend ---
    try {
        console.log("Sending to /api/contact:", { ...formData, captchaToken }); // Log before sending
        const response = await fetch('/api/contact', { // Use relative path for Vercel function
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...formData, captchaToken }) // Send form data and token
        });

        // Log raw response status
        console.log("Response Status:", response.status);

        const responseData = await response.json(); // Always try to parse JSON

        // Log parsed response
        console.log("Response Data:", responseData);


        if (!response.ok) {
             // Use message from backend if available, otherwise provide default
             throw new Error(responseData.message || `Server error: ${response.status}`);
        }

        // Handle success
        setFormStatus({ submitted: true, error: false, submitting: false });
        setFormData({ name: '', email: '', message: '' }); // Clear form on success

    } catch (error) {
         console.error("Submit Error:", error);
         // Display the error message from the catch block
         setFormStatus({ submitted: false, error: true, submitting: false, errorMessage: error.message || "Nepodarilo sa odoslať formulár." });
    }
    // --- End Fetch ---
  };


  return (
    <PageLayout
      type="standard"
      title="Kontaktujte nás"
    >
      <Section width="wide">
        <div className="kontakt-info-grid">
          {/* Left Column: Info */}
          <div className="kontakt-details">
           <h3>Fakturačné údaje</h3>
             <p>Plameniaky, o. z. <br></br>
              Záborského 5, 080 01 Prešov<br></br>
              IČO: 53478371<br></br>
              Nie je platca DPH
             </p>

           <h3>Spojte sa s nami</h3>
             <p>Máte otázky, nápady na spoluprácu alebo si chcete objednať naše služby? Neváhajte nás kontaktovať!</p>
             <div className="kontakt-item">
                <i className="fas fa-envelope"></i>
                <a href="mailto:info@plameniaky.sk">info@plameniaky.sk</a>
             </div>
             <div className="kontakt-item">
                 <i className="fas fa-phone-alt"></i>
                 <a href="tel:+421918488525">+421 918 488 525</a>
             </div>
              <div className="kontakt-item">
                 <i className="fas fa-map-marker-alt"></i>
                 <span>Dolný Kubín</span>
             </div>
             <h4 className="mt-3">Sledujte nás</h4>
             <div className="kontakt-social">
                 <a href="https://www.instagram.com/plameniaky_oz" target="_blank" rel="noopener noreferrer" aria-label="Instagram Plameniaky OZ">
                     <i className="fab fa-instagram"></i>
                 </a>
                 <a href="https://www.facebook.com/plameniaky" target="_blank" rel="noopener noreferrer" aria-label="Facebook Plameniaky OZ">
                     <i className="fab fa-facebook"></i>
                 </a>
             </div>
          </div>

          {/* Right Column: Form */}
          <div className="kontakt-form-container">
             <h3>Napíšte nám správu</h3>
             {/* Display Success Message */}
             {formStatus.submitted && (
               <div className="form-success">
                 <p><i className="fas fa-check-circle"></i> Ďakujeme za Vašu správu! Čoskoro sa Vám ozveme.</p>
               </div>
             )}

             {/* Display Error Message */}
             {formStatus.error && (
               <div className="form-error">
                 <p><i className="fas fa-exclamation-triangle"></i> Ups! {formStatus.errorMessage || 'Niečo sa pokazilo pri odosielaní. Skúste to prosím znova alebo nás kontaktujte priamo.'}</p>
               </div>
             )}

             {/* Hide form only on successful submission, keep it visible on error */}
             {!formStatus.submitted ? (
               <form className="kontakt-form" onSubmit={handleSubmit} noValidate>
                 <div className="form-group">
                   <label htmlFor="name">Meno <span className="required">*</span></label>
                   <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required aria-required="true" disabled={formStatus.submitting} />
                 </div>
                 <div className="form-group">
                   <label htmlFor="email">Email <span className="required">*</span></label>
                   <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required aria-required="true" disabled={formStatus.submitting} />
                 </div>
                 <div className="form-group form-group-full">
                   <label htmlFor="message">Správa <span className="required">*</span></label>
                   <textarea id="message" name="message" rows="6" value={formData.message} onChange={handleChange} required aria-required="true" disabled={formStatus.submitting}></textarea>
                 </div>

                 {/* v3 reCAPTCHA Component */}
                 <ReCAPTCHA
                    ref={recaptchaRef}
                    size="invisible"
                    sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY || "6LdnEwMrAAAAAIIQtQg3blPvBkaYONQSnb0JsDsP"} // Use Vite env variable or fallback
                 />

                 <div className="form-submit form-group-full">
                   <button type="submit" className="btn" disabled={formStatus.submitting}>
                     {formStatus.submitting ? (
                         <>
                           <span className="spinner"></span> Odosielam...
                         </>
                      ) : (
                          'Odoslať správu'
                      )}
                   </button>
                 </div>
               </form>
             ) : null}
           </div>
        </div>
      </Section>
    </PageLayout>
  );
};

export default Kontakt;