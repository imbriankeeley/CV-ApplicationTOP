import "../../styles/views/ExperienceView.css";

export default function ExperienceView({ title }) {
  return (
    <div className="experienceContainer">
      <div className="experienceView">
        <h1 className="experienceh1">EXPERIENCE</h1>
        <div className="line"></div>
        <div className="titleAndDate">
          <div className="titleAndCompany">
            <h2 className="title">{title}</h2>
            <p className="company">Sprig</p>
          </div>
          <div className="dateAndLocation">
            <h2 className="title">Ocotober 2024 - Present</h2>
            <p className="company">Remote</p>
          </div>
        </div>
        <div className="accomplishments">
          <p className="accomplishment">
            • Designed software from the ground up with small development team
            creating a scalable progressive web application. This software
            integrates technologies such as React and Next ERP for an
            application accessible across a wide range of devices.
          </p>
          <p className="accomplishment">
            • Collaborated effectively with team members and adjacent teams
            involved in this application to meet deadlines pertaining to the
            required completion of certain apps and features.
          </p>
        </div>
      </div>
    </div>
  );
}
