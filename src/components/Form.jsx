import "../styles/Section.css";

export default function Form({ section, form, forms, updateForm }) {
  if (section === "Experience") {
    return (
      <form className="experienceForm">
        <div className="Container">
          <label htmlFor={`title-${form.id}`}>Title</label>
          <input
            id={`title-${form.id}`}
            defaultValue={form.title}
            placeholder="Software Engineer"
            onChange={(e) =>
              updateForm("title", e.target.value, section, forms, form)
            }
          />
        </div>

        <div className="Container">
          <label htmlFor={`company-${form.id}`}>Company</label>
          <input
            id={`company-${form.id}`}
            defaultValue={form.company}
            placeholder="Sprig"
            onChange={(e) =>
              updateForm("company", e.target.value, section, forms, form)
            }
          />
        </div>

        <div className="Container">
          <label htmlFor={`date-${form.id}`}>Date</label>
          <input
            id={`date-${form.id}`}
            defaultValue={form.date}
            placeholder="October 2024 - Present"
            onChange={(e) =>
              updateForm("date", e.target.value, section, forms, form)
            }
          />
        </div>

        <div className="Container">
          <label htmlFor={`location-${form.id}`}>Location</label>
          <input
            id={`location-${form.id}`}
            defaultValue={form.location}
            placeholder="Remote"
            onChange={(e) =>
              updateForm("location", e.target.value, section, forms, form)
            }
          />
        </div>

        <div className="Container">
          <label className="accomplishmentsTag">Job Feats</label>
          <div className="accomplishmentsForm">
            <input
              id={`accomplishment1-${form.id}`}
              defaultValue={form.accomplishment1}
              placeholder="Made the whole backend :)"
              onChange={(e) =>
                updateForm(
                  "accomplishment1",
                  e.target.value,
                  section,
                  forms,
                  form,
                )
              }
            />
            <input
              id={`accomplishment2-${form.id}`}
              defaultValue={form.accomplishment2}
              placeholder="Made the whole frontend"
              onChange={(e) =>
                updateForm(
                  "accomplishment2",
                  e.target.value,
                  section,
                  forms,
                  form,
                )
              }
            />
            <input
              id={`accomplishment3-${form.id}`}
              defaultValue={form.accomplishment3}
              placeholder="I made this whole resume"
              onChange={(e) =>
                updateForm(
                  "accomplishment3",
                  e.target.value,
                  section,
                  forms,
                  form,
                )
              }
            />
          </div>
        </div>
      </form>
    );
  }
  if (section === "Education") {
    return (
      <form className="experienceForm">
        <div className="Container">
          <label htmlFor={`school-${form.id}`}>School</label>
          <input
            id={`school-${form.id}`}
            defaultValue={form.school}
            placeholder="Western Govenors"
            onChange={(e) =>
              updateForm("school", e.target.value, section, forms, form)
            }
          />
        </div>

        <div className="Container">
          <label htmlFor={`degree-${form.id}`}>Degree</label>
          <input
            id={`degree-${form.id}`}
            defaultValue={form.degree}
            placeholder="Computer Science"
            onChange={(e) =>
              updateForm("degree", e.target.value, section, forms, form)
            }
          />
        </div>

        <div className="Container">
          <label htmlFor={`date-${form.id}`}>Date</label>
          <input
            id={`date-${form.id}`}
            defaultValue={form.date}
            placeholder="Graduating Jun 2025"
            onChange={(e) =>
              updateForm("date", e.target.value, section, forms, form)
            }
          />
        </div>

        <div className="Container">
          <label htmlFor={`location-${form.id}`}>Location</label>
          <input
            id={`location-${form.id}`}
            defaultValue={form.location}
            placeholder="Millcreek, UT"
            onChange={(e) =>
              updateForm("location", e.target.value, section, forms, form)
            }
          />
        </div>

        <div className="Container">
          <label className="accomplishmentsTag">Courses</label>
          <div className="accomplishmentsForm">
            <input
              id={`courseWork-${form.id}`}
              defaultValue={form.courseWork}
              placeholder="Data Structures"
              onChange={(e) =>
                updateForm("courseWork", e.target.value, section, forms, form)
              }
            />
          </div>
        </div>
      </form>
    );
  }
  if (section === "Projects") {
    return (
      <form className="experienceForm">
        <div className="Container">
          <label htmlFor={`form-${form.id}`}>Project</label>
          <input
            id={`form-${form.id}`}
            defaultValue={form.project}
            placeholder="Rep Sync"
            onChange={(e) =>
              updateForm("projectTitle", e.target.value, section, forms, form)
            }
          />
        </div>

        <div className="Container">
          <label htmlFor={`link-${form.id}`}>Link</label>
          <input
            id={`link-${form.id}`}
            defaultValue={form.link}
            placeholder="www.myform.com"
            onChange={(e) =>
              updateForm("link", e.target.value, section, forms, form)
            }
          />
        </div>

        <div className="Container">
          <label htmlFor={`description-${form.id}`}>Description</label>
          <input
            id={`description-${form.id}`}
            defaultValue={form.description}
            placeholder="Workout Tracker"
            onChange={(e) =>
              updateForm("description", e.target.value, section, forms, form)
            }
          />
        </div>
        <div className="Container">
          <label className="accomplishmentsTag">Feats</label>
          <div className="accomplishmentsForm">
            <input
              id={`feat1-${form.id}`}
              defaultValue={form.feat1}
              placeholder="Made interface"
              onChange={(e) =>
                updateForm("feat1", e.target.value, section, forms, form)
              }
            />
            <input
              id={`feat2-${form.id}`}
              defaultValue={form.feat2}
              placeholder="Used indexDB"
              onChange={(e) =>
                updateForm("feat2", e.target.value, section, forms, form)
              }
            />
            <input
              id={`feat3-${form.id}`}
              defaultValue={form.feat3}
              placeholder="Sleek modern UI/UX"
              onChange={(e) =>
                updateForm("feat3", e.target.value, section, forms, form)
              }
            />
          </div>
        </div>
      </form>
    );
  }
  if (section === "Certifications") {
    return (
      <form className="experienceForm">
        <div className="Container">
          <label htmlFor={`form-${form.id}`}>Certification</label>
          <input
            id={`form-${form.id}`}
            defaultValue={form.cert}
            placeholder="Linux Professional Institute"
            onChange={(e) =>
              updateForm("cert", e.target.value, section, forms, form)
            }
          />
        </div>

        <div className="Container">
          <label htmlFor={`institute-${form.id}`}>Institute</label>
          <input
            id={`institute-${form.id}`}
            defaultValue={form.institute}
            placeholder="Pearson."
            onChange={(e) =>
              updateForm("institute", e.target.value, section, forms, form)
            }
          />
        </div>

        <div className="Container">
          <label htmlFor={`date-${form.id}`}>Date</label>
          <input
            id={`date-${form.id}`}
            defaultValue={form.date}
            placeholder="May 2024"
            onChange={(e) =>
              updateForm("date", e.target.value, section, forms, form)
            }
          />
        </div>
      </form>
    );
  }
  if (section === "SkillsInterests") {
    return (
      <form className="experienceForm skills">
        <div className="Container">
          <label htmlFor={`tech-${form.id}`}>Technology</label>
          <input
            id={`tech-${form.id}`}
            defaultValue={form.tech}
            placeholder="Java"
            onChange={(e) =>
              updateForm("tech", e.target.value, section, forms, form)
            }
          />
        </div>

        <div className="Container">
          <label htmlFor={`interests-${form.id}`}>Interests</label>
          <input
            id={`interests-${form.id}`}
            defaultValue={form.interests}
            placeholder="Cats"
            onChange={(e) =>
              updateForm("interests", e.target.value, section, forms, form)
            }
          />
        </div>
      </form>
    );
  }
}
