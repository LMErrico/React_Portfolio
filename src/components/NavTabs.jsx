import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function NavTabs() {
  const currentPage = useLocation().pathname;

  const linkStyle = {
    color: '#1E2749',
    textDecoration: 'none',
    padding: '8px',
    borderRadius: '5px',
  };

  const activeLinkStyle = {
    backgroundColor: '#1E2749',
    color: '#BCD2EE',
  };

  return (
    <div className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#BCD2EE' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center">
        <div>
          <h1 style={{ color: '#1E2749', textAlign: 'left', fontFamily: 'Cursive', fontWeight: 'bold' }}>
            Lina Errico
          </h1>
        </div>
        <nav className="space-x-4" id="navbarNav">
          <ul className="flex navbar-nav" style={{ marginLeft: 'auto' }}>
            <li className="nav-item p-2">
              <Link
                to="/"
                className="nav-link"
                style={{ ...linkStyle, ...(currentPage === '/' && activeLinkStyle) }}
              >
                About Me
              </Link>
            </li>
            <li className="nav-item p-2">
              <Link
                to="/Portfolio"
                className="nav-link"
                style={{ ...linkStyle, ...(currentPage === '/Portfolio' && activeLinkStyle) }}
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item p-2">
              <Link
                to="/Contact"
                className="nav-link"
                style={{ ...linkStyle, ...(currentPage === '/Contact' && activeLinkStyle) }}
              >
                Contact
              </Link>
            </li>
            <li className="nav-item p-2">
              <Link
                to="/Resume"
                className="nav-link"
                style={{ ...linkStyle, ...(currentPage === '/Resume' && activeLinkStyle) }}
              >
                Resume
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default NavTabs;



