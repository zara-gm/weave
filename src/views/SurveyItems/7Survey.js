/*eslint-disable*/

import React from 'react';
import './7Survey.css';

export default function survey_second() {
  return (
    <div className="num-40-a-survey-1">
      <div className="rectangle-3">
        <img
          className="loading.png"
          src={require('assets/img/loading.png').default}
        />
        <span className="submitting-your-answ">Submitting your answers...</span>
      </div>
    </div>
  );
}
