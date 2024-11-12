import "../../../styles/views/ExperienceView.css";

export default function EducationViewForm({ education }) {
  const { school, degree, date, location, courseWork } = education;

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
