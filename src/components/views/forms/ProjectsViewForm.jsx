import "../../../styles/views/ExperienceView.css";

export default function ProjectsViewForm({ project }) {
  const { projectTitle, link, description, feat1, feat2, feat3 } = project;

  return (
    <>
      <div className="titleAndDate column">
        <div className="titleAndLink">
          {projectTitle.length > 0 && (
            <p className="title">
              <b>{projectTitle}:</b>{" "}
              <a className="blue" target="_blank" href="{link}">
                {link}
              </a>
            </p>
          )}
        </div>
        <div className="dateAndLocation">
          <h2 className="title black">{description}</h2>
          <p className="company">{}</p>
        </div>
      </div>
      <div className="accomplishments projectFeats">
        {feat1.length > 0 && <p className="accomplishment">• {feat1}</p>}
        {feat2.length > 0 && <p className="accomplishment">• {feat2}</p>}
        {feat3.length > 0 && <p className="accomplishment">• {feat3}</p>}
      </div>
    </>
  );
}
