/*eslint-disable*/

import React from 'react';
import './8Survey.css';

export default function survey_eight() {
  return (
    <div className="num-40-a-survey-1">
      <div className="rectangle shadow-xl rounded-lg">
        <img
          className="celebration"
          src={require('assets/img/celebration.png').default}
        />
        <span className="success">Success!</span>
        <span className="check-out-our-dashbo">
          Check out our dashboard for analytics and insights!
        </span>
      </div>
    </div>
  );
}
