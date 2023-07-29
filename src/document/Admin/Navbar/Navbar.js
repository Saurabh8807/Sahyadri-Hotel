import React, { useEffect, useState } from 'react';
import './Navbar.css';
import Logo from './logo.png';

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
            Sign In
          </button>
        </li>
      );
    } else {
      return (
        <li className="nav-item">
          <Link to="/signin" className="nav-link active" aria-current="page">
            <button type="button"  onClick={handleLogout} id="navbarSignIn" className="btn btn-primary">
              Sign Out
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
            <div className="navItems navItems2">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/admin/dashboard" onClick={toggleNavbar}  className="nav-link active" aria-current="page">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/admin/users" onClick={toggleNavbar} className="nav-link active" aria-current="page">
                    Users
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/admin/rooms" onClick={toggleNavbar}  className="nav-link active" aria-current="page">
                    Rooms
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/admin/bookings" onClick={toggleNavbar} className="nav-link active" aria-current="page">
                    Bookings
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/admin/tableRequest" onClick={toggleNavbar} className="nav-link active" aria-current="page">
                    Tables
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
