import "../../styles/forms/ExperienceForm.css";

export default function ExperienceForm({
  setTitle,
  setCompany,
  setDate,
  setLocation,
  setAccomplishment1,
  setAccomplishment2,
  setAccomplishment3,
}) {
  return (
    <form className="experienceForm">
      <div className="Container">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          placeholder="Software Engineer"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="Container">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          placeholder="Sprig"
          onChange={(e) => setCompany(e.target.value)}
        />
      </div>

      <div className="Container">
        <label htmlFor="date">Date</label>
        <input
          id="date"
          placeholder="October 2024 - Present"
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <div className="Container">
        <label htmlFor="location">Location</label>
        <input
          id="location"
          placeholder="Remote"
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>

      <div className="Container">
        <label className="accomplishmentsTag">Accomplishments</label>
        <div className="accomplishmentsForm">
          <input
            id="accomplishment1"
            placeholder="Made the whole backend :)"
            onChange={(e) => setAccomplishment1(e.target.value)}
          />
          <input
            id="accomplishment2"
            placeholder="Made the whole frontend"
            onChange={(e) => setAccomplishment2(e.target.value)}
          />
          <input
            id="accomplishment3"
            placeholder="I made this whole resume"
            onChange={(e) => setAccomplishment3(e.target.value)}
          />
        </div>
      </div>
    </form>
  );
}
