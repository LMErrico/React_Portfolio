import React from 'react';

const resumePath = '/Lina_Resume.pdf';

export default function Resume() {
  const buttonStyle = {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '30px',
    backgroundColor: '#3dfaff',
    color: '#1E2749',
    cursor: 'pointer',
    border: 'none',
  };

  const containerStyle = {
    maxWidth: '800px',
    margin: 'auto',
    padding: '20px',
    fontSize: '1.3em'
  };

  const headingStyle = {
    fontSize: '1.5em',
  };

  const subHeadingStyle = {
    fontSize: '1.2em',
  };

  return (
    <div style={containerStyle}>
      <br />
      <h3 style={headingStyle}>Resume</h3>
      <a
        href={resumePath}
        download="Download My Resume"
        target="_blank"
        rel="noreferrer"
      >
        <button style={buttonStyle}>Download my Resume</button>
      </a>
      <br />
      <br />
      <h2 style={subHeadingStyle}>Colombian Lawyer with emerging technology skills</h2>
      <p> </p>
      <p>
        <u>Front-End</u>
      </p>
      <li>HTML </li>
      <li> CSS</li>
      <li>Handelbars</li>
      <li>React Js</li>
      <br />
      <p>
        <u>Back-End</u>
      </p>
      <li>JavaScript</li>
      <li>MySQL</li>
      <li>Mongo</li>
    </div>
  );
}


  