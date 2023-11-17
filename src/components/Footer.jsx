import React from 'react';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#BCD2EE', textAlign: 'center', padding: '5px' }}>
      <p>
        <a href="https://github.com/LMErrico" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github" style={{ color: '#1E2749', fontSize: '2em', margin: '5px' }}></i>
        </a>{" "}
        
        <a href="https://www.linkedin.com/in/lina-m-errico-056364278" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin" style={{ color: '#1E2749', fontSize: '2em', margin: '5px' }}></i>
        </a>{" "}
        
        <a href="https://twitter.com/nombre-de-usuario" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter" style={{ color: '#1E2749', fontSize: '2em', margin: '5px' }}></i>
        </a>
      </p>
    </footer>
  );
}

export default Footer;



