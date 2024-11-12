import "../../styles/forms/EducationForm.css";

export default function EducationForm({ education, setEducations }) {
  const updateEducation = (field, value) => {
    setEducations((prevEducations) =>
      prevEducations.map((edu) =>
        edu.id === education.id ? { ...edu, [field]: value } : edu,
      ),
    );
  };
  return (
    <form className="experienceForm">
      <div className="Container">
        <label htmlFor={`school-${education.id}`}>School</label>
        <input
          id={`school-${education.id}`}
          defaultValue={education.school}
          placeholder="Western Govenors"
          onChange={(e) => updateEducation("school", e.target.value)}
        />
      </div>

      <div className="Container">
        <label htmlFor={`degree-${education.id}`}>Degree</label>
        <input
          id={`degree-${education.id}`}
          defaultValue={education.degree}
          placeholder="Computer Science"
          onChange={(e) => updateEducation("degree", e.target.value)}
        />
      </div>

      <div className="Container">
        <label htmlFor={`date-${education.id}`}>Date</label>
        <input
          id={`date-${education.id}`}
          defaultValue={education.date}
          placeholder="Graduating Jun 2025"
          onChange={(e) => updateEducation("date", e.target.value)}
        />
      </div>

      <div className="Container">
        <label htmlFor={`location-${education.id}`}>Location</label>
        <input
          id={`location-${education.id}`}
          defaultValue={education.location}
          placeholder="Millcreek, UT"
          onChange={(e) => updateEducation("location", e.target.value)}
        />
      </div>

      <div className="Container">
        <label className="accomplishmentsTag">Courses</label>
        <div className="accomplishmentsForm">
          <input
            id={`courseWork-${education.id}`}
            defaultValue={education.courseWork}
            placeholder="Data Structures"
            onChange={(e) => updateEducation("courseWork", e.target.value)}
          />
        </div>
      </div>
    </form>
  );
}
