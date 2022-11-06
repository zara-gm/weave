import './App.css';
import arrowLeft from './assets/arrowLeft.svg';
import logoWeavechain from './assets/logoWeavechain.svg';
import ellipse7 from './assets/ellipse7.svg';
import BtnPrimary from './components/BtnPrimary';
import NavLoggedin from './components/NavLoggedin';
import TextBtnBack from './components/TextBtnBack';
const App = () => {
  const propsData = {
    navLoggedin: {
      logoWeaveflow: {
        weaveflow: 'Weaveflow',
        logoWeavechain: logoWeavechain,
      },
      ellipse7: ellipse7,
      ox: 'Ox.....',
    },
    textBtnBack: {
      back: 'Back',
      arrowLeft: arrowLeft,
    },
    btnPrimary: {
      connectWallet: 'Submit',
    },
  };
  return (
    <div className="num-40-e-survey-5">
      <NavLoggedin
        className="nav-loggedin-instance-1"
        {...propsData.navLoggedin}
      />
      <TextBtnBack
        className="text-btn-back-instance-1"
        {...propsData.textBtnBack}
      />
      <span className="how-many-discord-ser">
        How many Discord servers are you on?
      </span>
      <span className="enter-0-if-you-dont">
        (Enter 0 if you don’t use Discord.)
      </span>
      <div className="rectangle-15">i.e. 5</div>
      <BtnPrimary
        className="btn-primary-instance-1"
        {...propsData.btnPrimary}
      />
      <span className="prefer-not-to-say">Prefer not to say</span>
    </div>
  );
};
export default App;
