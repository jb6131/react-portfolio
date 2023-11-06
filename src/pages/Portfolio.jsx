import Project from '../components/Project/Project';

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'Earful',
      description: 'Playlist creator!',
      image: './images/earful.png',
      deployedUrl: 'https://chase-garrett.github.io/earful/',
      repoUrl: 'https://github.com/Chase-Garrett/earful'
    },
    {
      id: 2,
      title: 'Tip Tracker',
      description: 'Track your tips!',
      image: './images/tip-tracker.png',
      deployedUrl: 'https://calm-bastion-79027-465dab9140b3.herokuapp.com/',
      repoUrl: 'https://github.com/Calebjwood/Tip-Tracker'
    },
    {
      id: 3,
      title: 'TBD',
      description: 'desc',
      image: './images/placeholder3.jpg',
      deployedUrl: '#',
      repoUrl: '#'
    },
    {
      id: 4,
      title: 'TBD',
      description: 'desc',
      image: './images/placeholder4.jpg',
      deployedUrl: '#',
      repoUrl: '#'
    },
  ];

  return (
    <div className="container mt-3">
      <h1 className="text-center">My Projects</h1>
      <div className="row justify-content-center m-3">
        {projects.map((project) => (
          <Project
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            deployedUrl={project.deployedUrl}
            repoUrl={project.repoUrl}
          />
        ))}
      </div>
    </div>
  );
}