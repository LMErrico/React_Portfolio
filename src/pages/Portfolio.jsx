export default function Portfolio() {
  const applications = [
    {
      title: 'Dog Finder',
      imageSrc: '/images/dog.png',
      description: 'HTML/Tailwind/JS/APIs',
      deployedLink: 'https://dmerk2.github.io/Dog-Finder/index.html',
      githubLink: 'https://github.com/dmerk2/Dog-Finder',
    },
    {
      title: 'Natures Palate',
      imageSrc: '/images/natures.png',
      description: 'MVC/MySQL',
      deployedLink: 'https://sheltered-bastion-53112-369471263d1d.herokuapp.com',
      githubLink: 'https://github.com/crissyg923/natures-palate',
    },
    {
      title: 'Friendly Fleur',
      imageSrc: '/images/friendly.png',
      description: 'MERN',
      deployedLink: 'https://jsxperience.onrender.com/',
      githubLink: 'https://github.com/Nehaps29/jsxperience',
    },
    {
      title: 'Portfolio',
      imageSrc: '/images/portfolio.png',
      description: 'React',
      deployedLink: 'https://react-portfolio-le.netlify.app',
      githubLink: 'https://github.com/LMErrico/React_Portfolio',
    },
    {
      title: 'Weather Dashboard',
      imageSrc: '/images/weather.png',
      description: 'API/HTML/CSS',
      deployedLink: 'https://lmerrico.github.io/Weather_Dashboard/',
      githubLink: 'https://github.com/LMErrico/Weather_Dashboard',
    },
    {
      title: 'Employee Tracker',
      imageSrc: '/images/tracker.png',
      description: 'Node.js/Inquirer/MySQL',
      deployedLink: 'https://drive.google.com/file/d/1UgKkKADoodcIe1tujxrgFJeUCOGirS9e/view',
      githubLink: 'https://github.com/LMErrico/Employee_Tracker',
    },
  ];
  return (
     <div>
      <br/>
      <h3 style={{ fontSize: '1.5em', marginLeft: '20px', textAlign: 'center'}}>Portfolio</h3>
      <br/>
      <div className="applications-container">
        {applications.map((app, index) => (
          <div key={index} className="application-card">
            <img src={app.imageSrc} alt={app.title} className="app-image" />
            <div className="overlay">
              <a href={app.deployedLink} target="_blank" style={{ textDecoration: 'none', color: 'inherit' }}>
                <h2 className="app-title">{app.title}</h2>
              </a>
              <p>{app.description}</p>
              <div className="links">
                <a href={app.githubLink} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github" style={{ color: 'black', fontSize: '2em', margin: '5px' }}></i>
                </a>{" "}
              </div>
            </div>
          </div>
        ))}
      </div>
        
      <style jsx>{`
        .applications-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          margin: 0 auto; 
          max-width: 1200px; 
        }
        .application-card {
          position: relative;
          width: 48%;
          margin-bottom: 20px;
          box-sizing: border-box;
          overflow: hidden;
        }
        .app-image {
          width: 100%;
          height: auto;
          display: block;
          transition: transform 0.3s ease, filter 0.3s ease;
        }
        .overlay {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          width: 100%;
          color: black;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .application-card:hover .overlay {
          opacity: 1;
        }
        .application-card:hover .app-image {
          filter: blur(5px);
        }
        .app-title {
          margin: 0;
          font-size: 1.5em;
          textDecoration: none;
        }
        .links {
          margin-top: 10px;
        }
        .links a {
          display: block;
          margin-bottom: 10px;
        }
        @media (max-width: 768px) {
          .application-card {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
  