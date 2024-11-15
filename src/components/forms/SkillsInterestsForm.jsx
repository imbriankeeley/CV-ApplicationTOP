import "../../styles/forms/ExperienceForm.css";

export default function SkillsInterestsForm({ skill, setSkills }) {
  const updateSkills = (field, value) => {
    setSkills((prevSkills) =>
      prevSkills.map((sk) =>
        sk.id === skill.id ? { ...sk, [field]: value } : sk,
      ),
    );
  };
  return (
    <form className="experienceForm skills">
      <div className="Container">
        <label htmlFor={`tech-${skill.id}`}>Technology</label>
        <input
          id={`tech-${skill.id}`}
          defaultValue={skill.tech}
          placeholder="Java"
          onChange={(e) => updateSkills("tech", e.target.value)}
        />
      </div>

      <div className="Container">
        <label htmlFor={`interests-${skill.id}`}>Interests</label>
        <input
          id={`interests-${skill.id}`}
          defaultValue={skill.interests}
          placeholder="Cats"
          onChange={(e) => updateSkills("interests", e.target.value)}
        />
      </div>
    </form>
  );
}
