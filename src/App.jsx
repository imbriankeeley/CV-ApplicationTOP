import "./App.css";
import { useState, useEffect } from "react";
import Personal from "./components/Personal.jsx";
import Resume from "./components/Resume.jsx";
import AddSection from "./components/buttons/AddSection.jsx";
import Experience from "./components/Experience.jsx";
import ExperienceView from "./components/views/ExperienceView.jsx";

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

  const addSection = (section) => {
    if (section === "Experience") {
      const newKey = new Date().getTime();

      setSections((prevSections) => [
        ...prevSections,
        {
          type: Experience,
          key: newKey,
          props: {
            experienceId: newKey,
            experiences, // Use the updated experiences array
            setExperiences,
          },
        },
      ]);

      setViews((prevViews) => [
        ...prevViews,
        {
          type: ExperienceView,
          key: experiences[0].id,
          props: experiences[0],
        },
      ]);
    }
  };

  // Update views when experiences change
  useEffect(() => {
    setViews((prevViews) => {
      return prevViews.map((view) => {
        if (view.type === ExperienceView) {
          const experience = experiences.find((exp) => exp.id === view.key);
          if (experience) {
            return {
              ...view,
              props: experience,
            };
          }
        }
        return view;
      });
    });
  }, [experiences]);

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
