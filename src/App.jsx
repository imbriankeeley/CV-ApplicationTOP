import "./App.css";
import { useState } from "react";
import Personal from "./components/Personal.jsx";
import Resume from "./components/Resume.jsx";
import AddSection from "./components/AddSection.jsx";
import Experience from "./components/Experience.jsx";
import ExperienceView from "./components/ExperienceView.jsx";
import Education from "./components/Education.jsx";
import Projects from "./components/Projects.jsx";
import SkillsInterests from "./components/SkillsInterests.jsx";
import Certifications from "./components/Certifications.jsx";

function App() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [website, setWebsite] = useState("");
  const [sections, setSections] = useState([]);
  const [views, setViews] = useState([]);
  const [experience, setExperience] = useState([]);

  const addSection = (section, view) => {
    setSections([...sections, section]);
    setViews([...views, view]);
  };

  return (
    <>
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
      {sections.map((SectionComponent, index) => (
        <SectionComponent key={index} />
      ))}
      <AddSection addSection={addSection} />
      <Resume
        name={name}
        address={address}
        email={email}
        number={number}
        website={website}
        experience={experience}
        views={views}
      />
    </>
  );
}
export default App;
