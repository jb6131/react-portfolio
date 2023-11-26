export default function Resume() {
  return (
    <div className="container mt-3">
      <h1 className="text-center">Resume</h1>
      <p className="text-center fs-4 mt-5 mb-5 mx-3">Click <a href="https://drive.google.com/uc?export=download&id=1aj06zL7_zO6pqo3_S6-swwMj8pib4bmD" download>here</a> to download my resume!</p>
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <div className="card">
            <h3>Front-end</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>jQuery</li>
              <li>Bulma</li>
              <li>React.js</li>
              <li>Progressive Web Applications (PWA)</li>
            </ul>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="card">
            <h3>Back-end</h3>
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>RESTful API development</li>
            </ul>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="card">
            <h3>Full Stack</h3>
            <ul>
              <li>MERN stack for end-to-end development</li>
            </ul>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="card">
            <h3>Database</h3>
            <ul>
              <li>MySQL</li>
              <li>MongoDB</li>
            </ul>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="card">
            <h3>API Integration</h3>
            <ul>
              <li>GraphQL</li>
            </ul>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="card">
            <h3>Tools & VCS</h3>
            <ul>
              <li>Git</li>
              <li>GitHub</li>
              <li>Heroku</li>
              <li>Netlify</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}