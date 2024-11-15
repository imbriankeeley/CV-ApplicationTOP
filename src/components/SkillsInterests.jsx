import "../styles/components/Education.css";
import SkillsInterestsForm from "../components/forms/SkillsInterestsForm.jsx";

export default function SkillsInterests({ skills, setSkills }) {
  const addNewForm = () => {
    const newSkillsInterests = {
      id: new Date().getTime(),
      tech: "",
      interests: "",
    };

    setSkills([...skills, newSkillsInterests]);
  };

  return (
    <>
      {skills.map((skill) => (
        <div key={skill.id} className="experienceFormWrapper">
          <SkillsInterestsForm
            key={skill.id}
            skill={skill}
            skills={skills}
            setSkills={setSkills}
          />
        </div>
      ))}
    </>
  );
}
