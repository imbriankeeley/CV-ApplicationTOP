import "../../styles/buttons/AddSection.css";
import { useState } from "react";

export default function AddSection({ addSection }) {
  const [visable, setVisable] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [sections, setSections] = useState([
    "Experience",
    "Education",
    "Projects",
    "SkillsInterests",
    "Certifications",
  ]);

  const toggleDropdown = () => {
    if (isOpen) {
      setIsOpen(false);
      setTimeout(() => setVisable(false), 400);
    } else {
      setVisable(true);
      setTimeout(() => setIsOpen(true), 10);
    }
  };

  const handleAddSection = (section) => {
    addSection(section);
    setSections(sections.filter((sec) => sec !== section));
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
          {sections.map((section) => (
            <button
              key={section}
              className="sectionBtn"
              onClick={() => handleAddSection(section)}
            >
              {section}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
