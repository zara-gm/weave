import './App.css';
import ellipse7 from './assets/ellipse7.svg';
import banknoterafiki from './assets/banknoterafiki.svg';
import group51 from './assets/group51.svg';
import arrowLeft from './assets/arrowLeft.svg';
import banknoteamico from './assets/banknoteamico.svg';
import logoWeavechain from './assets/logoWeavechain.svg';
import group50 from './assets/group50.svg';
import TextBtnBack from './components/TextBtnBack';
import NavLoggedin from './components/NavLoggedin';
const App = () => {
  const propsData = {
    navLoggedin: {
      logoWeaveflow: {
        logoWeavechain: logoWeavechain,
        weaveflow: 'Weaveflow',
      },
      ox: 'Ox.....',
      ellipse7: ellipse7,
    },
    textBtnBack: {
      arrowLeft: arrowLeft,
      back: 'Back',
    },
  };
  return (
    <div className="num-40-a-survey-1">
      <NavLoggedin
        className="nav-loggedin-instance-1"
        {...propsData.navLoggedin}
      />
      <TextBtnBack
        className="text-btn-back-instance-1"
        {...propsData.textBtnBack}
      />
      <span className="what-is-your-annual">
        What is your annual income in USD?
      </span>
      <div className="flex-container">
        <div className="rectangle-4">
          <img className="group-50" src={group50} />
          <span className="num-100-k">&lt;$100K</span>
        </div>
        <div className="rectangle-5">
          <img className="group-51" src={group51} />
          <span className="num-110-k-150-k">$110K-150K</span>
        </div>
        <div className="rectangle-6">
          <img className="banknoteamico" src={banknoteamico} />
          <span className="num-150-k-250-k">$150K-$250K</span>
        </div>
      </div>
      <div className="flex-container-1">
        <div className="rectangle-7">
          <img className="banknoterafiki" src={banknoterafiki} />
          <span className="num-250-k">&gt;$250K</span>
        </div>
        <div className="rectangle-7-1">
          <span className="prefer-not-to-say">Prefer not to say</span>
        </div>
      </div>
    </div>
  );
};
export default App;
