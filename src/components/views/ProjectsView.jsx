import ProjectsViewForm from "./forms/ProjectsViewForm.jsx";

export default function ProjectsView({ projects }) {
  return (
    <div className="experienceContainer">
      <div className="experienceView">
        <h1 className="experienceh1">PROJECTS</h1>
        <div className="line"></div>
        {projects.map((project) => (
          <ProjectsViewForm key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
