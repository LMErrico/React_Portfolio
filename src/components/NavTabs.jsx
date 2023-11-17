import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#BCD2EE' }}>
      <div className="container">
        <h1 style={{ color: '#1E2749' }}>
          Lina M. Errico
        </h1>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/"
                className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                style={{ color: '#1E2749' }}
              >
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Portfolio"
                className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
                style={{ color: '#1E2749' }}
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Contact"
                className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
                style={{ color: '#1E2749' }}
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Resume"
                className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
                style={{ color: '#1E2749' }}
              >
                Resume
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavTabs;
