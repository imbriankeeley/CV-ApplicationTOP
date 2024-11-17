import "../../styles/forms/EducationForm.css";

export default function EducationForm({ education, setEducations }) {
  const updateEducation = (field, value) => {
    setEducations((prevEducations) =>
      prevEducations.map((edu) =>
        edu.id === education.id ? { ...edu, [field]: value } : edu,
      ),
    );
  };
}
