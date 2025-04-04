// src/components/Grid.jsx
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Enhanced Grid component for consistent layouts with better responsiveness
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Grid items
 * @param {number|string} props.columns - Number of columns or 'auto' for auto-fill
 * @param {string} props.gap - Space between grid items: 'default', 'small', 'medium', 'large'
 * @param {string} props.className - Additional CSS classes
 * @param {string} props.type - Grid type: 'fixed', 'fluid', 'responsive'
 * @param {string} props.minWidth - Minimum width for fluid items (e.g., '200px', '300px')
 * @param {boolean} props.equalHeight - Whether all grid items should have equal height
 * @param {string} props.alignment - Alignment of grid items: 'top', 'center', 'bottom', 'stretch'
 * @param {boolean} props.centered - Whether to center the grid items horizontally
 */
const Grid = ({ 
  children, 
  columns = 'auto',
  gap = 'default',
  className = '',
  type = 'fixed',
  minWidth = '300px',
  equalHeight = false,
  alignment = 'stretch',
  centered = false
}) => {
  // Determine the grid class based on columns and type
  let gridClass = 'grid ';
  
  if (type === 'fixed') {
    if (columns === 2) {
      gridClass += 'grid-2';
    } else if (columns === 3) {
      gridClass += 'grid-3';
    } else if (columns === 4) {
      gridClass += 'grid-4';
    } else {
      gridClass += 'grid-auto';
    }
  } else if (type === 'fluid') {
    // Fluid grids use auto-fill with minmax
    if (minWidth === 'small') {
      gridClass += 'grid-fluid-sm';
    } else if (minWidth === 'medium' || minWidth === '300px') {
      gridClass += 'grid-fluid-md';
    } else if (minWidth === 'large' || minWidth === '400px') {
      gridClass += 'grid-fluid-lg';
    } else {
      // Custom minWidth for fluid grid
      gridClass += 'grid-auto';
      // We'll set a custom style below
    }
  } else if (type === 'responsive') {
    // Responsive grids change columns based on screen size
    gridClass += 'grid-responsive';
  }
  
  // Add gap class if specified
  if (gap === 'small') {
    gridClass += ' grid-gap-small';
  } else if (gap === 'medium') {
    gridClass += ' grid-gap-medium';
  } else if (gap === 'large') {
    gridClass += ' grid-gap-large';
  }
  
  // Add alignment class
  if (alignment === 'top') {
    gridClass += ' align-start';
  } else if (alignment === 'center') {
    gridClass += ' align-center';
  } else if (alignment === 'bottom') {
    gridClass += ' align-end';
  } else {
    gridClass += ' align-stretch';
  }
  
  // Add equal height class if specified
  if (equalHeight) {
    gridClass += ' grid-equal-height';
  }
  
  // Add centering class if specified
  if (centered) {
    gridClass += ' grid-centered';
  }
  
  // Add any additional classes
  if (className) {
    gridClass += ` ${className}`;
  }
  
  // Create a custom style for fluid grid with specific minWidth
  const gridStyle = {};
  if (type === 'fluid' && !['small', 'medium', 'large', '300px', '400px'].includes(minWidth)) {
    // IMPORTANT FIX: Use auto-fit instead of auto-fill when centered is true
    const repeatFunction = centered ? 'auto-fit' : 'auto-fill';
    // For centered grids, use a maximum size to prevent stretching
    const maxSize = centered ? '350px' : '1fr';
    gridStyle.gridTemplateColumns = `repeat(${repeatFunction}, minmax(${minWidth}, ${maxSize}))`;
    
    // Add justify-content center for centered grids
    if (centered) {
      gridStyle.justifyContent = 'center';
    }
  }
  
  return (
    <div className={gridClass} style={gridStyle}>
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
  gap: PropTypes.oneOf(['default', 'small', 'medium', 'large']),
  className: PropTypes.string,
  type: PropTypes.oneOf(['fixed', 'fluid', 'responsive']),
  minWidth: PropTypes.string,
  equalHeight: PropTypes.bool,
  alignment: PropTypes.oneOf(['top', 'center', 'bottom', 'stretch']),
  centered: PropTypes.bool
};

export default Grid;