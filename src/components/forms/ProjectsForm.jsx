import "../../styles/forms/ExperienceForm.css";

export default function ProjectsForm({ project, setProjects }) {
  const updateProject = (field, value) => {
    setProjects((prevProjects) =>
      prevProjects.map((proj) =>
        proj.id === project.id ? { ...proj, [field]: value } : proj,
      ),
    );
  };
  return (
    <form className="experienceForm">
      <div className="Container">
        <label htmlFor={`project-${project.id}`}>Project</label>
        <input
          id={`project-${project.id}`}
          defaultValue={project.project}
          placeholder="Rep Sync"
          onChange={(e) => updateProject("projectTitle", e.target.value)}
        />
      </div>

      <div className="Container">
        <label htmlFor={`link-${project.id}`}>Link</label>
        <input
          id={`link-${project.id}`}
          defaultValue={project.link}
          placeholder="www.myproject.com"
          onChange={(e) => updateProject("link", e.target.value)}
        />
      </div>

      <div className="Container">
        <label htmlFor={`description-${project.id}`}>Description</label>
        <input
          id={`description-${project.id}`}
          defaultValue={project.description}
          placeholder="Workout Tracker"
          onChange={(e) => updateProject("description", e.target.value)}
        />
      </div>
      <div className="Container">
        <label className="accomplishmentsTag">Feats</label>
        <div className="accomplishmentsForm">
          <input
            id={`feat1-${project.id}`}
            defaultValue={project.feat1}
            placeholder="Made interface"
            onChange={(e) => updateProject("feat1", e.target.value)}
          />
          <input
            id={`feat2-${project.id}`}
            defaultValue={project.feat2}
            placeholder="Used indexDB"
            onChange={(e) => updateProject("feat2", e.target.value)}
          />
          <input
            id={`feat3-${project.id}`}
            defaultValue={project.feat3}
            placeholder="Sleek modern UI/UX"
            onChange={(e) => updateProject("feat3", e.target.value)}
          />
        </div>
      </div>
    </form>
  );
}
