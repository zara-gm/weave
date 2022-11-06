/*eslint-disable*/

import React from 'react';
import './2Survey.css';

export default function survey_second() {
  return (
    <div className="num-40-a-survey-1">
      <span className="what-is-your-annual">
        What is your annual income in USD?
      </span>
      <div className="flex-container">
        <div className="rectangle-4">
          <img
            className="piggyBank"
            src={require('assets/img/piggyBank.png').default}
          />
          <span className="num-100-k">&lt;$100K</span>
        </div>
        <div className="rectangle-5">
          <img
            className="moneyBags"
            src={require('assets/img/moneyBags.png').default}
          />
          <span className="num-110-k-150-k">$110K-150K</span>
        </div>
        <div className="rectangle-6">
          <img className="cash" src={require('assets/img/cash.png').default} />
          <span className="num-150-k-250-k">$150K-$250K</span>
        </div>
      </div>
      <div className="flex-container-1">
        <div className="rectangle-7">
          <img
            className="cash2"
            src={require('assets/img/cash2.png').default}
          />
          <span className="num-250-k">&gt;$250K</span>
        </div>
        <div className="rectangle-7-1">
          <span className="prefer-not-to-say">Prefer not to say</span>
        </div>
      </div>
    </div>
  );
}
