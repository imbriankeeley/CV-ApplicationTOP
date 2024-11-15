import "../../../styles/views/ExperienceView.css";

export default function SkillsInterestsViewForm({ skill }) {
  const { tech, interests } = skill;

  return (
    <>
      <div className="titleAndDate column close">
        <p className="tech top">
          <b>Technology: </b> {tech}
        </p>
        <p className="tech">
          <b>Interests: </b> {interests}
        </p>
      </div>
    </>
  );
}
