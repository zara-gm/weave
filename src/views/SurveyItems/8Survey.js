/*eslint-disable*/

import React from 'react';
import './8Survey.css';
import { useHistory } from 'react-router-dom';


export default function survey_eight() {
  let history = useHistory();
  const handleClick = () => {
    history.push("/admin");
  }
  return (
    <div className="num-40-a-survey-1">
      <div className="rectangle shadow-xl rounded-lg">
        <img
          className="celebration"
          src={require('assets/img/celebration.png').default}
        />
        <div className="success">Success!</div>
        <div>
        <span className="check-out-our-dashbo"  onClick={() => handleClick()}>
          Check out our dashboard for analytics and insights!
        </span>
        </div>
      </div>
    </div>
  );
}
