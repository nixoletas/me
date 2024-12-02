import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faList, faSuitcase } from '@fortawesome/free-solid-svg-icons';
import Link from '@docusaurus/Link';

const BigButton = () => {
  return (
    <Link
<<<<<<< HEAD
      to='/docs/experience'
=======
      to='/portfolio/projects'
>>>>>>> 3a60f48166f10a00bb1a52ccb71f3d455c33dbcf
      style={{
        display: 'inline-block',
        justifyContent: 'center',
        padding: '1rem 2rem',
        fontWeight: '500',
        fontSize: '1.5rem',
        backgroundColor: 'var(--ifm-color-primary)',
        color: 'white',
        textAlign: 'center',
        textDecoration: 'none',
        borderRadius: '8px',
        border: 'none',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        transition: 'background-color 0.3s ease, transform 0.3s ease',
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.backgroundColor = 'var(--ifm-color-primary-darker)';
        e.currentTarget.style.transform = 'scale(1.05)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.backgroundColor = 'var(--ifm-color-primary)';
        e.currentTarget.style.transform = 'scale(1)';
      }}
    >
      About me <FontAwesomeIcon icon={faSuitcase} />
    </Link>
  );
};

export default BigButton;
