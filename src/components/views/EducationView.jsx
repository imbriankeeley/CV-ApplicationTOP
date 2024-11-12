import EducationViewForm from "./forms/EducationViewForm.jsx";

export default function EducationView({ educations }) {
  return (
    <div className="experienceContainer">
      <div className="experienceView">
        <h1 className="experienceh1">EDUCATION</h1>
        <div className="line"></div>
        {educations.map((education) => (
          <EducationViewForm key={education.id} education={education} />
        ))}
      </div>
    </div>
  );
}
