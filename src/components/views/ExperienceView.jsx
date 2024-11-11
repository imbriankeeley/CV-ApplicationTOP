import ExperienceViewForm from "./forms/ExperienceViewForm.jsx";

export default function ExperienceView({
  experiences,
  title,
  company,
  date,
  location,
  accomplishment1,
  accomplishment2,
  accomplishment3,
}) {
  return (
    <div className="experienceContainer">
      <div className="experienceView">
        <h1 className="experienceh1">EXPERIENCE</h1>
        <div className="line"></div>
        {experiences.map((experience) => (
          <ExperienceViewForm key={experience.id} experience={experience} />
        ))}
      </div>
    </div>
  );
}
