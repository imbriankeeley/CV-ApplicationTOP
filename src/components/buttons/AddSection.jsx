import "../../styles/buttons/AddSection.css";
import { useState } from "react";

export default function AddSection({ addSection }) {
  const [visable, setVisable] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    if (isOpen) {
      setIsOpen(false);
      setTimeout(() => setVisable(false), 400);
    } else {
      setVisable(true);
      setTimeout(() => setIsOpen(true), 10);
    }
  };

  const handleAddSection = (SectionComponent, ViewComponent) => {
    addSection(SectionComponent, ViewComponent);
    setIsOpen(false);
    setVisable(false);
    // setTimeout(() => setVisable(false), 400);
  };

  return (
    <div className="addContainer">
      <div className="addSection">
        <button className="addSectionBtn" onClick={toggleDropdown}>
          Add Section {visable ? "▲" : "▼"}
        </button>
        <div
          className={`addSectionDropdown ${isOpen ? "open" : ""} ${!isOpen && visable ? "closed" : ""}`}
        >
          <button
            className="sectionBtn"
            onClick={() => handleAddSection(Experience, ExperienceView)}
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
      </div>
    </div>
  );
}
