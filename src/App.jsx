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
  const [company, setCompany] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [accomplishment1, setAccomplishment1] = useState("");
  const [accomplishment2, setAccomplishment2] = useState("");
  const [accomplishment3, setAccomplishment3] = useState("");

  const addSection = (section) => {
    if (section === "Experience") {
      const newKey = new Date().getTime();
      setSections([
        ...sections,
        {
          type: Experience,
          key: newKey,
          props: {
            setTitle: setTitle,
            setCompany: setCompany,
            setDate: setDate,
            setLocation: setLocation,
            setAccomplishment1: setAccomplishment1,
            setAccomplishment2: setAccomplishment2,
            setAccomplishment3: setAccomplishment3,
          },
        },
      ]);
      setViews([
        ...views,
        {
          type: ExperienceView,

          key: newKey,
          props: {
            title: title,
            company: company,
            date: date,
            location: location,
            accomplishment1: accomplishment1,
            accomplishment2: accomplishment2,
            accomplishment3: accomplishment3,
          },
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
          company: company,
          date: date,
          location: location,
          accomplishment1: accomplishment1,
          accomplishment2: accomplishment2,
          accomplishment3: accomplishment3,
        },
      })),
    );
  }, [
    title,
    company,
    date,
    location,
    accomplishment1,
    accomplishment2,
    accomplishment3,
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
