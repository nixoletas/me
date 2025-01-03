import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSuitcase } from '@fortawesome/free-solid-svg-icons';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';

const BigButton = () => {
  return (
    <Link
      to='/portfolio/experience'
      style={{
        display: 'inline-block',
        justifyContent: 'center',
        padding: '1rem 2rem',
        fontWeight: '500',
        fontSize: '1.5rem',
        backgroundColor: 'var(--ifm-color-primary-darkest)',
        color: 'white',
        textAlign: 'center',
        textDecoration: 'none',
        borderRadius: '8px',
        border: 'none',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        transition: 'background-color 0.3s ease, transform 0.3s ease',
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.backgroundColor = 'var(--ifm-color-primary-lighter)';
        e.currentTarget.style.transform = 'scale(1.05)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.backgroundColor = 'var(--ifm-color-primary-darkest)';
        e.currentTarget.style.transform = 'scale(1)';
      }}
    >
      <Translate id="bigbutton.translation.id" description="big button"> About me</Translate> <FontAwesomeIcon icon={faSuitcase} />
    </Link>
  );
};

export default BigButton;
