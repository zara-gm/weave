/*eslint-disable*/

import React from 'react';
import './4Survey.css';

export default function survey_second() {
  return (
    <div className="num-40-a-survey-1">
      <span className="which-level-of-educa">
        Which level of education do you have?
      </span>
      <div className="flex-container">
        <div className="rectangle-3">
          <img
            className="graduate"
            src={require('assets/img/graduate.png').default}
          />
          <span className="high-school">High school</span>
        </div>
        <div className="rectangle-4">
          <img
            className="Books"
            src={require('assets/img/Books.png').default}
          />
          <span className="undergrad-school">Undergrad school</span>
        </div>
        <div className="rectangle-5">
          <img
            className="graduate-school-image"
            src={require('assets/img/graduate-school.png').default}
          />
          <span className="graduate-school">Graduate school</span>
        </div>
        <div className="rectangle-5-1">
          <span className="prefer-not-to-say">Prefer not to say</span>
        </div>
      </div>
    </div>
  );
}
