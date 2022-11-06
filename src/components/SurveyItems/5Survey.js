import './App.css';
import arrowLeft from './assets/arrowLeft.svg';
import ellipse7 from './assets/ellipse7.svg';
import arrowLeft1 from './assets/arrowLeft1.svg';
import logoWeavechain from './assets/logoWeavechain.svg';
import NavLoggedin from './components/NavLoggedin';
import TextBtnBack from './components/TextBtnBack';
import BtnPrimary from './components/BtnPrimary';
const App = () => {
  const propsData = {
    navLoggedin: {
      ellipse7: ellipse7,
      logoWeaveflow: {
        logoWeavechain: logoWeavechain,
        weaveflow: 'Weaveflow',
      },
      ox: 'Ox.....',
    },
    textBtnBack: {
      back: 'Back',
      arrowLeft: arrowLeft,
    },
    textBtnBack1: {
      arrowLeft: arrowLeft,
      back: 'Back',
    },
    btnPrimary: {
      connectWallet: 'Continue',
    },
  };
  return (
    <div className="num-40-d-survey-4">
      <NavLoggedin
        className="nav-loggedin-instance-1"
        {...propsData.navLoggedin}
      />
      <TextBtnBack
        className="text-btn-back-instance-1"
        {...propsData.textBtnBack}
      />
      <span className="how-many-twitter-fol">
        How many Twitter followers do you have?
      </span>
      <span className="enter-0-if-you-dont">
        (Enter 0 if you don’t have a Twitter account.)
      </span>
      <div className="flex-container">
        <div className="rectangle-15">i.e. 5</div>
        <TextBtnBack
          className="text-btn-back-1-instance"
          {...propsData.textBtnBack1}
        />
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
