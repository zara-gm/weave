import React, { useState, useEffect } from "react";

import weaveObj from "../../helper/weave"; 
// components

import CardStats from "components/Cards/CardStats.js";

export default function HeaderStats() {

const [annualIncome, setAnnualIncome] = useState();

const [discordServers, setDiscordServers] = useState();

const [twitterFollowers, setTwitterFollowers] = useState();

const [yesRatio, setYesRatio] = useState();

useEffect(() =>{
  weaveObj.computeAvg([ 'annual_income_enum', 'twitter_followers', 'discord_servers' ]).then((res) => {
    if(res) {
      setAnnualIncome(Math.round(res['annual_income_enum']))
      setDiscordServers(Math.round(res['discord_servers']))
      setTwitterFollowers(Math.round(res['twitter_followers']))
    } else {
      setAnnualIncome('-');
      setDiscordServers('-');
      setTwitterFollowers('-');
    }
  });

  weaveObj.computeCountsBy([ 'vote_twitter_8' ]).then((res) => {
    if(res) {
      const yes = res[1];
      const no = res[2];
      setYesRatio(Math.round(100 * yes / (yes + no)) + "%");
    } else {
      setYesRatio('-');
    }
  });

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
                  statSubtitle="Avg Annual Income"
                  statTitle={annualIncome}
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Avg Twitter Followers"
                  statTitle={twitterFollowers}
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Avg Discord Servers"
                  statTitle={discordServers}
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Yes Ratio"
                  statTitle={yesRatio}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
