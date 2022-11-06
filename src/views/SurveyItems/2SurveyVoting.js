/*eslint-disable*/

import React from 'react';
import './2Survey.css';
import { useHistory } from 'react-router-dom';
import weaveObj from "../../helper/weave";


export default function survey_second() {
  let history = useHistory();
  const handleVote = (value) =>{
    weaveObj.state.votes.push(value);
    console.log(weaveObj.state.votes)
    history.push("/survey/3");
  }
  return (
    <div className="num-40-a-survey-1">
      <span className="what-is-your-annual">
        What is your annual income in USD?
      </span>
      <div className="flex-container-1">
        <div className="rectangle shadow-xl rounded-lg" onClick={() => handleVote(80000)}>
          <img
            className="piggyBank"
            src={require('assets/img/piggyBank.png').default}
          />
          <span className="num-100-k">&lt;$100K</span>
        </div>
        <div className="rectangle shadow-xl rounded-lg" onClick={() => handleVote(130000)}>
          <img
            className="moneyBags"
            src={require('assets/img/moneyBags.png').default}
          />
          <span className="num-110-k-150-k">$110K-150K</span>
        </div>
        <div className="rectangle shadow-xl rounded-lg" onClick={() => handleVote(200000)}>
          <img className="cash" src={require('assets/img/cash.png').default} />
          <span className="num-150-k-250-k">$150K-$250K</span>
        </div>
      </div>
      <div className="flex-container-1">
        <div className="rectangle shadow-xl rounded-lg-7"  onClick={() => handleVote(500000)}>
          <img
            className="cash2"
            src={require('assets/img/cash2.png').default}
          />
          <span className="num-250-k">&gt;$250K</span>
        </div>
        <div className="" onClick={() => handleVote(null)}>
          <span className="prefer-not-to-say cursor-pointer">Prefer not to say</span>
        </div>
      </div>
    </div>
  );
}
