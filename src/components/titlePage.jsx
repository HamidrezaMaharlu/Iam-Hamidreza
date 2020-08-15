import React from 'react';
import PropTypes from 'prop-types';
import SocialIcons from "./socialIcons";
import Nav from "./navigation";
import ScrollToNext from "./scrollToNext";

import './titlePage.scss';

const TitlePage = (props, context) => {
    const { theme: { bgPrimary, colorPrimary } } = context;
  
    return (
      <div style={{ backgroundColor: bgPrimary }} className="landing-page">
        <Nav />
        <main style={{ color: colorPrimary }}>
          <div className="intro-wrapper">
            <div className="intro-name">Hello, I'm Hamidreza!</div>
            <div className="tagline">
              Full Stack Dev | Open-Source Enthusiast
            </div>
            <SocialIcons />
          </div>
        </main>
        <ScrollToNext pageSelector=".about-page" />
      </div>
    );
  };
  
  TitlePage.contextTypes = {
    theme: PropTypes.any
  };
  
  export default TitlePage;