/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import FooterSmall from "components/Footers/FooterSmall.js";
import weave from "../helper/weave";

export default function Index() {
  const w = new weave();
  return (
    <>
      <IndexNavbar fixed />
      <section className="header relative pt-16 items-center flex h-screen max-h-500-px bg-lightBlue-200">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-blueGray-600">
                Get actionable insights with our world class confidential computing power
              </h2>
              <div className="mt-12">
                <button
                onClick={() => w.connect()}
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Connect wallet to get started
                </button>
              </div>
            </div>
          </div>
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
            <img
          src={require('assets/img/hero-section.png').default}
        />
            </div>
          </div>
        </div>
      </section>
      <div  style={{
              backgroundImage:
                "url(" + require("assets/img/Rectangle-bg.png").default + ")",
            }}>
      <section className="max-h-500-px pt-16">
        <div className="container mx-auto">
          <div className="items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
              <img
                alt="..."
                className="max-w-full rounded-lg shadow-xl"
                src={require("assets/img/rafiki.png").default}
              />
            </div>
            <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
              <div className="ml-3">
                <h3 className="text-3xl font-semibold">
                  Why WeaveFlow?
                </h3>
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
                          Governance for DAO admins
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
                        <h4 className="text-blueGray-500">
                          Data privacy
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
                         Vote confidently without bias
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
                         Analytics & insights
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
                    src={require("assets/img/account-group-outline.png").default}
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Dao voting</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                    Dao members can vote on important issues TBF
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={require("assets/img/text-account.png").default}
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Adtech with zero-party data</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                    Run ads with
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={require("assets/img/vote-outline.png").default}
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Community-driven eCommerce</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                    Members can curate TBD
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={require("assets/img/amico.png").default}
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">DeSci</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Decentralize Science
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
      <FooterSmall/>
    </>
  );
}
