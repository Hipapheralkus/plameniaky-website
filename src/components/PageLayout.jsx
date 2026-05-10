// src/components/PageLayout.jsx
import React from 'react';
import PropTypes from 'prop-types';
import Layout from './Layout';

const SITE_NAME = 'Plameniaky.sk';

/**
 * PageLayout component that provides standardized layout templates for different page types
 *
 * @param {Object} props - Component props
 * @param {string} props.type - Page layout type: 'standard', 'hero', 'wide', 'full'
 * @param {string} props.title - Page title (also drives document.title via the
 *   React 19 metadata API).
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
  // React 19 hoists <title>/<meta>/<link> from any component into <head>.
  // We render a per-page title here so each route gets its own document
  // title without each page having to wire useEffect document.title manually.
  const pageTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const docTitle = <title>{pageTitle}</title>;

  const layoutByType = {
    hero: (
      <Layout noHeader={true} spacing={spacing} fluid={fluid}>
        {children}
      </Layout>
    ),
    wide: (
      <Layout title={title} subtitle={subtitle} headerBgClass={headerBgClass} width="wide" spacing={spacing} fluid={fluid}>
        {children}
      </Layout>
    ),
    'extra-wide': (
      <Layout title={title} subtitle={subtitle} headerBgClass={headerBgClass} width="extra-wide" spacing={spacing} fluid={fluid}>
        {children}
      </Layout>
    ),
    full: (
      <Layout title={title} subtitle={subtitle} headerBgClass={headerBgClass} width="full" spacing={spacing} fluid={true}>
        {children}
      </Layout>
    ),
    narrow: (
      <Layout title={title} subtitle={subtitle} headerBgClass={headerBgClass} width="narrow" spacing={spacing} fluid={false}>
        {children}
      </Layout>
    ),
    standard: (
      <Layout title={title} subtitle={subtitle} headerBgClass={headerBgClass} width="normal" spacing={spacing} fluid={fluid}>
        {children}
      </Layout>
    ),
  };

  return (
    <>
      {docTitle}
      {layoutByType[type] ?? layoutByType.standard}
    </>
  );
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