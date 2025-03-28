// src/components/Hashtag.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Hashtag.css';

/**
 * Reusable hashtag component with consistent styling
 * * @param {Object} props - Component props
 * @param {string} props.tag - Tag name without the hash symbol
 * @param {boolean} props.active - Whether the tag is currently active/selected
 * @param {string} props.to - Optional link destination (if not provided, renders as a button)
 * @param {function} props.onClick - Optional click handler
 */
const Hashtag = ({ 
  tag, 
  active = false, 
  to = null, 
  onClick = null 
}) => {
  const tagText = `#${tag}`;
  const className = `hashtag ${active ? 'hashtag-active' : ''}`;

  // If a "to" prop is provided, render as a Link
  if (to) {
    return (
      <Link 
        to={to} 
        className={className}
        onClick={onClick}
      >
        {tagText}
      </Link>
    );
  }

  // Otherwise, render as a button
  return (
    <button 
      className={className} 
      onClick={onClick}
      type="button"
    >
      {tagText}
    </button>
  );
};

Hashtag.propTypes = {
  tag: PropTypes.string.isRequired,
  active: PropTypes.bool,
  to: PropTypes.string,
  onClick: PropTypes.func
};

export default Hashtag;