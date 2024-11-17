import "../styles/Section.css";

export default function Form({ section, form, forms, updateState }) {
  const updateForm = (field, value) => {
    const updatedState = forms.map((sec) =>
      sec.id === form.id ? { ...sec, [field]: value } : sec,
    );
    updateState(section, updatedState);
  };

  if (section === "Experience") {
    return (
      <form className="experienceForm">
        <div className="Container">
          <label htmlFor={`title-${form.id}`}>Title</label>
          <input
            id={`title-${form.id}`}
            defaultValue={form.title}
            placeholder="Software Engineer"
            onChange={(e) => updateForm("title", e.target.value)}
          />
        </div>

        <div className="Container">
          <label htmlFor={`company-${form.id}`}>Company</label>
          <input
            id={`company-${form.id}`}
            defaultValue={form.company}
            placeholder="Sprig"
            onChange={(e) => updateForm("company", e.target.value)}
          />
        </div>

        <div className="Container">
          <label htmlFor={`date-${form.id}`}>Date</label>
          <input
            id={`date-${form.id}`}
            defaultValue={form.date}
            placeholder="October 2024 - Present"
            onChange={(e) => updateForm("date", e.target.value)}
          />
        </div>

        <div className="Container">
          <label htmlFor={`location-${form.id}`}>Location</label>
          <input
            id={`location-${form.id}`}
            defaultValue={form.location}
            placeholder="Remote"
            onChange={(e) => updateForm("location", e.target.value)}
          />
        </div>

        <div className="Container">
          <label className="accomplishmentsTag">Job Feats</label>
          <div className="accomplishmentsForm">
            <input
              id={`accomplishment1-${form.id}`}
              defaultValue={form.accomplishment1}
              placeholder="Made the whole backend :)"
              onChange={(e) => updateForm("accomplishment1", e.target.value)}
            />
            <input
              id={`accomplishment2-${form.id}`}
              defaultValue={form.accomplishment2}
              placeholder="Made the whole frontend"
              onChange={(e) => updateForm("accomplishment2", e.target.value)}
            />
            <input
              id={`accomplishment3-${form.id}`}
              defaultValue={form.accomplishment3}
              placeholder="I made this whole resume"
              onChange={(e) => updateForm("accomplishment3", e.target.value)}
            />
          </div>
        </div>
      </form>
    );
  }
}
