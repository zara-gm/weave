import './App.css';
import cogOutline from './assets/cogOutline.svg';
import viewDashboardOutli from './assets/viewDashboardOutli.svg';
import pieChartSvgrepoCo from './assets/pieChartSvgrepoCo.svg';
import countries from './assets/countries.svg';
import menuDown1 from './assets/menuDown1.svg';
import menuDown2 from './assets/menuDown2.svg';
import union from './assets/union.svg';
import logoWeavechain from './assets/logoWeavechain.svg';
import chartDataPoints from './assets/chartDataPoints.svg';
import ellipse7 from './assets/ellipse7.svg';
import menuDown from './assets/menuDown.svg';
import PanelDashboard from './components/PanelDashboard';
const App = () => {
  const propsData = {
    panelDashboard: {
      viewDashboardOutli: viewDashboardOutli,
      logoWeaveflow: {
        logoWeavechain: logoWeavechain,
        weaveflow: 'Weaveflow',
      },
      num0XAddress: {
        ox: 'Ox.....',
        ellipse7: ellipse7,
      },
      dashboard: 'Dashboard',
      settings: 'Settings',
      cogOutline: cogOutline,
    },
  };
  return (
    <div className="num-50-a-dashboard">
      <PanelDashboard
        className="panel-dashboard-instance-1"
        {...propsData.panelDashboard}
      />
      <div className="flex-container">
        <span className="insights-analytics">Insights &amp; analytics</span>
        <div className="flex-container-1">
          <div className="rectangle-4">
            <span className="individual-questions">Individual questions</span>
            <div className="rectangle-64">
              <span className="question-1-what-is-y">
                Question #1: What is your annual income?
              </span>
              <img className="menu-down" src={menuDown} />
            </div>
            <img className="pie-chart-svgrepo-co" src={pieChartSvgrepoCo} />
          </div>
          <div className="rectangle-3">
            <span className="geo-location">Geo-location</span>
            <span className="where-is-everyone-fr">
              Where is everyone from?
            </span>
            <div className="flex-container-2">
              <img className="countries" src={countries} />
              <div className="cat-absolute-container">
                <div className="cat-absolute-container-1">
                  <span className="num-24-in-north-ameri">
                    24% in North America{' '}
                  </span>
                </div>
                <img className="union" src={union} />
              </div>
            </div>
          </div>
        </div>
        <div className="rectangle-5">
          <span className="data-visualization">Data visualization</span>
          <div className="flex-container-3">
            <div className="rectangle-64-1">
              <span># Twitter followers</span>
              <img className="menu-down-1" src={menuDown1} />
            </div>
            <span className="vs">vs</span>
            <div className="rectangle-64-2">
              <span className="of-discord-servers"># of Discord servers</span>
              <img className="menu-down-2" src={menuDown2} />
            </div>
            <span className="total">Total</span>
            <span className="average">Average</span>
            <span className="min">Min</span>
            <span className="max">Max</span>
            <span className="correlation">Correlation</span>
            <span className="linear-regression">Linear regression</span>
          </div>
          <div className="flex-container-4">
            <span className="of-twitter-followers"># of Twitter followers</span>
            <img className="chart-data-points" src={chartDataPoints} />
          </div>
          <span className="of-discord-servers-1"># of Discord servers</span>
        </div>
      </div>
    </div>
  );
};
export default App;
