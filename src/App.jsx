import "./App.css";
import { useState, useEffect } from "react";
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

  const updateState = (state, newState) => {
    if (state === "Education") {
      setEducations((prev) => [...prev, newState]);
    }
    if (state === "Experience") {
      setExperiences((prev) => [...prev, newState]);
    }
    if (state === "Project") {
      setProjects((prev) => [...prev, newState]);
    }
    if (state === "Certification") {
      setCertifications((prev) => [...prev, newState]);
    }
    if (state === "Skill") {
      setSkills((prev) => [...prev, newState]);
    }
  };

  const addSection = (section) => {
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
  };

  // Update view component
  useEffect(() => {
    setViews((prevViews) => {
      const updatedViews = prevViews.map((view) => {
        if (view.type === View) {
          return {
            ...view,
            props: {
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
              section,
              experiences,
              educations,
              projects,
              certifications,
              skills,
              updateState,
            },
          };
        }
        return section;
      }),
    );
  }, [experiences, educations, projects, certifications, skills]);

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
