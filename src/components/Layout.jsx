// src/components/Layout.jsx
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import PropTypes from 'prop-types';
import './Layout.css';

/**
 * Main layout component that provides consistent structure for all pages
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Page content
 * @param {string} props.title - Page title for the header
 * @param {string} props.subtitle - Optional subtitle for the header
 * @param {boolean} props.noHeader - Whether to hide the page header
 * @param {string} props.headerBgClass - Optional custom class for header background
 */
const Layout = ({ 
  children, 
  title, 
  subtitle,
  noHeader = false,
  headerBgClass = ''
}) => {
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
      
      <main className="page-content">
        {children}
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
  headerBgClass: PropTypes.string
};

export default Layout;