import "../styles/Section.css";
import Form from "./Form";

export default function Section({
  section,
  experiences,
  educations,
  projects,
  certifications,
  skills,
  updateState,
}) {
  const newKey = new Date().getTime();
  const newForm = (section, form) => {
    updateState(section, form);
  };

const deleteForm = (idToDelete, section) => {
    setExperiences((prevExperiences) =>
      prevExperiences.filter((exp) => exp.id !== idToDelete),
    );
  };

  const newExperience = {
    id: newKey,
    title: "",
    company: "",
    date: "",
    location: "",
    accomplishment1: "",
    accomplishment2: "",
    accomplishment3: "",
  };

  if (section === "Experience") {
    return (
      <>
        {experiences.map((experience) => (
          <div key={experience.id} className="experienceFormWrapper">
            <Form
              key={experience.id}
              experience={experience}
              experiences={experiences}
              updateState={updateState}
            />
            <Delete onClick={deleteForm}
            <button
              className="deleteExperienceBtn"
              onClick={() => deleteExperience(experience.id, section)}
            >
              Delete
            </button>
          </div>
        ))}
        <AddNewForm form="Experience" onClick={newForm} />
      </>
    );
  }
}
