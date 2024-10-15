import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';

const BigButton = () => {
  return (
    <a
      href='/docs/category/projects'
      style={{
        display: 'inline-block',
        justifyContent: 'center',
        padding: '1rem 2rem',
        fontWeight: 'bold',
        fontSize: '1.5rem',
        backgroundColor: 'var(--ifm-color-primary-darker)',
        color: 'white',
        textAlign: 'center',
        textDecoration: 'none',
        borderRadius: '8px',
        border: 'none',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        transition: 'background-color 0.3s ease, transform 0.3s ease',
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.backgroundColor = 'var(--ifm-color-primary)';
        e.currentTarget.style.transform = 'scale(1.05)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.backgroundColor = 'var(--ifm-color-primary-darker)';
        e.currentTarget.style.transform = 'scale(1)';
      }}
    >
      PROJECTS <FontAwesomeIcon icon={faList} />
    </a>
  );
};

export default BigButton;
