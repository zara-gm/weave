/*eslint-disable*/
import React, { useEffect} from 'react';
import { Link } from 'react-router-dom';

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import FooterSmall from "components/Footers/FooterSmall.js";
import weaveObj from "../helper/weave";
import Popup from "components/Popup";

import { useHistory } from 'react-router-dom';

export default function Index() {
  const [showConnectBtn, setShowConnectBtn] = React.useState(true);
  const [showPopup, setShowPopup] = React.useState(false);
  const [showSurveyBtn, setShowSurveyBtn] = React.useState(false);
  const [showPOAPLabel, setShowPOAPLabel] = React.useState(false);
  let history = useHistory();

  weaveObj.state.updateCb = () => {
    if(weaveObj.state.credentials){
      setShowConnectBtn(false);
    }
    if(weaveObj.state.Session){
      if(weaveObj.state.Session.scopes.length) {
        setShowSurveyBtn(true);
        setShowPOAPLabel(false)
      } else {
        setShowSurveyBtn(false);
        setShowPOAPLabel(true)
      }
    
    }
  };

  useEffect(() =>{
    if(weaveObj.state.credentials && Object.keys(weaveObj.state.credentials).length) {
      setShowConnectBtn(false);
    }
    if(weaveObj.state.Session && weaveObj.state.Session.scopes.length) {
      setShowSurveyBtn(true);
      setShowPOAPLabel(false)
    }
  },[])
  const getPOAP = () => {
    //window.open('https://poap.weavechain.com/weaveflowethsf22', '_blank', 'location=yes,scrollbars=yes,status=yes');
    setShowPopup(true);
  }
  const beginSurvey = () => {
    history.push("/survey");
  }
  const closePopup = () => {
    setShowPopup(false);
    const resp = weaveObj.login();
    resp.then((resObj) => {
      if(resObj.session.scopes.length) {
        setShowSurveyBtn(true);
      setShowPOAPLabel(false)
      }
    })
  }
  return (
    <>
      <IndexNavbar fixed />
      <section className="header relative pt-16 items-center flex h-screen max-h-500-px ]0">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-blueGray-600">
              Enabling trust in confidential computing with data lineage stored in blockchain
              </h2>
              <div className="mt-12">
                {showConnectBtn ? (
                <button
                  onClick={() => weaveObj.connect()}
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Connect wallet to get started
                </button>
                ) : (
                  <>
                  {showPOAPLabel ? <h3 className="mb-2"><b>Mint Your POAP to begin survey</b></h3> : "" }
                  {showSurveyBtn ? (
                     <button
                     onClick={() => beginSurvey()}
                       className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                     >
                      Cast your vote
                     </button>
                  ) : (
                  <button
                  onClick={() => getPOAP()}
                    className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                  >
                    Get POAP
                  </button>)
}
                  </>
                )
}
              </div>
            </div>
          </div>
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <img src={require('assets/img/hero-section.png').default} />
            </div>
          </div>
        </div>
      </section>
      <div
        style={{
          backgroundImage:
            'url(' + require('assets/img/Rectangle-bg.png').default + ')',
        }}
      >
        <section className="max-h-500-px pt-16">
          <div className="container mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-xl"
                  src={require('assets/img/rafiki.png').default}
                />
              </div>
              <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
                <div className="ml-3">
                  <h3 className="text-3xl font-semibold">Why Secret Weavers?</h3>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                            <i className="fas fa-fingerprint"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                            Multi party computing
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                            <i className="fab fa-html5"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">Data privacy</h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                            <i className="far fa-paper-plane"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                           Confidential computing
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                            <i className="far fa-paper-plane"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                            Data lineage
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                            <i className="far fa-paper-plane"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                            DeSci
                          </h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="justify-center text-center flex flex-wrap mt-14">
            <div className="w-full md:w-6/12 px-12 md:px-4 mb-5">
              <h2 className="font-semibold text-4xl">Use cases</h2>
            </div>
          </div>
        </section>

        <section className="block relative z-1">
          <div className="container mx-auto">
            <div className="justify-center">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                  <div className="px-6">
                    <img
                      alt="..."
                      src={
                        require('assets/img/account-group-outline.png').default
                      }
                      className="shadow-lg rounded-full mx-auto max-w-120-px"
                    />
                    <div className="pt-6 text-center">
                      <h5 className="text-xl font-bold">Dao voting</h5>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                  <div className="px-6">
                    <img
                      alt="..."
                      src={require('assets/img/text-account.png').default}
                      className="shadow-lg rounded-full mx-auto max-w-120-px"
                    />
                    <div className="pt-6 text-center">
                      <h5 className="text-xl font-bold">
                        Adtech with zero-party data
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                  <div className="px-6">
                    <img
                      alt="..."
                      src={require('assets/img/vote-outline.png').default}
                      className="shadow-lg rounded-full mx-auto max-w-120-px"
                    />
                    <div className="pt-6 text-center">
                      <h5 className="text-xl font-bold">
                        Community-driven eCommerce
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                  <div className="px-6">
                    <img
                      alt="..."
                      src={require('assets/img/amico.png').default}
                      className="shadow-lg rounded-full mx-auto max-w-120-px"
                    />
                    <div className="pt-6 text-center">
                      <h5 className="text-xl font-bold">DeSci</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <FooterSmall />
      {
        showPopup ? (<div className="popup_page">
          <div className="fragment">
        <span id='close' className="bg-lightBlue-500" onClick={() => closePopup()}>x</span>
        <h2 className="text-center">Mint your POAP to begin voting</h2>

            <Popup
              text=''
          />
        </div>
    </div>) : ''
      }
    </>
  );
}
