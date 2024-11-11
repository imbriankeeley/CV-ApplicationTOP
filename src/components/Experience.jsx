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

    setExperiences((prevExperiences) => [...prevExperiences, newExperience]);
  };
  return (
    <>
      {experiences.map((experience) => (
        <ExperienceForm
          key={experience.id}
          experience={experience}
          experiences={experiences}
          setExperiences={setExperiences}
        />
      ))}
      <AddNewForm form="Experience" onClick={addNewExperienceForm} />
    </>
  );
}
