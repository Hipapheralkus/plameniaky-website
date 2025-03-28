// src/components/Section.jsx
import * as ReactModule from 'react'; // Use a different import name
import PropTypes from 'prop-types';

/**
 * Reusable Section component for consistent page sections
 */
const Section = ({ 
  children, 
  title, 
  titleAlignment = 'center',
  background = 'white',
  container = true,
  className = '',
  id
}) => {
  const sectionClass = `section ${background === 'alt' ? 'section-alt' : ''} ${className}`;
  const titleClass = `section-title ${titleAlignment === 'left' ? 'text-left' : ''}`;

  return (
    <section className={sectionClass} id={id}>
      {container ? (
        <div className="container">
          <div className="content-container">
            {title && <h2 className={titleClass}>{title}</h2>}
            {children}
          </div>
        </div>
      ) : (
        <>
          {title && (
            <div className="container">
              <div className="content-container">
                <h2 className={titleClass}>{title}</h2>
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
  titleAlignment: PropTypes.oneOf(['center', 'left']),
  background: PropTypes.oneOf(['white', 'alt']),
  container: PropTypes.bool,
  className: PropTypes.string,
  id: PropTypes.string
};

export default Section;