/*eslint-disable*/

import React from 'react';
import './1SurveyVoting.css';

export default function survey_first() {
  return (
    <div className="num-30-b-voting">
      <img
        className="vote"
        src={require('assets/img/vote-outline.png').default}
      />
      <span className="we-are-decentralizin">
        We are decentralizing ops of Twitter, now you get to cast your first
        vote!
      </span>
      <span className="do-you-agree-with-el">
        Do you agree with Elon’s $8 verification on Twitter?
      </span>
      <div className="flex-container">
        <div className="rectangle-3">
          <img
            className="vote"
            src={require('assets/img/emoticon-happy-outline.png').default}
          />
          <span className="yes">Yes</span>
        </div>
        <div className="rectangle-4">
          <img
            className="vote"
            src={require('assets/img/emoticon-sad-outline.png').default}
          />{' '}
          <span className="no">No</span>
        </div>
        <div className="rectangle-4-1">
          <img
            className="vote"
            src={require('assets/img/emoticon-neutral-outline.png').default}
          />
          <span className="i-dont-care">I don’t care</span>
        </div>
      </div>
    </div>
  );
}
