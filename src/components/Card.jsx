// src/components/Card.jsx
import React from 'react';
import PropTypes from 'prop-types';
import LazyImage from './LazyImage';

/**
 * Reusable Card component for consistent card layouts
 */
const Card = ({
  title,
  image,
  imageAlt,
  children,
  className = '',
  footer
}) => {
  return (
    <div className={`card ${className}`}>
      {image && (
        <div className="card-img">
          <LazyImage src={image} alt={imageAlt || title} />
        </div>
      )}
      <div className="card-body">
        {title && <h3 className="card-title">{title}</h3>}
        {children}
      </div>
      {footer && (
        <div className="card-footer">
          {footer}
        </div>
      )}
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  imageAlt: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  footer: PropTypes.node
};

export default Card;