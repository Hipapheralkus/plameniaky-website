// src/pages/NotFound.jsx
import React from 'react';
import { Link, useLocation } from 'react-router';
import PageLayout from '../components/PageLayout';
import Section from '../components/Section';
import './NotFound.css';

const NotFound = () => {
  const { pathname } = useLocation();

  return (
    <PageLayout title="Stránka sa nenašla" subtitle="Chyba 404">
      {/* Keep unknown URLs out of search results (React 19 hoists this into <head>). */}
      <meta name="robots" content="noindex" />
      <Section width="narrow">
        <div className="not-found">
          <p className="not-found-code" aria-hidden="true">404</p>
          <p>
            Stránka <code className="not-found-path">{pathname}</code> neexistuje
            alebo bola presunutá.
          </p>
          <p>Skúste začať od úvodnej stránky alebo si pozrite našu ponuku.</p>
          <div className="not-found-actions">
            <Link to="/" className="btn">Späť na úvodnú stránku</Link>
            <Link to="/ponuka" className="btn btn-outline">Prehľad ponuky</Link>
          </div>
        </div>
      </Section>
    </PageLayout>
  );
};

export default NotFound;
