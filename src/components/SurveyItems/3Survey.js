import './App.css';
import ellipse7 from './assets/ellipse7.svg';
import logoWeavechain from './assets/logoWeavechain.svg';
import arrowLeft from './assets/arrowLeft.svg';
import radiobtnNonSelecte from './assets/radiobtnNonSelecte.svg';
import radiobtnNonSelecte2 from './assets/radiobtnNonSelecte2.svg';
import radiobtnNonSelecte3 from './assets/radiobtnNonSelecte3.svg';
import radiobtnNonSelecte5 from './assets/radiobtnNonSelecte5.svg';
import radiobtnNonSelecte1 from './assets/radiobtnNonSelecte1.svg';
import radiobtnNonSelecte4 from './assets/radiobtnNonSelecte4.svg';
import radiobtnSelected from './assets/radiobtnSelected.svg';
import BtnPrimary from './components/BtnPrimary';
import NavLoggedin from './components/NavLoggedin';
import TextBtnBack from './components/TextBtnBack';
const App = () => {
  const propsData = {
    navLoggedin: {
      ellipse7: ellipse7,
      ox: 'Ox.....',
      logoWeaveflow: {
        logoWeavechain: logoWeavechain,
        weaveflow: 'Weaveflow',
      },
    },
    textBtnBack: {
      arrowLeft: arrowLeft,
      back: 'Back',
    },
    btnPrimary: {
      connectWallet: 'Continue',
    },
  };
  return (
    <div className="num-40-b-survey-2">
      <NavLoggedin
        className="nav-loggedin-instance-1"
        {...propsData.navLoggedin}
      />
      <TextBtnBack
        className="text-btn-back-instance-1"
        {...propsData.textBtnBack}
      />
      <span className="which-region-have-yo">
        Which region have you spent most time in the past 6 months?
      </span>
      <div className="flex-container">
        <img className="radiobtn-non-selecte" src={radiobtnNonSelecte} />
        <span className="north-america">North America</span>
        <img className="radiobtn-selected" src={radiobtnSelected} />
        <span className="south-asia">South Asia</span>
      </div>
      <div className="flex-container-1">
        <img className="radiobtn-non-selecte-1" src={radiobtnNonSelecte1} />
        <span className="latin-america-carib">
          Latin America &amp; Caribbean
        </span>
        <img className="radiobtn-non-selecte-4" src={radiobtnNonSelecte4} />
        <span className="sub-saharan-africa">Sub-Saharan Africa</span>
      </div>
      <div className="flex-container-2">
        <img className="radiobtn-non-selecte-2" src={radiobtnNonSelecte2} />
        <span className="europe-central-asia">Europe &amp; Central Asia</span>
        <img className="radiobtn-non-selecte-5" src={radiobtnNonSelecte5} />
        <span className="east-asia-pacific">East Asia &amp; Pacific</span>
      </div>
      <div className="flex-container-3">
        <img className="radiobtn-non-selecte-3" src={radiobtnNonSelecte3} />
        <span className="middle-east-north-a">
          Middle East &amp; North Africa
        </span>
      </div>
      <BtnPrimary
        className="btn-primary-instance-1"
        {...propsData.btnPrimary}
      />
      <span className="prefer-not-to-say">Prefer not to say</span>
    </div>
  );
};
export default App;
