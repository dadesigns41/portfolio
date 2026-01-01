import SectionHeader from "../components/SectionHeader";

function Projects() {
  const projects = [
    {
      name: "Developer Portfolio",
      description: "My personal portfolio built with React and Vite.",
      github: "https://github.com/your-username/developer-portfolio",
      demo: "https://your-portfolio-url.com",
    },
    {
      name: "MailWizz Docker Setup",
      description: "Self-hosted email campaign setup using Docker.",
      github: "https://github.com/your-username/mailwizz-docker",
      demo: "",
    },
  ];

  return (
    <section id="projects">
      <SectionHeader title="Projects" subtitle="Some projects I’ve built" />
      <div className="projects-grid">
        {projects.map((proj) => (
          <div key={proj.github} className="project-card">
            <h3>{proj.name}</h3>
            <p>{proj.description}</p>
            <div className="links">
              <a href={proj.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              {proj.demo && (
                <>
                  {" | "}
                  <a href={proj.demo} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
