import "../styles/components/Experience.css";
import ExperienceForm from "../components/forms/ExperienceForm.jsx";
import AddNewForm from "../components/buttons/AddNewForm";
import { useEffect } from "react";

export default function Experience({ experiences, setExperiences }) {
  useEffect(() => {
    console.log("Experiences prop changed:", experiences);
  }, [experiences]);

  const addNewExperienceForm = () => {
    const newKey = new Date().getTime();
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
    console.log("Adding new experience:", newExperience);

    setExperiences([...experiences, newExperience]);
  };

  const deleteExperience = (idToDelete) => {
    setExperiences((prevExperiences) =>
      prevExperiences.filter((exp) => exp.id !== idToDelete),
    );
  };

  return (
    <>
      {experiences.map((experience) => (
        <div key={experience.id} className="experienceFormWrapper">
          <ExperienceForm
            key={experience.id}
            experience={experience}
            experiences={experiences}
            setExperiences={setExperiences}
          />
          <button
            className="deleteExperienceBtn"
            onClick={() => deleteExperience(experience.id)}
          >
            Delete
          </button>
        </div>
      ))}
      <AddNewForm form="Experience" onClick={addNewExperienceForm} />
    </>
  );
}
