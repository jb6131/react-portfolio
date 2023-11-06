import Project from '../components/Project/Project';

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'Earful',
      description: 'desc',
      image: './src/assets/placeholder1.jpg',
      deployedUrl: '#',
      repoUrl: '#'
    },
    {
      id: 2,
      title: 'Tip Tracker',
      description: 'desc',
      image: './src/assets/placeholder2.jpg',
      deployedUrl: '#',
      repoUrl: '#'
    },
    {
      id: 3,
      title: 'TBD',
      description: 'desc',
      image: './src/assets/placeholder3.jpg',
      deployedUrl: '#',
      repoUrl: '#'
    },
    {
      id: 4,
      title: 'TBD',
      description: 'desc',
      image: './src/assets/placeholder4.jpg',
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