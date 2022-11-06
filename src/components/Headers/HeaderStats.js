import React, { useState, useEffect } from "react";

import weaveObj from "../../helper/weave"; 
// components

import CardStats from "components/Cards/CardStats.js";

export default function HeaderStats() {

let computeList = ['annual_income_enum']

const [annualIncome, setAnnualIncome] = useState();

const [discordServer, setDiscordServer] = useState();

useEffect(() =>{
  weaveObj.compute('annual_income_enum');
  weaveObj.state.updateCb = (res) => {
      if(res) {
        setAnnualIncome(Math.round(res['annual_income_enum']))
      } else {
        setAnnualIncome('-');
      }
    }
},[])
 
  return (
    <>
      {/* Header */}
      <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Average Annual Income"
                  statTitle={annualIncome}
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Average Discord Servers"
                  statTitle={discordServer}
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="SALES"
                  statTitle="924"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="PERFORMANCE"
                  statTitle="49,65%"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
