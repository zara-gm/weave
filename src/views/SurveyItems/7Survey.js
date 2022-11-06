/*eslint-disable*/

import React from 'react';
import './7Survey.css';
import weaveObj from "../../helper/weave";
import { useHistory } from 'react-router-dom';

export default function survey_seven() {
  let history = useHistory();
  weaveObj.state.votes.unshift(weaveObj.state.wallet);
  weaveObj.state.votes.unshift(null);
  weaveObj.write(weaveObj.state.votes);
  console.log("final_votes", weaveObj.state.votes);
  weaveObj.state.updateCb = (res) => {
      if(res === 'ok') {
        history.push("/survey/8");
      }
  }
  return (
    <div className="num-40-a-survey-1">
      <div className="rectangle shadow-xl rounded-lg">
        <img
          className="loading.png"
          src={require('assets/img/loading.png').default}
        />
        <span className="submitting-your-answ">Submitting your answers...</span>
      </div>
    </div>
  );
}
