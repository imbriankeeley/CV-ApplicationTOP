import "../styles/components/Education.css";
import CertificationsForm from "../components/forms/CertificationsForm.jsx";
import AddNewForm from "../components/buttons/AddNewForm";

export default function Certifications({ certifications, setCertifications }) {
  const addNewForm = () => {
    const newCertification = {
      id: new Date().getTime(),
      cert: "",
      institute: "",
      date: "",
    };

    setCertifications([...certifications, newCertification]);
  };

  const deleteCertification = (idToDelete) => {
    setCertifications((prevCertifications) =>
      prevCertifications.filter((cert) => cert.id !== idToDelete),
    );
  };

  return (
    <>
      {certifications.map((certification) => (
        <div key={certification.id} className="experienceFormWrapper">
          <CertificationsForm
            key={certification.id}
            certification={certification}
            certifications={certifications}
            setCertifications={setCertifications}
          />
          <button
            className="deleteExperienceBtn"
            onClick={() => deleteCertification(certification.id)}
          >
            Delete
          </button>
        </div>
      ))}
      <AddNewForm form="Certification" onClick={addNewForm} />
    </>
  );
}
