import "../styles/AddSection.css";
import { useState } from "react";

export default function AddSection() {
  const [visable, setVisable] = useState(false);

  const toggleDropdown = () => {
    setVisable(!visable);
  };

  return (
    <div className="addContainer">
      <div className="addSection">
        <button className="addSectionBtn" onClick={toggleDropdown}>
          Add Section {visable ? "▲" : "▼"}
        </button>
        {visable && (
          <div className={`addSectionDropdown ${visable ? "open" : ""}`}>
            <button className="sectionBtn">Skills or Interests</button>
            <button className="sectionBtn">Education</button>
            <button className="sectionBtn">Experience</button>
            <button className="sectionBtn">Projects</button>
            <button className="sectionBtn">Certifications</button>
          </div>
        )}
      </div>
    </div>
  );
}
