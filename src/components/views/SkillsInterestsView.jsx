import SkillsInterestsViewForm from "./forms/SkillsInterestsViewForm.jsx";

export default function SkillsInterestsView({ skills }) {
  return (
    <div className="experienceContainer">
      <div className="experienceView">
        <h1 className="experienceh1">TECHNICAL SKILLS & INTERESTS</h1>
        <div className="line"></div>
        {skills.map((skill) => (
          <SkillsInterestsViewForm key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  );
}
