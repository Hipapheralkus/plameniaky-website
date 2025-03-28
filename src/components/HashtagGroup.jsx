// src/components/HashtagGroup.jsx
import React from 'react';
import PropTypes from 'prop-types';
import Hashtag from './Hashtag';
import './Hashtag.css';

/**
 * Component to render a group of hashtags with consistent styling
 * * @param {Object} props - Component props
 * @param {Array} props.tags - Array of tag names (without # symbol)
 * @param {boolean} props.showAll - Whether to show an "All" button
 * @param {string} props.activeTag - Currently active/selected tag
 * @param {function} props.onTagClick - Handler for tag clicks
 * @param {string} props.baseUrl - Base URL for tag links (optional)
 */
const HashtagGroup = ({
  tags,
  showAll = true,
  activeTag = null,
  onTagClick = null,
  baseUrl = null
}) => {
  // Helper to clean up tag names (remove # if present)
  const cleanTag = (tag) => tag.startsWith('#') ? tag.substring(1) : tag;

  // Normalize activeTag
  const normalizedActiveTag = activeTag ? cleanTag(activeTag) : null;

  return (
    <div className="hashtags-container">
      {showAll && (
        <Hashtag
          tag="všetky" // Assuming 'všetky' is the text for the "All" tag
          active={normalizedActiveTag === null}
          onClick={() => onTagClick && onTagClick(null)} // Pass null for "All"
          to={baseUrl}
          className="hashtag-all" // Optional specific class for "All"
        />
      )}

      {tags.map(tag => {
        const tagName = cleanTag(tag);
        return (
          <Hashtag
            key={tagName}
            tag={tagName}
            active={tagName === normalizedActiveTag}
            onClick={() => onTagClick && onTagClick(tag)} // Pass the original tag with # if needed by handler
            to={baseUrl && tagName !== 'všetky' ? `<span class="math-inline">\{baseUrl\}/</span>{tagName}` : null} // Avoid creating link for 'všetky' if it's in tags array
          />
        );
      })}
    </div>
  );
};

HashtagGroup.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  showAll: PropTypes.bool,
  activeTag: PropTypes.string,
  onTagClick: PropTypes.func,
  baseUrl: PropTypes.string
};

export default HashtagGroup;