import React from 'react';
import PropTypes from 'prop-types';
import SkillItem from "./skill-item";
import ScrollToPrevious from "./scrollToPrev";
import SkillItems from "./skillItem";

import './skillPage.scss';

const SkillPage = (props, context) => {
  const {
    theme: { colorPrimary, colorAlternate, textAlternate, bgPrimary }
  } = context;

  return (
    <div className="Skill-page" style={{ backgroundColor: bgPrimary }}>
      <div className="content-grid">
        <h1 style={{ color: colorPrimary }}>Skills</h1>
        <div className="Skill-wrapper">
          <style jsx="true">
            {`
              .Skill-item {
                background-color: ${colorPrimary};
                color: ${textAlternate};
              }
              .Skill-item a {
                color: ${textAlternate};
              }
              .Skill-item__links a:hover {
                border-bottom: 2px solid ${colorAlternate};
              }
            `}
          </style>
          {/* <PortfolioItem /> */}
          {SkillItems.map((item, i) => (
            <SkillItem render={item.render} key={i} />
          ))}
        </div>
      </div>
      <ScrollToPrevious pageSelector=".about-page" />
    </div>
  );
};

SkillPage.contextTypes = {
  theme: PropTypes.any
};

export default SkillPage;
