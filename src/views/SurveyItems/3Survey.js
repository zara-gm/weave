/*eslint-disable*/

import React from 'react';
import './3Survey.css';
import { useHistory } from 'react-router-dom';

import weaveObj from "../../helper/weave";


export default function survey_three() {
  let history = useHistory();
  const handleVote = (value) =>{
    weaveObj.state.votes.push(value);
    console.log(weaveObj.state.votes)
      history.push("/survey/4");
  }
  return (
    
    <div className="num-40-a-survey-1">
      <span className="which-region-have-yo">
        In which region have you spent the most time over the past 6 months?
      </span>
      <div className="flex-container-2">
         <div className="container px-4 mx-auto">
           <div className="flex flex-wrap">
            <div className="w-full px-4 flex-1 cursor-pointer" onClick={() => handleVote(1)}>
              <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100">
              <div className="flex items-center pl-4 rounded">
              <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label className="py-4 ml-2 w-full text-lg">North America</label>
        </div>
      </span>
    </div>
    <div className="w-full px-4 flex-1 cursor-pointer" onClick={() => handleVote(2)}>
    <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100">
              <div className="flex items-center pl-4 rounded">
              <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label className="py-4 ml-2 w-full text-lg">South America</label>
        </div>
      </span>
    </div>
  </div>
</div>
</div>
<div className="flex-container-2">
<div className="container px-4 mx-auto">
           <div className="flex flex-wrap">
            <div className="w-full px-4 flex-1 cursor-pointer" onClick={() => handleVote(3)}>
              <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100">
              <div className="flex items-center pl-4 rounded">
              <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label className="py-4 ml-2 w-full text-lg">Latin america & Caribbean</label>
        </div>
      </span>
    </div>
    <div className="w-full px-4 flex-1 cursor-pointer" onClick={() => handleVote(4)}>
    <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100">
              <div className="flex items-center pl-4 rounded">
              <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label className="py-4 ml-2 w-full text-lg">Africa</label>
        </div>
      </span>
    </div>
  </div>
</div>
</div>
<div className="flex-container-2">
<div className="container px-4 mx-auto">
           <div className="flex flex-wrap">
            <div className="w-full px-4 flex-1 cursor-pointer"  onClick={() => handleVote(5)}>
              <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100">
              <div className="flex items-center pl-4 rounded">
              <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label className="py-4 ml-2 w-full text-lg">Europe</label>
        </div>
      </span>
    </div>
    <div className="w-full px-4 flex-1 cursor-pointer"  onClick={() => handleVote(6)}>
    <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100">
              <div className="flex items-center pl-4 rounded">
              <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label className="py-4 ml-2 w-full text-lg">Middle East</label>
        </div>
      </span>
    </div>
  </div>
</div>
</div>
<div className="flex-container-2">
<div className="container px-4 mx-auto">
           <div className="flex flex-wrap">
            <div className="w-full px-4 flex-1 cursor-pointer" onClick={() => handleVote(7)}>
              <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100">
              <div className="flex items-center pl-4 rounded">
              <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label className="py-4 ml-2 w-full text-lg">Asia</label>
        </div>
      </span>
    </div>
    <div className="w-full px-4 flex-1 cursor-pointer" onClick={() => handleVote(null)}>
    <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100">
              <div className="flex items-center pl-4 rounded">
              <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label className="py-4 ml-2 w-full text-lg">Prefer not to say</label>
        </div>
      </span>
    </div>
  </div>
</div>
      </div>
    </div>
  );
}
