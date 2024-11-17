import "../styles/components/Education.css";
import EducationForm from "../components/forms/EducationForm.jsx";
import AddNewForm from "../components/buttons/AddNewForm";

export default function Education({ educations, setEducations }) {
  const addNewEducationForm = () => {
    setEducations([...educations, newEducation]);
  };

  const deleteEducation = (idToDelete) => {
    setEducations((prevEducations) =>
      prevEducations.filter((edu) => edu.id !== idToDelete),
    );
  };

  return (
    <>
      {educations.map((education) => (
        <div key={education.id} className="experienceFormWrapper">
          <EducationForm
            key={education.id}
            education={education}
            educations={educations}
            setEducations={setEducations}
          />
          <button
            className="deleteExperienceBtn"
            onClick={() => deleteEducation(education.id)}
          >
            Delete
          </button>
        </div>
      ))}
      <AddNewForm form="Education" onClick={addNewEducationForm} />
    </>
  );
}
