import "../styles/View.css";
import ViewForm from "./ViewForm.jsx";

export default function View({
  section,
  experiences,
  educations,
  projects,
  certifications,
  skills,
}) {
  if (section === "Experience") {
    return (
      <div className="experienceContainer">
        <div className="experienceView">
          <h1 className="experienceh1">EXPERIENCE</h1>
          <div className="line"></div>
          {experiences.map((experience) => (
            <ViewForm key={experience.id} section={section} view={experience} />
          ))}
        </div>
      </div>
    );
  }
}
