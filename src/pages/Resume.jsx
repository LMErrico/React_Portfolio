  const resumePath = '/Lina_Resume.pdf';

export default function Resume() {
  
    return (
      <div>
        <h3>Resume</h3>
      <a
        href={resumePath}
        download="Download My Resume"
        target="_blank"
        rel="noreferrer"
      >
        <button>Download my Resume</button>
      </a>
      <p> </p>
      <h2>Colombian Lawyer with emerging technology skills</h2>
      <p> </p>
      <p><u>Front-End</u></p>
      <p>HTML </p>
      <p> CSS</p>
      <p>Hamburger</p>
      <p>React Js</p>
      <p> </p>
      <p><u>Back-End</u></p>
      <p>JavaScript</p>
      <p>MySQL</p>
      <p>Mongo</p>
      </div>
    );
  }
  