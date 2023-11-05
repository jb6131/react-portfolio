import './Project.css';

const Project = ({ title, description, image, deployedUrl, repoUrl }) => {
  return (
    <div className="card project col-md-5 m-3">
      <img src={image} className="card-img" alt={`Image of ${title}`} />
      <div className="card-img-overlay project-overlay project-details">
        <div className="text-center">
          <a href={deployedUrl} className="project-title fs-3 me-2" target="_blank" rel="noreferrer">
            {title}
          </a>
          <a href={repoUrl} className="project-repo fs-3" target="_blank" rel="noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <p className="project-description mt-3 fs-5">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Project;