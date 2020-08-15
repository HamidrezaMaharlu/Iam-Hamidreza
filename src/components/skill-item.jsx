import React from 'react';
import PropTypes from 'prop-types';

import './skillitem1.scss';

const SkillItem = (props, context) => {
  const { theme: { colorPrimary, textAlternate } } = context;

  if (props.render) return props.render;
  else
    return (
      <div
        className="Skill-item"
        style={{ backgroundColor: colorPrimary, color: textAlternate }}
      >
        <div className="Skill-item__title"></div>

        <div className="Skill-item__desc">
        </div>
        <div className="Skill-item__icon">
          <i className="fab fa-js" />
          <i className="fab fa-react" />
          <i className="fab fa-html5" />
        </div>
      </div>
    );
};

SkillItem.contextTypes = {
  theme: PropTypes.any
};

export default SkillItem;
