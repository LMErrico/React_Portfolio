import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <div className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#BCD2EE' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center">
       <div>
         <h1 style={{ color: '#1E2749', textAlign: 'left', fontFamily: 'Cursive', fontWeight: 'bold' }}>
          Lina Errico
        </h1>
       </div>
    <nav className="collapse navbar-collapse space-x-4" id="navbarNav">
      <ul className="flex navbar-nav" style={{ marginLeft: 'auto' }}>
        <li className="nav-item p-2">
          <Link
            to="/"
            className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
            style={{ color: '#1E2749' }}
          >
            About Me
          </Link>
        </li>
        <li className="nav-item p-2">
          <Link
            to="/Portfolio"
            className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
            style={{ color: '#1E2749' }}
          >
            Portfolio
          </Link>
        </li>
        <li className="nav-item p-2">
          <Link
            to="/Contact"
            className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
            style={{ color: '#1E2749' }}
          >
            Contact
          </Link>
        </li>
        <li className="nav-item p-2">
          <Link
            to="/Resume"
            className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
            style={{ color: '#1E2749' }}
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
