import "../styles/Section.css";
import Form from "./Form";
import Delete from "./buttons/Delete";
import AddNewForm from "./buttons/AddNewForm";

export default function Section({
  section,
  experiences,
  educations,
  projects,
  certifications,
  skills,
  updateState,
  deleteForm,
  updateForm,
}) {
  const newKey = new Date().getTime();
  const newForm = (section, form) => {
    updateState(section, form);
  };

  if (section === "Experience") {
    const newExperience = {
      id: newKey,
      title: "",
      company: "",
      date: "",
      location: "",
      accomplishment1: "",
      accomplishment2: "",
      accomplishment3: "",
    };

    return (
      <>
        {experiences.map((experience) => (
          <div key={experience.id} className="experienceFormWrapper">
            <Form
              key={experience.id}
              section={"Experience"}
              form={experience}
              forms={experiences}
              updateForm={updateForm}
            />
            <Delete id={experience.id} section={section} onClick={deleteForm} />
          </div>
        ))}
        <AddNewForm
          title={"Experience"}
          onClick={newForm}
          form={newExperience}
        />
      </>
    );
  }
  if (section === "Education") {
    const newEducation = {
      id: new Date().getTime(),
      school: "",
      degree: "",
      date: "",
      location: "",
      courseWork: "",
    };

    return (
      <>
        {educations.map((education) => (
          <div key={education.id} className="experienceFormWrapper">
            <Form
              key={education.id}
              section={"Education"}
              form={education}
              forms={educations}
              updateForm={updateForm}
            />
            <Delete id={education.id} section={section} onClick={deleteForm} />
          </div>
        ))}
        <AddNewForm title={"Education"} onClick={newForm} form={newEducation} />
      </>
    );
  }
  if (section === "Projects") {
    const newProject = {
      id: new Date().getTime(),
      projectTitle: "",
      link: "",
      description: "",
      feat1: "",
      feat2: "",
      feat3: "",
    };

    return (
      <>
        {projects.map((project) => (
          <div key={project.id} className="experienceFormWrapper">
            <Form
              key={project.id}
              section={"Projects"}
              form={project}
              forms={projects}
              updateForm={updateForm}
            />
            <Delete id={project.id} section={section} onClick={deleteForm} />
          </div>
        ))}
        <AddNewForm title="Project" onClick={newForm} form={newProject} />
      </>
    );
  }
  if (section === "Certifications") {
    const newCertification = {
      id: new Date().getTime(),
      cert: "",
      institute: "",
      date: "",
    };

    return (
      <>
        {certifications.map((certification) => (
          <div key={certification.id} className="experienceFormWrapper">
            <Form
              key={certification.id}
              section={"Certifications"}
              form={certification}
              forms={certifications}
              updateForm={updateForm}
            />
            <Delete
              id={certification.id}
              section={section}
              onClick={deleteForm}
            />
          </div>
        ))}
        <AddNewForm
          title="Certification"
          onClick={newForm}
          form={newCertification}
        />
      </>
    );
  }
  if (section === "SkillsInterests") {
    const newSkillsInterests = {
      id: new Date().getTime(),
      tech: "",
      interests: "",
    };

    return (
      <>
        {skills.map((skill) => (
          <div key={skill.id} className="experienceFormWrapper">
            <Form
              key={skill.id}
              section={"SkillsInterests"}
              form={skill}
              forms={skill}
              updateForm={updateForm}
            />
            <Delete id={skill.id} section={section} onClick={deleteForm} />
          </div>
        ))}
        <AddNewForm
          title="Skills and Interests"
          onClick={newForm}
          form={newSkillsInterests}
        />
      </>
    );
  }
}
