import React, {useEffect, useState} from "react";
import Chart from "chart.js";
import weaveObj from "../../helper/weave";


export default function CardBarChart() {
  const [yesCount, setYesCount] = useState([]);
  const [noCount, setNoCount] = useState([]);

  useEffect(() => {
    weaveObj.computeCountsBy([ 'region_enum' ]).then((res) => {
      const counts = res;
      weaveObj.computeSumBy([ 'region_enum', 'vote_twitter_8' ]).then((res) => {
        if (res) {
          const yesCnt = {};
          const noCnt = {};
          for (let i = 0; i < Object.keys(counts).length; i++) {
            const region = Object.keys(counts)[i];
            const val = res[region] - counts[region];
            const no = val;
            const yes = counts[region] - no;

            //const ratio = Math.round(100 * yes / (yes + no));
            yesCnt[region] = yes;
            noCnt[region] = no;
          }

          console.log(123)
          setYesCount(yesCnt);
          setNoCount(noCnt);
        } else {
          setYesCount(0);
          setNoCount(0);
        }
      });
    });
  },[])



  React.useEffect(() => {
    let config = {
      type: "bar",
      data: {
        labels: [
          "North America",
          "South America",
          "Latin America & Caribbean",
          "Africa",
          "Europe",
          "Middle East",
          "Asia",
          "Unknown"
        ],
        datasets: [
          {
            label: "Yes",
            backgroundColor: "#ed64a6",
            borderColor: "#ed64a6",
            data: Object.values(yesCount),
            fill: false,
            barThickness: 8,
          },
          {
            label: "No",
            fill: false,
            backgroundColor: "#4c51bf",
            borderColor: "#4c51bf",
            data: Object.values(noCount),
            barThickness: 8,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: "Orders Chart",
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        legend: {
          labels: {
            fontColor: "rgba(0,0,0,.4)",
          },
          align: "end",
          position: "bottom",
        },
        scales: {
          xAxes: [
            {
              display: false,
              scaleLabel: {
                display: true,
                labelString: "Month",
              },
              gridLines: {
                borderDash: [2],
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.3)",
                zeroLineColor: "rgba(33, 37, 41, 0.3)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
          yAxes: [
            {
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Value",
              },
              gridLines: {
                borderDash: [2],
                drawBorder: false,
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.2)",
                zeroLineColor: "rgba(33, 37, 41, 0.15)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
        },
      },
    };
    let ctx = document.getElementById("bar-chart").getContext("2d");
    window.myBar = new Chart(ctx, config);
  }, [ yesCount, noCount ]);
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h6 className="uppercase text-blueGray-400 mb-1 text-xs font-semibold">
                Votes
              </h6>
              <h2 className="text-blueGray-700 text-xl font-semibold">
                By region
              </h2>
            </div>
          </div>
        </div>
        <div className="p-4 flex-auto">
          {/* Chart */}
          <div className="relative h-350-px">
            <canvas id="bar-chart"></canvas>
          </div>
        </div>
      </div>
    </>
  );
}
