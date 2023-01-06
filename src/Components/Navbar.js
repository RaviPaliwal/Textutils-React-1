import React from "react";
import PropTypes from "prop-types";


export default function Navbar(props) {
  const handleonChange = ()=>{
   props.toggleMode(props.mode)
 }
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} py-3`} 
      >
        <div className="container-fluid">
          <a className="navbar-brand text" href="/">
            {props.head}
          </a>
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
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
              <a className="nav-link" href="/">
                About
              </a>
              <a
                className="nav-link"
                href="https://www.linkedin.com/in/ravi-paliwal-233312201"
                tabIndex="-1"
              >
                Linkedin
              </a>
            </div>
          </div>
        </div>
        <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault " onChange={handleonChange}/>
          <label className= {`form-check-label text-${props.mode==='light'?'dark':'light'} mx-2`} htmlFor="flexSwitchCheckDefault">Darkmode</label>
</div>
      </nav>
    </div>
  );
}
Navbar.propTypes = {
  head: PropTypes.string,
};
