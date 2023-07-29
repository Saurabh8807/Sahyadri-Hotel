import React, { useEffect, useState } from 'react';
import './Navbar.css';
import Logo from './logo.png';
import LogoH from './logoH.png';
import LogoA from './logoA.png';
import LogoR from './logoR.png';
import LogoP from './logoP.png';
import LogoF from './logoF.png';
import LogoC from './logoC.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Navbar({ isAuthenticated, onLogout }) {
  let navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    onLogout();
    window.location.reload();
  };

  const toggleNavbar = () => {
    setIsExpanded(!isExpanded);
  };

  const renderAuthButtons = () => {
    if (isAuthenticated) {
      return (
        <li className="nav-item">
          <button type="button" id="navbarSignOut" onClick={handleLogout} className="btn btn-primary">
            Sign Out
          </button>
        </li>
      );
    } else {
      return (
        <li className="nav-item">
          <Link to="/signin" className="nav-link active" aria-current="page">
            <button type="button" id="navbarSignIn" className="btn btn-primary">
              Sign In
            </button>
          </Link>
        </li>
      );
    }
  };

  return (
    <div className={`navbar navbar1 fixed-top ${isExpanded ? 'expanded' : ''}`}>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link to="/user/home" className="navbar-brand" href="#">
            <div className="logo-container">
              <img src={Logo} alt="logo" height="70px" style={{ marginRight: '2px', marginLeft: '-20px' }} />
            </div>
          </Link>
          <button
            className={`navbar-toggler ${isExpanded ? 'expanded' : ''}`}
            type="button"
            onClick={toggleNavbar}
            aria-expanded={isExpanded}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isExpanded ? 'show' : ''}`}>
            <div className="navItems">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/user/home" onClick={toggleNavbar}  className="nav-link active" aria-current="page">
                    <img src={LogoH} alt="logo" height="30px" />
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/user/about" onClick={toggleNavbar} className="nav-link active" aria-current="page">
                    <img src={LogoA} alt="logo" height="45px" />
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/user/reservation" onClick={toggleNavbar}  className="nav-link active" aria-current="page">
                    <img src={LogoR} alt="logo" height="45px" style={{ marginLeft: '20px' }} />
                    Reservation
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/user/photos" onClick={toggleNavbar} className="nav-link active" aria-current="page">
                    <img src={LogoP} alt="logo" height="40px" />
                    Photos
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/user/restaurant" onClick={toggleNavbar} className="nav-link active" aria-current="page">
                    <img src={LogoF} alt="logo" height="45px" style={{ marginLeft: '8px' }} />
                    Restaurant
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/user/contact" onClick={toggleNavbar} className="nav-link active" aria-current="page">
                    <img src={LogoC} alt="logo" height="30px" />
                    Contact
                  </Link>
                </li>
                {renderAuthButtons()}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
