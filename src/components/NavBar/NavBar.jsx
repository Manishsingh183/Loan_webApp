import React from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./NavBar.css";

function NavBar() {
    return <Fragment>

<nav className="navbar navbar-expand-md navbar-light bg-light">
  <div className="container-fluid">
    
    <Link id="brandName" className="navbar-brand" to="/">QuickLoan</Link>
    {/* responsive button in mobile view */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <div id="nav-bar-ul">
        <div className="nav-item navListItems">
          <Link className="nav-link navListItems-inner" to="/profile">Profile</Link>
        </div>
        <div className="nav-item navListItems">
          <Link className="nav-link navListItems-inner" to="/request">Your Requests</Link>
        </div>
        
        <div className="nav-item navListItems">
          <Link className="nav-link navListItems-inner" to="/test"><div><AccountCircleIcon /><span  id="account-button"> Ronnie</span></div></Link>
        </div>
      </div>
      
    </div>
  </div>
</nav>

    </Fragment>;
}

export default NavBar;