import "../styles/Section.css";
import Form from "./Form";
import Delete from "./buttons/Delete";
import AddNewForm from "./buttons/AddNewForm";

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
    const newState = section.filter((sec) => sec.id !== idToDelete);
    updateState(section, newState);
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
              section={"Experience"}
              form={experience}
              forms={experiences}
              updateState={updateState}
            />
            <Delete
              id={experience.id}
              section={experiences}
              onClick={deleteForm}
            />
          </div>
        ))}
        <AddNewForm
          title={"Experience"}
          onClick={newForm}
          section={experiences}
          form={newExperience}
        />
      </>
    );
  }
}
