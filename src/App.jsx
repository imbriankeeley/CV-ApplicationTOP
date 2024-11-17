import "./App.css";
import { useState, useEffect, useCallback } from "react";
import Personal from "./components/Personal.jsx";
import Resume from "./components/Resume.jsx";
import AddSection from "./components/buttons/AddSection.jsx";
import Section from "./components/Section.jsx";
import View from "./components/View.jsx";

function App() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [website, setWebsite] = useState("");
  const [sections, setSections] = useState([]);
  const [views, setViews] = useState([]);
  const [experiences, setExperiences] = useState([
    {
      id: new Date().getTime(),
      title: "",
      company: "",
      date: "",
      location: "",
      accomplishment1: "",
      accomplishment2: "",
      accomplishment3: "",
    },
  ]);

  const [educations, setEducations] = useState([
    {
      id: new Date().getTime(),
      school: "",
      degree: "",
      date: "",
      location: "",
      courseWork: "",
    },
  ]);

  const [projects, setProjects] = useState([
    {
      id: new Date().getTime(),
      projectTitle: "",
      link: "",
      description: "",
      feat1: "",
      feat2: "",
      feat3: "",
    },
  ]);

  const [certifications, setCertifications] = useState([
    {
      id: new Date().getTime(),
      cert: "",
      institue: "",
      date: "",
    },
  ]);

  const [skills, setSkills] = useState([
    {
      id: new Date().getTime(),
      tech: "",
      interests: "",
    },
  ]);

  const updateState = useCallback((section, newState) => {
    if (section === "Education") {
      setEducations((prev) => [...prev, newState]);
    }
    if (section === "Experience") {
      setExperiences((prev) => [...prev, newState]);
    }
    if (section === "Project") {
      setProjects((prev) => [...prev, newState]);
    }
    if (section === "Certification") {
      setCertifications((prev) => [...prev, newState]);
    }
    if (section === "Skills and Interests") {
      setSkills((prev) => [...prev, newState]);
    }
  }, []);

  const deleteForm = useCallback((id, section) => {
    if (section === "Experience") {
      setExperiences((prev) => prev.filter((sec) => sec.id !== id));
    }
    if (section === "Education") {
      setEducations((prev) => prev.filter((sec) => sec.id !== id));
    }
    if (section === "Projects") {
      setProjects((prev) => prev.filter((sec) => sec.id !== id));
    }
    if (section === "Certifications") {
      setCertifications((prev) => prev.filter((sec) => sec.id !== id));
    }
    if (section === "SkillsInterests") {
      setSkills((prev) => prev.filter((sec) => sec.id !== id));
    }
  }, []);

  const updateForm = useCallback((field, value, section, forms, form) => {
    if (section === "Experience") {
      setExperiences((prev) =>
        prev.map((sec) =>
          sec.id === form.id ? { ...sec, [field]: value } : sec,
        ),
      );
    }
    if (section === "Education") {
      setEducations((prev) =>
        prev.map((sec) =>
          sec.id === form.id ? { ...sec, [field]: value } : sec,
        ),
      );
    }
    if (section === "Projects") {
      setProjects((prev) =>
        prev.map((sec) =>
          sec.id === form.id ? { ...sec, [field]: value } : sec,
        ),
      );
    }
    if (section === "Certifications") {
      setCertifications((prev) =>
        prev.map((sec) =>
          sec.id === form.id ? { ...sec, [field]: value } : sec,
        ),
      );
    }
    if (section === "SkillsInterests") {
      setSkills((prev) =>
        prev.map((sec) =>
          sec.id === form.id ? { ...sec, [field]: value } : sec,
        ),
      );
    }
  }, []);

  const addSection = useCallback(
    (section) => {
      const newKey = new Date().getTime();
      setSections((prevSections) => [
        ...prevSections,
        {
          type: Section,
          key: newKey,
          props: {
            section,
            experiences,
            educations,
            projects,
            certifications,
            skills,
            updateState,
            deleteForm,
            updateForm,
          },
        },
      ]);

      setViews((prevViews) => [
        ...prevViews,
        {
          type: View,
          key: newKey,
          props: {
            section,
            experiences,
            educations,
            projects,
            certifications,
            skills,
          },
        },
      ]);
    },
    [
      experiences,
      educations,
      projects,
      certifications,
      skills,
      updateState,
      deleteForm,
      updateForm,
    ],
  );

  // Update view component
  useEffect(() => {
    setViews((prevViews) => {
      const updatedViews = prevViews.map((view) => {
        if (view.type === View) {
          return {
            ...view,
            props: {
              ...view.props,
              section: view.props.section,
              experiences,
              educations,
              projects,
              certifications,
              skills,
            }, // Update with current experiences
          };
        }
        return view;
      });
      return updatedViews;
    });
  }, [experiences, educations, projects, certifications, skills]);

  // Update section component
  useEffect(() => {
    setSections((prevSections) =>
      prevSections.map((section) => {
        if (section.type === Section) {
          return {
            ...section,
            props: {
              ...section.props,
              experiences,
              educations,
              projects,
              certifications,
              skills,
              updateState,
              deleteForm,
              updateForm,
            },
          };
        }
        return section;
      }),
    );
  }, [
    experiences,
    educations,
    projects,
    certifications,
    skills,
    updateState,
    deleteForm,
    updateForm,
  ]);

  return (
    <>
      <div className="formSection">
        <Personal
          name={name}
          address={address}
          email={email}
          number={number}
          website={website}
          setName={setName}
          setAddress={setAddress}
          setEmail={setEmail}
          setNumber={setNumber}
          setWebsite={setWebsite}
        />
        {sections.map((section) => {
          const SectionComponent = section.type;
          return <SectionComponent key={section.key} {...section.props} />;
        })}
        <AddSection addSection={addSection} />
      </div>
      <div className="viewSection">
        <Resume
          name={name}
          address={address}
          email={email}
          number={number}
          website={website}
          views={views}
        />
      </div>
    </>
  );
}
export default App;
