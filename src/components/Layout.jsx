// src/components/Layout.jsx
import React, { useEffect } from 'react'; // <-- Importuj useEffect
import Navbar from './navbar';
import Footer from './Footer';
import PropTypes from 'prop-types';
import './Layout.css';

/**
 * Enhanced layout component that provides consistent structure for all pages
 * with support for different widths and content containers
 *
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Page content
 * @param {string} props.title - Page title for the header
 * @param {string} props.subtitle - Optional subtitle for the header
 * @param {boolean} props.noHeader - Whether to hide the page header
 * @param {string} props.headerBgClass - Optional custom class for header background
 * @param {string} props.width - Content width: 'normal', 'wide', 'extra-wide', 'full'
 * @param {string} props.spacing - Spacing between sections: 'normal', 'small', 'large'
 * @param {boolean} props.fluid - Whether to use fluid container instead of fixed width
 */
const Layout = ({
  children,
  title,
  subtitle,
  noHeader = false,
  headerBgClass = '',
  width = 'normal',
  spacing = 'normal',
  fluid = false
}) => {

  // --- Nastavenie titulku stránky ---
  useEffect(() => {
    document.title = "Plameniaky | Rozvíjame radosťou";
  }, []); // Prázdne pole znamená, že sa spustí len raz po načítaní komponentu
  // --- Koniec nastavenia titulku ---


  // Determine the content container class based on width prop
  let contentContainerClass = 'content-container';

  if (width === 'wide') {
    contentContainerClass += ' section-wide';
  } else if (width === 'extra-wide') {
    contentContainerClass += ' section-extra-wide';
  } else if (width === 'full') {
    contentContainerClass += ' section-full-width';
  } else if (width === 'narrow') {
    contentContainerClass += ' section-narrow';
  }

  // Add fluid class if needed
  if (fluid) {
    contentContainerClass += ' container-fluid';
  }

  // Determine spacing class
  let spacingClass = '';
  if (spacing === 'small') {
    spacingClass = 'section-small-padding';
  } else if (spacing === 'large') {
    spacingClass = 'section-large-padding';
  } else if (spacing === 'none') {
    spacingClass = 'section-no-padding';
  }

  return (
    <div className="page">
      <Navbar />

      {!noHeader && (
        <header className={`page-header ${headerBgClass}`}>
          <div className="container">
            <div className="content-container">
              <h1>{title}</h1>
              {subtitle && <h2>{subtitle}</h2>}
            </div>
          </div>
        </header>
      )}

      <main className={`page-content ${spacingClass}`}>
        {React.Children.map(children, child => {
          // If the child is a Section component, don't wrap it
          if (React.isValidElement(child) && (child.type.name === 'Section' || child.type.displayName === 'Section')) {
            return child;
          }

          // Otherwise, wrap in a container for consistent styling
          return (
            <div className="container">
              <div className={contentContainerClass}>
                {child}
              </div>
            </div>
          );
        })}
      </main>

      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  noHeader: PropTypes.bool,
  headerBgClass: PropTypes.string,
  width: PropTypes.oneOf(['normal', 'narrow', 'wide', 'extra-wide', 'full']),
  spacing: PropTypes.oneOf(['normal', 'small', 'large', 'none']),
  fluid: PropTypes.bool
};

export default Layout;