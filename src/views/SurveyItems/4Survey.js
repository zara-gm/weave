/*eslint-disable*/

import React from 'react';
import './4Survey.css';

import { useHistory } from 'react-router-dom';

import weaveObj from "../../helper/weave";

export default function survey_four() {
  let history = useHistory();
  const handleVote = (value) =>{
    weaveObj.state.votes.push(value);
    console.log(weaveObj.state.votes)
      history.push("/survey/5");
  }
  return (
    <div className="num-40-a-survey-1">
      <span className="which-level-of-educa">
        Which level of education do you have?
      </span>
      <div className="flex-container-1">
        <div className="rectangle shadow-xl rounded-lg"  onClick={() => handleVote(1)}>
          <img
            className="graduate"
            src={require('assets/img/graduate.png').default}
          />
          <span className="high-school">High school</span>
        </div>
        <div className="rectangle shadow-xl rounded-lg"  onClick={() => handleVote(2)}>
          <img
            className="Books"
            src={require('assets/img/Books.png').default}
          />
          <span className="undergrad-school">Undergrad school</span>
        </div>
        <div className="rectangle shadow-xl rounded-lg"  onClick={() => handleVote(3)}>
          <img
            className="graduate-school-image"
            src={require('assets/img/graduate-school.png').default}
          />
          <span className="graduate-school">Graduate school</span>
        </div>
        <div className="rectangle shadow-xl rounded-lg"  onClick={() => handleVote(null)}>
          <span className="prefer-not-to-say">Prefer not to say</span>
        </div>
      </div>
    </div>
  );
}
