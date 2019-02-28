import React from 'react'
import { Link } from "react-router-dom";

function NavBar () {
    return (
        <header className="container">
        {/* <!-- Fixed navbar --> */}
        <nav className="navbar navbar-expand-md navbar-light fixed-top bg-light pt-0 pb-0 mt-0 mb-0 border-bottom border-secondary">
          <a className="logo navbar-brand col-8 col-md-3 offset-md-1 pt-3 pb-3 mt-0 mb-0 text-center" href="/">Edward Einfeld</a>
          <button className="navbar-toggler col-2" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse col-md-3 offset-md-4 " id="navbarCollapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className={window.location.pathname === "/" ? "nav-link active" : "nav-link"} to="/">About</Link>
              </li>
              <li className="nav-item">
                <Link className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"} to="/portfolio">Portfolio</Link>
              </li>
              <li className="nav-item">
                <Link className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"} to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    )
}

export default NavBar