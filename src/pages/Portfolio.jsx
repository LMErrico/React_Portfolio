export default function Portfolio() {
  const applications = [
    {
      title: 'App 1',
      imageSrc: '/images/photo.jpg',
      deployedLink: 'https://example.com/app1',
      githubLink: 'https://github.com/LMErrico/React_Portfolio.git',
    },
    {
      title: 'App 2',
      imageSrc: '/images/photo.jpg',
      deployedLink: 'https://example.com/app2',
      githubLink: 'https://github.com/LMErrico/React_Portfolio.git',
    },
    {
      title: 'Hello',
      imageSrc: '/images/photo.jpg',
      deployedLink: 'https://example.com/app1',
      githubLink: 'https://github.com/LMErrico/React_Portfolio.git',
    },
    {
      title: 'Jes',
      imageSrc: '/images/photo.jpg',
      deployedLink: 'https://example.com/app2',
      githubLink: 'https://github.com/LMErrico/React_Portfolio.git',
    },
    {
      title: 'ayair',
      imageSrc: '/images/photo.jpg',
      deployedLink: 'https://example.com/app1',
      githubLink: 'https://github.com/LMErrico/React_Portfolio.git',
    },
    {
      title: 'condition',
      imageSrc: '/images/photo.jpg',
      deployedLink: 'https://example.com/app2',
      githubLink: 'https://github.com/LMErrico/React_Portfolio.git',
    },
  ];
  return (
    <div>
      <h3>Portfolio</h3>
      <div className="applications-container">
        {applications.map((app, index) => (
          <div key={index} className="application-card">
            <img src={app.imageSrc} alt={app.title} />
            <div className="overlay">
              <h2>{app.title}</h2>
              <div className="links">
                <a href={app.deployedLink} target="_blank" rel="noopener noreferrer">
                  <strong>Deployed Link</strong>
                </a>
                <br />
                <a href={app.githubLink} target="_blank" rel="noopener noreferrer">
                  <strong>GitHub Repository</strong>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Inline CSS for overlay and centered links */}
      <style jsx>{`
        .applications-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }
        .application-card {
          width: 48%;
          margin-bottom: 20px;
          box-sizing: border-box;
          position: relative;
        }
        img {
          width: 100%;
          height: auto;
          display: block;
        }
        .overlay {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          width: 100%;
          color: white; /* Change text color to ensure visibility */
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
  