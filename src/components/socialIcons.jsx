import React from 'react';
import PropTypes from 'prop-types';



import './SocialIcons.scss';

const SocialIcons = (props, context) => {
  const { theme: { colorPrimary } } = context;
  
  return (
    <div className="social-icons animate-icons">
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/HamidrezaMaharlu/Iam-Hamidreza.git" style={ { color: colorPrimary } }><i className="fab fa-github"></i></a>
        <a target="_blank" rel="noopener noreferrer" href="https://wa.me/989384265046" style={ { color: colorPrimary } }><i className="fab fa-whatsapp"></i></a>
        <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/hamidreza-maharlu-4537867b" style={ { color: colorPrimary } }><i className="fab fa-linkedin"></i></a>
        
      </div>
  );
};

SocialIcons.contextTypes = {
  theme: PropTypes.any
};

export default SocialIcons;