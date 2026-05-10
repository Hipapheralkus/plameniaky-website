// src/pages/Kontakt.jsx
import React, { useActionState, useRef } from 'react';
import { useFormStatus } from 'react-dom';
import PageLayout from '../components/PageLayout';
import Section from '../components/Section';
import ReCAPTCHA from "react-google-recaptcha";
import './kontakt.css'; // Ensure lowercase 'k'

const initialFormState = {
  submitted: false,
  error: false,
  errorMessage: '',
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SUBMIT_TIMEOUT_MS = 10000;

const Kontakt = () => {
  // ReCAPTCHA stays as a ref because the widget is uncontrolled by React.
  const recaptchaRef = useRef(null);

  // React 19 form action: receives the previous state and the FormData of the
  // submitted form, returns the next state. `pending` is exposed via
  // useFormStatus inside <SubmitButton>.
  const submitContactForm = async (_prevState, formData) => {
    const name = (formData.get('name') ?? '').toString().trim();
    const email = (formData.get('email') ?? '').toString().trim();
    const message = (formData.get('message') ?? '').toString().trim();

    if (!name || !email || !message) {
      return { ...initialFormState, error: true, errorMessage: 'Prosím vyplňte všetky povinné polia.' };
    }
    if (!EMAIL_REGEX.test(email)) {
      return { ...initialFormState, error: true, errorMessage: 'Prosím zadajte platný email.' };
    }

    let captchaToken;
    try {
      if (recaptchaRef.current) {
        captchaToken = await recaptchaRef.current.executeAsync();
        recaptchaRef.current.reset();
      }
      if (!captchaToken) throw new Error('CAPTCHA token not received.');
    } catch (err) {
      console.error('CAPTCHA Error:', err);
      return {
        ...initialFormState,
        error: true,
        errorMessage: 'Chyba pri overení CAPTCHA. Skúste to prosím znova.',
      };
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message, captchaToken }),
        signal: AbortSignal.timeout(SUBMIT_TIMEOUT_MS),
      });

      let data;
      try {
        data = await response.json();
      } catch (parseError) {
        throw new Error('Server vrátil neplatnú odpoveď. Kontaktujte nás prosím emailom.', {
          cause: parseError,
        });
      }
      if (!response.ok) {
        throw new Error(data.message || `Chyba servera: ${response.status}`);
      }
      return { submitted: true, error: false, errorMessage: '' };
    } catch (err) {
      console.error('Submit Error:', err);
      const message =
        err.name === 'AbortError' || err.name === 'TimeoutError'
          ? 'Požiadavka trvala príliš dlho. Server je pravdepodobne preťažený. Skúste to prosím neskôr.'
          : err.message || 'Nepodarilo sa odoslať formulár. Kontaktujte nás prosím emailom.';
      return { ...initialFormState, error: true, errorMessage: message };
    }
  };

  const [state, formAction] = useActionState(submitContactForm, initialFormState);

  return (
    <PageLayout type="standard" title="Kontaktujte nás">
      <Section width="wide">
        <div className="kontakt-info-grid">
          {/* Left Column: Info */}
          <div className="kontakt-details">
            <h3>Fakturačné údaje</h3>
            <p>
              Plameniaky, o. z.<br />
              Záborského 5, 080 01 Prešov<br />
              IČO: 53478371<br />
              Nie je platca DPH
            </p>

            <h3>Spojte sa s nami</h3>
            <p>Máte otázky, nápady na spoluprácu alebo si chcete objednať naše služby? Neváhajte nás kontaktovať!</p>
            <div className="kontakt-item">
              <i className="fas fa-envelope" aria-hidden="true"></i>
              <a href="mailto:info@plameniaky.sk">info@plameniaky.sk</a>
            </div>
            <div className="kontakt-item">
              <i className="fas fa-phone-alt" aria-hidden="true"></i>
              <a href="tel:+421918488525">+421 918 488 525</a>
            </div>
            <div className="kontakt-item">
              <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
              <span>Dolný Kubín</span>
            </div>
            <h4 className="mt-3">Sledujte nás</h4>
            <div className="kontakt-social">
              <a href="https://www.instagram.com/plameniaky_oz" target="_blank" rel="noopener noreferrer" aria-label="Instagram Plameniaky OZ">
                <i className="fab fa-instagram" aria-hidden="true"></i>
              </a>
              <a href="https://www.facebook.com/plameniaky" target="_blank" rel="noopener noreferrer" aria-label="Facebook Plameniaky OZ">
                <i className="fab fa-facebook" aria-hidden="true"></i>
              </a>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="kontakt-form-container">
            <h3>Napíšte nám správu</h3>

            {state.submitted && (
              <div className="form-success" role="status" aria-live="polite">
                <p>
                  <i className="fas fa-check-circle" aria-hidden="true"></i>{' '}
                  Ďakujeme za Vašu správu! Čoskoro sa Vám ozveme.
                </p>
              </div>
            )}

            {state.error && (
              <div className="form-error" role="alert" aria-live="assertive">
                <p>
                  <i className="fas fa-exclamation-triangle" aria-hidden="true"></i>{' '}
                  {state.errorMessage || 'Niečo sa pokazilo pri odosielaní. Skúste to prosím znova alebo nás kontaktujte priamo.'}
                </p>
              </div>
            )}

            {!state.submitted && (
              <form className="kontakt-form" action={formAction} noValidate>
                <ContactField
                  id="name"
                  label="Meno"
                  type="text"
                  required
                  defaultValue=""
                />
                <ContactField
                  id="email"
                  label="Email"
                  type="email"
                  required
                  defaultValue=""
                />
                <ContactField
                  id="message"
                  label="Správa"
                  textarea
                  required
                  defaultValue=""
                />

                <ReCAPTCHA
                  ref={recaptchaRef}
                  size="invisible"
                  sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY || '6LdnEwMrAAAAAIIQtQg3blPvBkaYONQSnb0JsDsP'}
                />

                <SubmitButton />
              </form>
            )}
          </div>
        </div>
      </Section>
    </PageLayout>
  );
};

/**
 * Form field that auto-disables itself while the parent form is pending —
 * useFormStatus reads the surrounding <form action> state.
 */
const ContactField = ({ id, label, type = 'text', textarea, required, defaultValue }) => {
  const { pending } = useFormStatus();
  const groupClass = textarea ? 'form-group form-group-full' : 'form-group';
  const commonProps = {
    id,
    name: id,
    defaultValue,
    required,
    'aria-required': required ? 'true' : undefined,
    disabled: pending,
  };
  return (
    <div className={groupClass}>
      <label htmlFor={id}>
        {label} {required && <span className="required">*</span>}
      </label>
      {textarea ? (
        <textarea rows="6" {...commonProps}></textarea>
      ) : (
        <input type={type} {...commonProps} />
      )}
    </div>
  );
};

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <div className="form-submit form-group-full">
      <button type="submit" className="btn" disabled={pending} aria-busy={pending}>
        {pending ? (
          <>
            <span className="spinner" aria-hidden="true"></span> Odosielam...
          </>
        ) : (
          'Odoslať správu'
        )}
      </button>
    </div>
  );
};

export default Kontakt;
