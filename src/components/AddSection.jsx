import "../styles/AddSection.css";
import { useState } from "react";
import Experience from "./Experience";
import Education from "./Education";
import Projects from "./Projects";
import SkillsInterests from "./SkillsInterests";
import Certifications from "./Certifications";

export default function AddSection({ addSection }) {
  const [visable, setVisable] = useState(false);

  const toggleDropdown = () => {
    setVisable(!visable);
  };

  const handleAddSection = (SectionComponent) => {
    addSection(SectionComponent);
    setVisable(false);
  };

  return (
    <div className="addContainer">
      <div className="addSection">
        <button className="addSectionBtn" onClick={toggleDropdown}>
          Add Section {visable ? "▲" : "▼"}
        </button>
        {visable && (
          <div className={`addSectionDropdown ${visable ? "open" : ""}`}>
            <button
              className="sectionBtn"
              onClick={() => handleAddSection(Experience)}
            >
              Experience
            </button>
            <button
              className="sectionBtn"
              onClick={() => handleAddSection(Education)}
            >
              Education
            </button>
            <button
              className="sectionBtn"
              onClick={() => handleAddSection(Projects)}
            >
              Projects
            </button>
            <button
              className="sectionBtn"
              onClick={() => handleAddSection(SkillsInterests)}
            >
              Skills or Interests
            </button>
            <button
              className="sectionBtn"
              onClick={() => handleAddSection(Certifications)}
            >
              Certifications
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
