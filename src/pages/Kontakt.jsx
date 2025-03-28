// src/pages/Kontakt.jsx
import React, { useState } from 'react';
// import { Link } from 'react-router-dom'; // Link nie je potrebný, ak nepridávame extra odkazy
import PageLayout from '../components/PageLayout';
import Section from '../components/Section';
import './Kontakt.css';

const Kontakt = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '' // Odstránili sme telefón z formulára podľa špecifikácie
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    submitting: false // Pridaný stav pre indikáciu odosielania
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
    setFormStatus({ ...formStatus, submitting: true, error: false }); // Začať odosielanie

    // --- Simulácia odosielania ---
    // V reálnej aplikácii by tu bol fetch request na váš backend alebo službu (napr. Formspree, Netlify Forms)
    console.log("Odosielané dáta:", formData); 
    setTimeout(() => {
       // Nastavte, či simulácia uspeje alebo zlyhá
      const success = true; // Zmeňte na false pre test chyby

      if (success) {
           setFormStatus({
             submitted: true,
             error: false,
             submitting: false
           });
           // Reset form
           setFormData({ name: '', email: '', message: '' });
      } else {
          setFormStatus({
             submitted: false, // Alebo true, ak chcete zobraziť správu ale aj chybu
             error: true,
             submitting: false
           });
      }
    }, 1500); // Simulácia 1.5 sekundy
    // --- Koniec simulácie ---
  };

  return (
    <PageLayout 
      type="standard"
      title="Kontaktujte nás"
    >
      {/* Kontaktné informácie */}
      <Section width="wide">
        <div className="kontakt-info-grid"> {/* Použitie gridu pre info a formulár */}
          
          {/* Ľavý stĺpec: Informácie */}
          <div className="kontakt-details">
             <h3>Spojte sa s nami</h3>
             <p>Máte otázky, nápady na spoluprácu alebo si chcete objednať naše služby? Neváhajte nás kontaktovať!</p>
             
             <div className="kontakt-item">
                <i className="fas fa-envelope"></i>
                <a href="mailto:info@plameniaky.sk">info@plameniaky.sk</a>
             </div>
             <div className="kontakt-item">
                 <i className="fas fa-phone-alt"></i>
                 <a href="tel:+421918488525">+421 918 488 525</a> {/* Podľa pôvodného kódu */}
             </div>
              <div className="kontakt-item">
                 <i className="fas fa-map-marker-alt"></i>
                 <span>Bratislava</span> {/* Iba mesto podľa špecifikácie */}
             </div>
             
             <h4 className="mt-3">Sledujte nás</h4>
             <div className="kontakt-social">
                 <a href="https://www.instagram.com/plameniaky_oz" target="_blank" rel="noopener noreferrer" aria-label="Instagram Plameniaky OZ">
                     <i className="fab fa-instagram"></i>
                 </a>
                 <a href="https://www.facebook.com/plameniaky" target="_blank" rel="noopener noreferrer" aria-label="Facebook Plameniaky OZ">
                     <i className="fab fa-facebook"></i>
                 </a>
                  {/* Pridajte ďalšie ikony podľa potreby */}
             </div>
          </div>

          {/* Pravý stĺpec: Formulár */}
          <div className="kontakt-form-container">
             <h3>Napíšte nám správu</h3>
             {formStatus.submitted && !formStatus.error && (
               <div className="form-success">
                 <p><i className="fas fa-check-circle"></i> Ďakujeme za Vašu správu! Čoskoro sa Vám ozveme.</p>
               </div>
             )}
             
             {formStatus.error && (
               <div className="form-error">
                 <p><i className="fas fa-exclamation-triangle"></i> Ups! Niečo sa pokazilo pri odosielaní. Skúste to prosím znova alebo nás kontaktujte priamo.</p>
               </div>
             )}

             {!formStatus.submitted || formStatus.error ? ( // Zobraziť formulár, ak nebol úspešne odoslaný
               <form className="kontakt-form" onSubmit={handleSubmit} noValidate>
                 <div className="form-group">
                   <label htmlFor="name">Meno <span className="required">*</span></label>
                   <input
                     type="text"
                     id="name"
                     name="name"
                     value={formData.name}
                     onChange={handleChange}
                     required
                     aria-required="true"
                     disabled={formStatus.submitting}
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
                     disabled={formStatus.submitting}
                   />
                 </div>
                                 
                 <div className="form-group form-group-full">
                   <label htmlFor="message">Správa <span className="required">*</span></label>
                   <textarea
                     id="message"
                     name="message"
                     rows="6" // Zväčšené pole
                     value={formData.message}
                     onChange={handleChange}
                     required
                     aria-required="true"
                     disabled={formStatus.submitting}
                   ></textarea>
                 </div>
                 
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
           </div> {/* Koniec .kontakt-form-container */}

        </div> {/* Koniec .kontakt-info-grid */}
      </Section>
      
      {/* Môžete pridať mapu, ak je stále relevantná, aj keď sídlo je len mesto */}
      {/* <Section title="Kde nás nájdete" background="alt"> ... </Section> */}

    </PageLayout>
  );
};

export default Kontakt;