import "../styles/Resume.css";
import { useState } from "react";

export default function Experience(experience, setExperience) {
  const [experience, setExperience] = useState("");

  return (
    <div className="experience">
      <form>
        <input
          type="text"
          placeholder="Enter your experience"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
        />
      </form>
    </div>
  );
}
