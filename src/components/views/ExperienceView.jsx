import "../../styles/views/ExperienceView.css";

export default function ExperienceView({
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
      </div>
    </div>
  );
}
