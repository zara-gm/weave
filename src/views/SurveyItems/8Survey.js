/*eslint-disable*/

import React, { useState, useEffect } from 'react';
import './8Survey.css';
import { useHistory } from 'react-router-dom';
import weaveObj from "../../helper/weave";

export default function survey_eight() {

  const [hash, setHash] = useState();

  let history = useHistory();
  const handleClick = () => {
    history.push("/admin");
  }
  useEffect(() =>{
    console.log(weaveObj.getHash());
    weaveObj.state.updateCb = (hash) =>{
      setHash(hash)
    }
  },[])

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
        <span className='mt-3 text-small'>
        The following hash of your data was stored on Polygon - {hash}
        </span>
      </div>
    </div>
  );
}
