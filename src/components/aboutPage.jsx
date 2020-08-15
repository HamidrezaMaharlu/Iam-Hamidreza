import React from "react";
import PropTypes from "prop-types";
import ScrollToNext from "./scrollToNext";

import "./aboutPage.scss";

const AboutPage = (props, context) => {
  const {
    theme: { colorPrimary, colorHighlight, bgPrimary, textPrimary },
  } = context;

  return (
    <div className="about-page" style={{ backgroundColor: bgPrimary }}>
      <style jsx="true">
        {`
          .highlight {
            background-color: ${colorHighlight};
          }
          ::selection {
            background-color: ${colorHighlight};
          }
        `}
      </style>
      <div className="content-grid">
        <h1 style={{ color: colorPrimary }}>About</h1>
        <div className="about-wrapper">
          <div className="about-content" style={{ color: textPrimary,
          textAlign:"justify",fontSize:"24px"
           }}>
            
              <p> I am Hamidreza Maharlu</p>
              <p>I love to learn</p>
              <p>I beleive in Self-Learning </p>
              <p>
                I started computer programming language in spring 2020 using
                Python. After three months practice, I leraned It magically and
                beleived on myself.</p> <h3>"YESSS, I did It"</h3> <p> then, I started
                working React In VScode enviroment.I love It and try to go ahead
                strongly and be successful.{" "}
              </p>
            
          </div>
        </div>
      </div>
      <ScrollToNext pageSelector=".Skill-page" />
    </div>
  );
};

AboutPage.contextTypes = {
  theme: PropTypes.any,
};

export default AboutPage;
