// src/components/PageLayout.jsx
import React from 'react';
import PropTypes from 'prop-types';
import Layout from './Layout';

/**
 * PageLayout component that provides standardized layout templates for different page types
 * 
 * @param {Object} props - Component props
 * @param {string} props.type - Page layout type: 'standard', 'hero', 'wide', 'full'
 * @param {string} props.title - Page title
 * @param {string} props.subtitle - Optional subtitle
 * @param {React.ReactNode} props.children - Page content
 * @param {string} props.headerBgClass - Optional header background class
 * @param {string} props.spacing - Space between sections: 'normal', 'small', 'large'
 * @param {boolean} props.fluid - Whether to use fluid containers
 */
const PageLayout = ({ 
  type = 'standard', 
  title,
  subtitle,
  children,
  headerBgClass = '',
  spacing = 'normal',
  fluid = false
}) => {
  switch(type) {
    // Hero layout has no header and is meant for pages with a hero banner
    case 'hero':
      return (
        <Layout 
          noHeader={true}
          spacing={spacing}
          fluid={fluid}
        >
          {children}
        </Layout>
      );
    
    // Wide layout uses more screen real estate
    case 'wide':
      return (
        <Layout 
          title={title} 
          subtitle={subtitle}
          headerBgClass={headerBgClass}
          width="wide"
          spacing={spacing}
          fluid={fluid}
        >
          {children}
        </Layout>
      );
    
    // Extra-wide layout for content-heavy pages on large screens
    case 'extra-wide':
      return (
        <Layout 
          title={title} 
          subtitle={subtitle}
          headerBgClass={headerBgClass}
          width="extra-wide"
          spacing={spacing}
          fluid={fluid}
        >
          {children}
        </Layout>
      );
    
    // Full-width layout uses the entire screen width
    case 'full':
      return (
        <Layout 
          title={title} 
          subtitle={subtitle}
          headerBgClass={headerBgClass}
          width="full"
          spacing={spacing}
          fluid={true}
        >
          {children}
        </Layout>
      );
    
    // Narrow layout for text-focused content
    case 'narrow':
      return (
        <Layout 
          title={title} 
          subtitle={subtitle}
          headerBgClass={headerBgClass}
          width="narrow"
          spacing={spacing}
          fluid={false}
        >
          {children}
        </Layout>
      );
    
    // Standard layout (default)
    default:
      return (
        <Layout 
          title={title} 
          subtitle={subtitle}
          headerBgClass={headerBgClass}
          width="normal"
          spacing={spacing}
          fluid={fluid}
        >
          {children}
        </Layout>
      );
  }
};

PageLayout.propTypes = {
  type: PropTypes.oneOf(['standard', 'hero', 'wide', 'extra-wide', 'full', 'narrow']),
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.node.isRequired,
  headerBgClass: PropTypes.string,
  spacing: PropTypes.oneOf(['normal', 'small', 'large', 'none']),
  fluid: PropTypes.bool
};

export default PageLayout;