import React from 'react';
import { Link } from 'react-router';
import logo from '../../images/logo.png';
import SubHead from './SubHead';
const Head = () => {
  const profile = <Link to="/user">প্রোফাইল</Link>;
  const cssLink = "text-shadow-lg/30 text-pretty mb-1 px-2  hover:text-green-300 hover:bg-purple-950 py-3";
const menubar = [
  {
    id: 1,
    nav: "হোম ",
    to: "",
  },
  {
    id: 2,
    nav: "তথ্য ও যোগাযোগপ্রযুক্তি ",
    to: "information",
  },
  {
    id: 3,
    nav: "কমিউনিকেশন ও নেটওয়ার্কিং",
    to: "communication",
  },
  {
    id: 4,
    nav: "সংখ্যাপদ্ধতি",
    to: "numberSystem",
    drop1: "সংখ্যা পদ্ধতি",             
    drop2: "সংখ্যা পদ্ধতি(Numbr System)",             
    drop3: "লজিক গেইট(Logic Gate)",
    to1: "numberSystem",
    to2: "numberSystem/number",
    to3: "numberSystem/logicgate",
  },
  {
    id: 5,
    nav: "ওয়েবডিজাইন",
    to: "web",
    drop1: "ওয়েব ডিজাইন(web design)",
    drop2: "এইচটিএমএল(HTML)",
    drop3: "সিএসএস(CSS)",
    to1: "web",
    to2: "web/html",
    to3: "web/css",
  },
  {
    id: 6,
    nav: "প্রোগ্রামিংভাষা",
    to: "c",
    drop1: "প্রোগ্রামিং ভাষা (Programming Language)",
    drop2: "অ্যালগরিদম(Algorithm)",
    drop3: "ফ্লোচার্ট (Flowchart)",
    drop4: "সি-প্রোগ্রামিং (C-Programming)",
    to1: "c",
    to2: "c/algorithm",
    to3: "c/flowchart",
    to4: "c/program",
  },
  {
    id: 7,
    nav: "ডাটাব্যাজ",
    to: "database",
  },
  {
    id: 8,
    nav: "কলেজ গ্যালারী",
    to: "college",
  },
];
    return (
      <>
        <SubHead />
        <div className="navbar bg-primary shadow-sm text-white uppercase">
          {/* :::::::::::::::::::::::::::::::::::::::
                  small device 
  ::::::::::::::::::::::::::::::::::::::::::*/}
          <div className="navbar-start">
            <button
              className="lg:hidden"
              popoverTarget="popover-1"
              style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}
            >
              <label className="swap swap-rotate swap-filp">
                {/* this hidden checkbox controls the state */}
                <input type="checkbox" />

                {/* hamburger icon */}
                <svg
                  className="swap-off fill-current h-10 w-10 text-yellow-300 font-bold"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 512 512"
                >
                  <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                </svg>

                {/* close icon */}
                <svg
                  className="swap-on fill-current h-10 w-10 text-red-500 font-bold"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 512 512"
                >
                  <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                </svg>
              </label>
            </button>
            <ul
              className="dropdown menu bg-blue-600 z-1 mt-3 w-60 p-2"
              popover="auto"
              id="popover-1"
              style={
                { positionAnchor: "--anchor-1" } /* as React.CSSProperties */
              }
            >
              <li>{profile}</li>
              {menubar.map((mn) => (
                <li key={mn.id}>
                  <Link to={`/${mn?.to}`} className="bg-blue-700 mb-2">
                    {mn.nav}
                  </Link>
                  {mn?.to1 ? (
                    <ul>
                      <li>
                        <Link to={`/${mn?.to1}`}>{mn?.drop1}</Link>
                      </li>
                      <li>
                        {mn?.to2 ? (
                          <Link to={`/${mn?.to2}`}>{mn?.drop2}</Link>
                        ) : (
                          <></>
                        )}
                      </li>
                      <li>
                        {mn?.to3 ? (
                          <Link to={`/${mn?.to3}`}>{mn?.drop3}</Link>
                        ) : (
                          <></>
                        )}
                      </li>
                      <li>
                        {mn?.to4 ? (
                          <Link to={`/${mn?.to4}`}>{mn?.drop4}</Link>
                        ) : (
                          <></>
                        )}
                      </li>
                    </ul>
                  ) : (
                    <></>
                  )}
                </li>
              ))}
            </ul>

            <h1 className="btn btn-primary text-2xl lg:text-3xl text-shadow-lg/80  text-yellow-300 shadow-lg">
              {/* E-ICT College */}
              ই-আইসিটি কলেজ
            </h1>
          </div>

          {/* :::::::::::::::::::::::::::::::::::::::
                  large device 
  ::::::::::::::::::::::::::::::::::::::::::*/}

          <div className="navbar-center hidden lg:flex z-40 top-0">
            <ul className="ml-12 pl-5 menu-horizontal">
              {menubar.map((mn) => (
                <li key={mn.id}>
                  <div className="dropdown dropdown-hover">
                    <div tabIndex={0} role="button"></div>
                    <Link to={`/${mn?.to}`} className={`${cssLink}`}>
                      {mn.nav}
                    </Link>
                    {mn.to1 ? (
                      <ul
                        tabIndex={0}
                        className="dropdown-content menu bg-blue-700 h-50 top-0 mt-5 w-80"
                      >
                        <li>
                          <Link to={`/${mn?.to1}`}>{mn?.drop1}</Link>
                        </li>
                        <li>
                          {mn?.to2 ? (
                            <Link to={`/${mn?.to2}`}>{mn?.drop2}</Link>
                          ) : (
                            <></>
                          )}
                        </li>
                        <li>
                          {mn?.to3 ? (
                            <Link to={`/${mn?.to3}`}>{mn?.drop3}</Link>
                          ) : (
                            <></>
                          )}
                        </li>
                        <li>
                          {mn?.to4 ? (
                            <Link to={`/${mn?.to4}`}>{mn?.drop4}</Link>
                          ) : (
                            <></>
                          )}
                        </li>
                      </ul>
                    ) : (
                      <></>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="navbar-end">
            <div className="w-16 mx-3 hidden lg:flex">{profile}</div>
            <Link to="/" className="text-blue-700 ">
              <img src={logo} alt="ict logo" className="w-16" />
            </Link>
          </div>
        </div>
      </>
    );
};
export default Head;