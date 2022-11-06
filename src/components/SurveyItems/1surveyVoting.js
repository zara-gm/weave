import './App.css';
import emoticonSadOutline from './assets/emoticonSadOutline.svg';
import emoticonNeutralOut from './assets/emoticonNeutralOut.svg';
import logoWeavechain from './assets/logoWeavechain.svg';
import vote from './assets/vote.svg';
import ellipse7 from './assets/ellipse7.svg';
import emoticonHappyOutli from './assets/emoticonHappyOutli.svg';
import NavLoggedin from './components/NavLoggedin';
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
  };
  return (
    <div className="num-30-b-voting">
      <NavLoggedin
        className="nav-loggedin-instance-1"
        {...propsData.navLoggedin}
      />
      <img className="vote" src={vote} />
      <span className="we-are-decentralizin">
        We are decentralizing ops of Twitter, now you get to cast your first
        vote!
      </span>
      <span className="do-you-agree-with-el">
        Do you agree with Elon’s $8 verification on Twitter?
      </span>
      <div className="flex-container">
        <div className="rectangle-3">
          <img className="emoticon-happy-outli" src={emoticonHappyOutli} />
          <span className="yes">Yes</span>
        </div>
        <div className="rectangle-4">
          <img className="emoticon-sad-outline" src={emoticonSadOutline} />
          <span className="no">No</span>
        </div>
        <div className="rectangle-4-1">
          <img className="emoticon-neutral-out" src={emoticonNeutralOut} />
          <span className="i-dont-care">I don’t care</span>
        </div>
      </div>
    </div>
  );
};
export default App;
