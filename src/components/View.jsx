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
  if (section === "Education") {
    return (
      <div className="experienceContainer">
        <div className="experienceView">
          <h1 className="experienceh1">EDUCATION</h1>
          <div className="line"></div>
          {educations.map((education) => (
            <ViewForm key={education.id} section={section} view={education} />
          ))}
        </div>
      </div>
    );
  }
  if (section === "Projects") {
    return (
      <div className="experienceContainer">
        <div className="experienceView">
          <h1 className="experienceh1">PROJECTS</h1>
          <div className="line"></div>
          {projects.map((project) => (
            <ViewForm key={project.id} section={section} view={project} />
          ))}
        </div>
      </div>
    );
  }
  if (section === "Certifications") {
    return (
      <div className="experienceContainer">
        <div className="experienceView">
          <h1 className="experienceh1">CERTIFICATIONS</h1>
          <div className="line"></div>
          {certifications.map((certification) => (
            <ViewForm
              key={certification.id}
              section={section}
              view={certification}
            />
          ))}
        </div>
      </div>
    );
  }
  if (section === "SkillsInterests") {
    return (
      <div className="experienceContainer">
        <div className="experienceView">
          <h1 className="experienceh1">TECHNICAL SKILLS & INTERESTS</h1>
          <div className="line"></div>
          {skills.map((skill) => (
            <ViewForm key={skill.id} section={section} view={skill} />
          ))}
        </div>
      </div>
    );
  }
}
