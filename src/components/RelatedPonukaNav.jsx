// src/components/RelatedPonukaNav.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LazyImage from './LazyImage';
import Section from './Section';
import Grid from './Grid';
import './RelatedPonukaNav.css'; // We will create this CSS file

// Import or define the matrix items data here
// It's better to define it in a central place and import, but for simplicity:
const matrixItemsData = [
    {
      id: 'vzdelavanie-cirkus',
      image: '/images/tiles/cirkus_vzdelavanie.webp',
      alt: 'Vzdelávanie - Cirkus',
      title: 'Vzdelávanie Cirkus',
      link: '/ponuka/vzdelavanie-cirkus'
    },
    {
      id: 'vzdelavanie-hudba',
      image: '/images/tiles/hudba_vzdelavanie.webp',
      alt: 'Vzdelávanie - Hudba',
      title: 'Vzdelávanie Hudba',
      link: '/ponuka/vzdelavanie-hudba'
    },
    {
      id: 'vystupenia-cirkus',
      image: '/images/tiles/cirkus_vystupka.webp',
      alt: 'Vystúpenia - Cirkus',
      title: 'Vystúpenia Cirkus',
      link: '/ponuka/vystupenia-cirkus'
    },
    {
      id: 'vystupenia-hudba',
      image: '/images/tiles/hudba_vystupka.webp',
      alt: 'Vystúpenia - Hudba',
      title: 'Vystúpenia Hudba',
      link: '/ponuka/vystupenia-hudba'
    }
];


const RelatedPonukaNav = ({ currentItemId }) => {

    const relatedItems = matrixItemsData.filter(item => item.id !== currentItemId);

    if (relatedItems.length === 0) {
        return null; // Don't render if no related items found
    }

    return (
        <Section title="Ďalšia Ponuka" background="alt" padding="large">
             <Grid type="fixed" columns={3} gap="medium">
                 {relatedItems.map(item => (
                     <div key={item.id} className="related-ponuka-tile">
                         <Link to={item.link} className="related-ponuka-link">
                             <LazyImage
                                src={item.image}
                                alt={item.alt}
                                className="related-ponuka-image aspect-1-1" // Use aspect ratio class
                              />
                             <p className="related-ponuka-title">{item.title}</p>
                         </Link>
                     </div>
                 ))}
             </Grid>
        </Section>
    );
};

RelatedPonukaNav.propTypes = {
    currentItemId: PropTypes.oneOf([
        'vzdelavanie-cirkus',
        'vzdelavanie-hudba',
        'vystupenia-cirkus',
        'vystupenia-hudba'
    ]).isRequired,
};

export default RelatedPonukaNav;