/*eslint-disable*/

import React from 'react';
import './6Survey.css';
import { useHistory } from 'react-router-dom';

import weaveObj from "../../helper/weave";

export default function survey_six() {
  let history = useHistory();
  const handleVote = (value) =>{
    const val = value.target.value ? Number(value.target.value) : null;
    if (val !== 0) {
    weaveObj.state.votes.push(val);
    console.log(weaveObj.state.votes)
      history.push("/survey/7");
    }
  }
  return (
    <div className="num-40-a-survey-1">
      <span className="how-many-discord-ser">
        How many Discord servers are you on?
      </span>
      <span className="enter-0-if-you-dont">
      <select 
        onChange={handleVote} 
      >
        <option value="0">Select</option>
       <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="5">5</option>
        <option value="7">10+</option>
        <option value="">Prefer not to say</option>
      </select>
      </span>
    </div>
  );
}
