/*eslint-disable*/

import React from 'react';
import './5Survey.css';

import { useHistory } from 'react-router-dom';

import weaveObj from "../../helper/weave";

export default function survey_five() {
  let history = useHistory();
  const handleVote = (value) =>{
    const val = value.target.value ? Number(value.target.value) : null;
    if (val !== 0) {
    weaveObj.state.votes.push(val);
    console.log(weaveObj.state.votes)
      history.push("/survey/6");
    }
  }
  return (
    <div className="num-40-a-survey-1">
      <span className="how-many-twitter-fol">
        How many Twitter followers do you have?
      </span>
      <span className="enter-0-if-you-dont">
      <select 
        onChange={handleVote} 
      >
        <option value="0">Select</option>
       <option value="15">15+</option>
        <option value="75">50+</option>
        <option value="150">100+</option>
        <option value="500">250+</option>
        <option value="2000">1000+</option>
        <option value="">Prefer not to say</option>
      </select>
      </span>
    </div>
  );
}
