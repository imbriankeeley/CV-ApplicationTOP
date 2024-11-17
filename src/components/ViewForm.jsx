import "../styles/View.css";

export default function ViewForm({ section, view }) {
  if (section === "Experience") {
    const {
      title,
      company,
      date,
      location,
      accomplishment1,
      accomplishment2,
      accomplishment3,
    } = view;

    return (
      <>
        <div className="titleAndDate">
          <div className="titleAndCompany">
            <h2 className="title">{title}</h2>
            <p className="company">{company}</p>
          </div>
          <div className="dateAndLocation">
            <h2 className="title">{date}</h2>
            <p className="company">{location}</p>
          </div>
        </div>
        <div className="accomplishments">
          {accomplishment1.length > 0 && (
            <p className="accomplishment">• {accomplishment1}</p>
          )}{" "}
          {accomplishment2.length > 0 && (
            <p className="accomplishment">• {accomplishment2}</p>
          )}{" "}
          {accomplishment3.length > 0 && (
            <p className="accomplishment">• {accomplishment3}</p>
          )}{" "}
        </div>
      </>
    );
  }
  if (section === "Education") {
    const { school, degree, date, location, courseWork } = view;

    return (
      <>
        <div className="titleAndDate">
          <div className="titleAndCompany">
            <h2 className="title">{school}</h2>
            <p className="company">{degree}</p>
          </div>
          <div className="dateAndLocation">
            <h2 className="title">{date}</h2>
            <p className="company">{location}</p>
          </div>
        </div>
        <div className="courseWorkAccomplishments">
          {courseWork.length > 0 && (
            <p className="accomplishment">
              <b>Coursework</b>: {courseWork}
            </p>
          )}{" "}
        </div>
      </>
    );
  }
  if (section === "Projects") {
    const { projectTitle, link, description, feat1, feat2, feat3 } = view;

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
  if (section === "Certifications") {
    const { cert, institute, date } = view;

    return (
      <>
        <div className="titleAndDate">
          <div className="titleAndLink">
            <p className="cert">
              <b>{cert} </b> <p>{institute}</p>
            </p>
          </div>
          <div className="dateAndLocation">
            <h2 className="title">{date}</h2>
          </div>
        </div>
      </>
    );
  }
  if (section === "SkillsInterests") {
    const { tech, interests } = view;

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
}
