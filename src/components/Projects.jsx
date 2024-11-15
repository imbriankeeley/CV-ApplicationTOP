import "../styles/components/Education.css";
import ProjectsForm from "../components/forms/ProjectsForm.jsx";
import AddNewForm from "../components/buttons/AddNewForm";

export default function Projects({ projects, setProjects }) {
  const addNewForm = () => {
    const newProject = {
      id: new Date().getTime(),
      projectTitle: "",
      link: "",
      description: "",
      feat1: "",
      feat2: "",
      feat3: "",
    };

    setProjects([...projects, newProject]);
  };

  const deleteProject = (idToDelete) => {
    setProjects((prevProjects) =>
      prevProjects.filter((proj) => proj.id !== idToDelete),
    );
  };

  return (
    <>
      {projects.map((project) => (
        <div key={project.id} className="experienceFormWrapper">
          <ProjectsForm
            key={project.id}
            project={project}
            projects={projects}
            setProjects={setProjects}
          />
          <button
            className="deleteExperienceBtn"
            onClick={() => deleteProject(project.id)}
          >
            Delete
          </button>
        </div>
      ))}
      <AddNewForm form="Project" onClick={addNewForm} />
    </>
  );
}
