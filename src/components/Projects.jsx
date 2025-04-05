import '../css/project.css';

const ProjectCard = ({ project }) => {
  const handleClick = () => {
    window.open(project.link, "_blank");
  };

  return (
    <div className="project-card" onClick={handleClick}>
      <img src={project.image} alt={project.Name} className="project-image" />
      <div className="project-info">
        <h3>{project.Name}</h3>
        <p>{project.description}</p>
        <span className="tech-stack">{project.tech}</span>
      </div>
    </div>
  );
};

const Projects = () => {
  const Projects  = [{
    id: 1,
    Name: "Random Quote Generator",
    image: "project1.png",
    description: "A simple React app that fetches and displays random quotes from an API. Users can generate new quotes with a click and share them on social media.",
    tech: "React.js, HTML, CSS, JavaScript",
    link: "https://random-quote-machine-kousigaraj.netlify.app",
  },
  {
    id: 2,
    Name: "JavaScript Calculator",
    image: "project2.png",
    description: "A fully functional calculator built with React.js that performs basic arithmetic operations with a responsive UI and intuitive button interactions.",
    tech: "React.js, HTML, CSS, JavaScript",
    link: "https://javascript-calculator-kousigaraj.netlify.app",
  },
  {
    id: 3,
    Name: "Drum Machine",
    image: "project3.png",
    description: "An interactive drum machine app created using React.js, allowing users to play different drum sounds by clicking buttons or pressing corresponding keys.",
    tech: "React.js, HTML, CSS, JavaScript, Audio API",
    link: "https://drum-machine-kousigaraj.netlify.app",
  },
];
  return (
    <div className='project-container'>
       <h1><span>My</span> Projects</h1>
      <div className="project-grid">
        {Projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}

export default Projects