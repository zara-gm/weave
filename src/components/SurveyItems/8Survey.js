import './App.css';
import ellipse7 from './assets/ellipse7.svg';
import celebrationrafiki from './assets/celebrationrafiki.svg';
import logoWeavechain from './assets/logoWeavechain.svg';
import NavLoggedin from './components/NavLoggedin';
import BtnPrimary from './components/BtnPrimary';
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
    btnPrimary: {
      connectWallet: 'Go to dashboard',
    },
  };
  return (
    <div className="num-40-g-submission-su">
      <NavLoggedin
        className="nav-loggedin-instance-1"
        {...propsData.navLoggedin}
      />
      <div className="rectangle-3">
        <img className="celebrationrafiki" src={celebrationrafiki} />
        <span className="success">Success!</span>
        <span className="check-out-our-dashbo">
          Check out our dashboard for analytics and insights!
        </span>
        <BtnPrimary
          className="btn-primary-instance-1"
          {...propsData.btnPrimary}
        />
      </div>
    </div>
  );
};
export default App;
