// src/components/Grid.jsx
import * as ReactModule from 'react';
import PropTypes from 'prop-types';

/**
 * Flexible Grid component for consistent layouts
 */
const Grid = ({ 
  children, 
  columns = 'auto',
  gap = 'default',
  className = ''
}) => {
  // Determine the grid class based on columns
  let gridClass = 'grid ';
  
  if (columns === 2) {
    gridClass += 'grid-2';
  } else if (columns === 3) {
    gridClass += 'grid-3';
  } else if (columns === 4) {
    gridClass += 'grid-4';
  } else {
    gridClass += 'grid-auto';
  }
  
  // Add gap class if specified
  if (gap === 'small') {
    gridClass += ' grid-gap-small';
  } else if (gap === 'large') {
    gridClass += ' grid-gap-large';
  }
  
  // Add any additional classes
  if (className) {
    gridClass += ` ${className}`;
  }
  
  return (
    <div className={gridClass}>
      {children}
    </div>
  );
};

Grid.propTypes = {
  children: PropTypes.node.isRequired,
  columns: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf(['auto'])
  ]),
  gap: PropTypes.oneOf(['default', 'small', 'large']),
  className: PropTypes.string
};

export default Grid;