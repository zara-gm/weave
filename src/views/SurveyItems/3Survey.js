/*eslint-disable*/

import React from 'react';
import './3Survey.css';

export default function survey_three() {
  return (
    <div className="num-40-a-survey-1">
      <span className="which-region-have-yo">
        Which region have you spent most time in the past 6 months?
      </span>
      <div className="flex-container">
        <img
          className="moneyBags"
          src={require('assets/img/moneyBags.png').default}
        />
        <span className="north-america">North America</span>
        <img
          className="moneyBags"
          src={require('assets/img/moneyBags.png').default}
        />
        <span className="south-asia">South Asia</span>
      </div>
      <div className="flex-container-1">
        <img
          className="moneyBags"
          src={require('assets/img/moneyBags.png').default}
        />
        <span className="latin-america-carib">
          Latin America &amp; Caribbean
        </span>
        <img
          className="moneyBags"
          src={require('assets/img/moneyBags.png').default}
        />
        <span className="sub-saharan-africa">Sub-Saharan Africa</span>
      </div>
      <div className="flex-container-2">
        <img
          className="moneyBags"
          src={require('assets/img/moneyBags.png').default}
        />
        <span className="europe-central-asia">Europe &amp; Central Asia</span>
        <img
          className="moneyBags"
          src={require('assets/img/moneyBags.png').default}
        />
        <span className="east-asia-pacific">East Asia &amp; Pacific</span>
      </div>
      <div className="flex-container-3">
        <img
          className="moneyBags"
          src={require('assets/img/moneyBags.png').default}
        />
        <span className="middle-east-north-a">
          Middle East &amp; North Africa
        </span>
      </div>
      {/* <BtnPrimary
        className="btn-primary-instance-1"
        {...propsData.btnPrimary}
      /> */}
      <span className="prefer-not-to-say">Prefer not to say</span>
    </div>
  );
}
