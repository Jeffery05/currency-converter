import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  // hook (state hook: has data/states that will change over time)
  const [selectedPage, setSelectedPage] = useState(-1); // creates am array with [variable (selected Page), updater function]
  // const [name, setName] = useState('');

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to={"/"}>
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={
                    selectedPage === 0 ? "nav-link active" : "nav-link"
                  }
                  aria-current="page"
                  to={"/"}
                  onClick={() => {
                    setSelectedPage(0);
                  }}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={
                    selectedPage === 1 ? "nav-link active" : "nav-link"
                  }
                  aria-current="page"
                  to={"/tool"}
                  onClick={() => {
                    setSelectedPage(1);
                  }}
                >
                  Tool
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={
                    selectedPage === 2 ? "nav-link active" : "nav-link"
                  }
                  aria-current="page"
                  to={"/result"}
                  onClick={() => {
                    setSelectedPage(2);
                  }}
                >
                  Result
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
