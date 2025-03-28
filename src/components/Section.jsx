// src/components/Section.jsx
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Enhanced Section component for consistent page sections with
 * support for different widths, backgrounds, and padding
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Section content
 * @param {string} props.title - Section title
 * @param {string} props.subtitle - Optional section subtitle
 * @param {string} props.titleAlignment - Title alignment: 'center', 'left', 'right'
 * @param {string} props.background - Background type: 'white', 'alt', 'primary', 'dark'
 * @param {string} props.width - Content width: 'normal', 'narrow', 'wide', 'extra-wide', 'full'
 * @param {string} props.padding - Padding size: 'normal', 'small', 'large', 'none'
 * @param {boolean} props.container - Whether to wrap children in a container
 * @param {string} props.className - Additional CSS classes
 * @param {string} props.id - Optional ID for the section
 * @param {boolean} props.fluid - Whether to use fluid container
 */
const Section = ({ 
  children, 
  title,
  subtitle,
  titleAlignment = 'center',
  background = 'white',
  width = 'normal',
  padding = 'normal',
  container = true,
  className = '',
  id,
  fluid = false
}) => {
  // Build section class based on props
  let sectionClass = 'section';
  
  // Add background class
  if (background === 'alt') {
    sectionClass += ' section-alt';
  } else if (background === 'primary') {
    sectionClass += ' section-primary';
  } else if (background === 'dark') {
    sectionClass += ' section-dark';
  }
  
  // Add padding class
  if (padding === 'small') {
    sectionClass += ' section-small-padding';
  } else if (padding === 'large') {
    sectionClass += ' section-large-padding';
  } else if (padding === 'none') {
    sectionClass += ' section-no-padding';
  }
  
  // Add custom class if provided
  if (className) {
    sectionClass += ` ${className}`;
  }
  
  // Build title class based on alignment
  const titleClass = `section-title ${titleAlignment === 'left' ? 'text-left' : 
                                     titleAlignment === 'right' ? 'text-right' : ''}`;
  
  // Determine content container class based on width
  let contentContainerClass = 'content-container';
  
  if (width === 'narrow') {
    contentContainerClass += ' section-narrow';
  } else if (width === 'wide') {
    contentContainerClass += ' section-wide';
  } else if (width === 'extra-wide') {
    contentContainerClass += ' section-extra-wide';
  } else if (width === 'full') {
    contentContainerClass += ' section-full-width';
  }
  
  // Add fluid class if needed
  if (fluid) {
    contentContainerClass = contentContainerClass.replace('content-container', 'container-fluid');
  }

  return (
    <section className={sectionClass} id={id}>
      {container ? (
        <div className="container">
          <div className={contentContainerClass}>
            {title && (
              <div className="section-header">
                <h2 className={titleClass}>{title}</h2>
                {subtitle && <p className="section-subtitle">{subtitle}</p>}
              </div>
            )}
            <div className="section-content">
              {children}
            </div>
          </div>
        </div>
      ) : (
        <>
          {(title || subtitle) && (
            <div className="container">
              <div className={contentContainerClass}>
                <div className="section-header">
                  {title && <h2 className={titleClass}>{title}</h2>}
                  {subtitle && <p className="section-subtitle">{subtitle}</p>}
                </div>
              </div>
            </div>
          )}
          {children}
        </>
      )}
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  titleAlignment: PropTypes.oneOf(['center', 'left', 'right']),
  background: PropTypes.oneOf(['white', 'alt', 'primary', 'dark']),
  width: PropTypes.oneOf(['normal', 'narrow', 'wide', 'extra-wide', 'full']),
  padding: PropTypes.oneOf(['normal', 'small', 'large', 'none']),
  container: PropTypes.bool,
  className: PropTypes.string,
  id: PropTypes.string,
  fluid: PropTypes.bool
};

// Set display name for component identification in Layout
Section.displayName = 'Section';

export default Section;