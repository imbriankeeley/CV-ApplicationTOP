import "../../styles/forms/ExperienceForm.css";

export default function ExperienceForm({ experience, setExperiences }) {
  const updateExperience = (field, value) => {
    setExperiences((prevExperiences) =>
      prevExperiences.map((exp) =>
        exp.id === experience.id ? { ...exp, [field]: value } : exp,
      ),
    );
  };
  return (
    <form className="experienceForm">
      <div className="Container">
        <label htmlFor={`title-${experience.id}`}>Title</label>
        <input
          id={`title-${experience.id}`}
          defaultValue={experience.title}
          placeholder="Software Engineer"
          onChange={(e) => updateExperience("title", e.target.value)}
        />
      </div>

      <div className="Container">
        <label htmlFor={`company-${experience.id}`}>Company</label>
        <input
          id={`company-${experience.id}`}
          defaultValue={experience.company}
          placeholder="Sprig"
          onChange={(e) => updateExperience("company", e.target.value)}
        />
      </div>

      <div className="Container">
        <label htmlFor={`date-${experience.id}`}>Date</label>
        <input
          id={`date-${experience.id}`}
          defaultValue={experience.date}
          placeholder="October 2024 - Present"
          onChange={(e) => updateExperience("date", e.target.value)}
        />
      </div>

      <div className="Container">
        <label htmlFor={`location-${experience.id}`}>Location</label>
        <input
          id={`location-${experience.id}`}
          defaultValue={experience.location}
          placeholder="Remote"
          onChange={(e) => updateExperience("location", e.target.value)}
        />
      </div>

      <div className="Container">
        <label className="accomplishmentsTag">Job Feats</label>
        <div className="accomplishmentsForm">
          <input
            id={`accomplishment1-${experience.id}`}
            defaultValue={experience.accomplishment1}
            placeholder="Made the whole backend :)"
            onChange={(e) =>
              updateExperience("accomplishment1", e.target.value)
            }
          />
          <input
            id={`accomplishment2-${experience.id}`}
            defaultValue={experience.accomplishment2}
            placeholder="Made the whole frontend"
            onChange={(e) =>
              updateExperience("accomplishment2", e.target.value)
            }
          />
          <input
            id={`accomplishment3-${experience.id}`}
            defaultValue={experience.accomplishment3}
            placeholder="I made this whole resume"
            onChange={(e) =>
              updateExperience("accomplishment3", e.target.value)
            }
          />
        </div>
      </div>
    </form>
  );
}
