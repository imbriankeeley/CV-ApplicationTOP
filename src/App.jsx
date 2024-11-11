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

  // Experience state
  const [title, setTitle] = useState("");

  const addSection = (section) => {
    if (section === "Experience") {
      const newKey = new Date().getTime();
      setSections([
        ...sections,
        {
          type: Experience,
          props: {
            key: newKey,
            title: title,
            setTitle: setTitle,
          },
        },
      ]);
      setViews([
        ...views,
        {
          type: ExperienceView,
          props: { key: newKey, title: title },
        },
      ]);
    }
    // if (section === "Education") {
    //   setSections([
    //     ...sections,
    //     { type: Education, props: { key: new Date().getTime() } },
    //   ]);
    // }
    // if (section === "Projects") {
    //   setSections([
    //     ...sections,
    //     { type: Projects, props: { key: new Date().getTime() } },
    //   ]);
    // }
    // if (section === "SkillsInterests") {
    //   setSections([
    //     ...sections,
    //     { type: SkillsInterests, props: { key: new Date().getTime() } },
    //   ]);
    // }
    // if (section === "Certifications") {
    //   setSections([
    //     ...sections,
    //     { type: Certifications, props: { key: new Date().getTime() } },
    //   ]);
    // }
    // setSections([...sections, section]);

    // setViews([...views, view]);
  };

  useEffect(() => {
    setViews((prevViews) =>
      prevViews.map((view) => ({
        ...view,
        props: {
          ...view.props,
          title: title,
        },
      })),
    );
  }, [title]);

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
        {sections.map((section, index) => {
          const SectionComponent = section.type;
          return <SectionComponent key={index} {...section.props} />;
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
