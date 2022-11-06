import './App.css';
import logoWeavechain from './assets/logoWeavechain.svg';
import ellipse7 from './assets/ellipse7.svg';
import loadingpana from './assets/loadingpana.svg';
import NavLoggedin from './components/NavLoggedin';
const App = () => {
  const propsData = {
    navLoggedin: {
      logoWeaveflow: {
        logoWeavechain: logoWeavechain,
        weaveflow: 'Weaveflow',
      },
      ellipse7: ellipse7,
      ox: 'Ox.....',
    },
  };
  return (
    <div className="num-40-f-submitting">
      <NavLoggedin
        className="nav-loggedin-instance-1"
        {...propsData.navLoggedin}
      />
      <div className="rectangle-3">
        <img className="loadingpana" src={loadingpana} />
        <span className="submitting-your-answ">Submitting your answers...</span>
      </div>
    </div>
  );
};
export default App;
