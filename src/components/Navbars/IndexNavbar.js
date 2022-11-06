/*eslint-disable*/
import React from 'react';
import { Link } from 'react-router-dom';
// components


import weave from '../../helper/weave';


export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const w = new weave();
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link to="/">WeaveFlow</Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              'lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none' +
              (navbarOpen ? ' block' : ' hidden')
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <button
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                  type="submit"
                  onClick={() => w.connect()}
                >
                  Connect Wallet
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
