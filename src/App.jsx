import "./App.css";
import { useState, useEffect } from "react";
import Personal from "./components/Personal.jsx";
import Resume from "./components/Resume.jsx";
import AddSection from "./components/buttons/AddSection.jsx";
import Experience from "./components/Experience.jsx";
import ExperienceView from "./components/views/ExperienceView.jsx";
import Education from "./components/Education.jsx";
import EducationView from "./components/views/EducationView.jsx";
import Projects from "./components/Projects.jsx";
import ProjectsView from "./components/views/ProjectsView.jsx";
import Certifications from "./components/Certifications.jsx";
import CertificationsView from "./components/views/CertificationView.jsx";
import SkillsInterests from "./components/SkillsInterests.jsx";
import SkillsInterestsView from "./components/views/SkillsInterestsView.jsx";

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
      setEducations(educations, newState);
    }
    if (state === "Experience") {
      setExperiences(experiences, newState);
    }
    if (state === "Project") {
      setProjects(projects, newState);
    }
    if (state === "Certification") {
      setCertifications(certifications, newState);
    }
    if (state === "Skill") {
      setSkills(skills, newState);
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
          section, // Use the updated experiences array
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

  useEffect(() => {
    setViews((prevViews) => {
      const updatedViews = prevViews.map((view) => {
        if (view.type === ExperienceView) {
          return {
            ...view,
            props: { experiences }, // Update with current experiences
          };
        }
        if (view.type === EducationView) {
          return {
            ...view,
            props: { educations },
          };
        }
        if (view.type === ProjectsView) {
          return {
            ...view,
            props: { projects },
          };
        }
        if (view.type === CertificationsView) {
          return {
            ...view,
            props: { certifications },
          };
        }
        if (view.type === SkillsInterestsView) {
          return {
            ...view,
            props: { skills },
          };
        }
        return view;
      });
      return updatedViews;
    });
  }, [experiences, educations, projects, certifications, skills]);

  // Update experience component
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
        if (section.type === Education) {
          return {
            ...section,
            props: {
              ...section.props,
              educations,
              setEducations,
            },
          };
        }
        if (section.type === Projects) {
          return {
            ...section,
            props: {
              ...section.props,
              projects,
              setProjects,
            },
          };
        }
        if (section.type === Certifications) {
          return {
            ...section,
            props: {
              ...section.props,
              certifications,
              setCertifications,
            },
          };
        }
        if (section.type === SkillsInterests) {
          return {
            ...section,
            props: {
              ...section.props,
              skills,
              setSkills,
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
