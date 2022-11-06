import './App.css';
import arrowLeft from './assets/arrowLeft.svg';
import ellipse7 from './assets/ellipse7.svg';
import graduationrafiki from './assets/graduationrafiki.svg';
import researchPapercuate from './assets/researchPapercuate.svg';
import books from './assets/books.svg';
import logoWeavechain from './assets/logoWeavechain.svg';
import NavLoggedin from './components/NavLoggedin';
import TextBtnBack from './components/TextBtnBack';
const App = () => {
  const propsData = {
    navLoggedin: {
      logoWeaveflow: {
        weaveflow: 'Weaveflow',
        logoWeavechain: logoWeavechain,
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
    <div className="num-40-c-survey-3">
      <NavLoggedin
        className="nav-loggedin-instance-1"
        {...propsData.navLoggedin}
      />
      <TextBtnBack
        className="text-btn-back-instance-1"
        {...propsData.textBtnBack}
      />
      <span className="which-level-of-educa">
        Which level of education do you have?
      </span>
      <div className="flex-container">
        <div className="rectangle-3">
          <img className="graduationrafiki" src={graduationrafiki} />
          <span className="high-school">High school</span>
        </div>
        <div className="rectangle-4">
          <img className="books" src={books} />
          <span className="undergrad-school">Undergrad school</span>
        </div>
        <div className="rectangle-5">
          <img className="research-papercuate" src={researchPapercuate} />
          <span className="graduate-school">Graduate school</span>
        </div>
        <div className="rectangle-5-1">
          <span className="prefer-not-to-say">Prefer not to say</span>
        </div>
      </div>
    </div>
  );
};
export default App;
