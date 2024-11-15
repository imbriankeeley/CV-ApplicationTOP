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

  const addSection = (section) => {
    const newKey = new Date().getTime();
    if (section === "Experience") {
      setSections((prevSections) => [
        ...prevSections,
        {
          type: Experience,
          key: newKey,
          props: {
            experiences, // Use the updated experiences array
            setExperiences,
          },
        },
      ]);

      setViews((prevViews) => [
        ...prevViews,
        {
          type: ExperienceView,
          key: newKey,
          props: { experiences },
        },
      ]);
    }
    if (section === "Education") {
      setSections((prevSections) => [
        ...prevSections,
        {
          type: Education,
          key: newKey,
          props: {
            educations,
            setEducations,
          },
        },
      ]);

      setViews((prevViews) => [
        ...prevViews,
        {
          type: EducationView,
          key: newKey,
          props: { educations },
        },
      ]);
    }
    if (section === "Projects") {
      setSections((prevSections) => [
        ...prevSections,
        {
          type: Projects,
          key: newKey,
          props: {
            projects,
            setProjects,
          },
        },
      ]);

      setViews((prevViews) => [
        ...prevViews,
        {
          type: ProjectsView,
          key: newKey,
          props: { projects },
        },
      ]);
    }
    if (section === "Certifications") {
      setSections((prevSections) => [
        ...prevSections,
        {
          type: Certifications,
          key: newKey,
          props: {
            certifications,
            setCertifications,
          },
        },
      ]);

      setViews((prevViews) => [
        ...prevViews,
        {
          type: CertificationsView,
          key: newKey,

          props: { certifications },
        },
      ]);
    }
    if (section === "SkillsInterests") {
      setSections((prevSections) => [
        ...prevSections,
        {
          type: SkillsInterests,
          key: newKey,
          props: {
            skills,
            setSkills,
          },
        },
      ]);

      setViews((prevViews) => [
        ...prevViews,
        {
          type: SkillsInterestsView,
          key: newKey,
          props: {
            skills,
          },
        },
      ]);
    }
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
        if (section.type === Experience) {
          return {
            ...section,
            props: {
              ...section.props,
              experiences, // Update with new experiences array
              setExperiences,
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
