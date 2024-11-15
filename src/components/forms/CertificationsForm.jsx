import "../../styles/forms/ExperienceForm.css";

export default function CertificationsForm({
  certification,
  setCertifications,
}) {
  const updateCertification = (field, value) => {
    setCertifications((prevCertifications) =>
      prevCertifications.map((cert) =>
        cert.id === certification.id ? { ...cert, [field]: value } : cert,
      ),
    );
  };
  return (
    <form className="experienceForm">
      <div className="Container">
        <label htmlFor={`certification-${certification.id}`}>
          Certification
        </label>
        <input
          id={`certification-${certification.id}`}
          defaultValue={certification.cert}
          placeholder="Linux Professional Institute"
          onChange={(e) => updateCertification("cert", e.target.value)}
        />
      </div>

      <div className="Container">
        <label htmlFor={`institute-${certification.id}`}>Institute</label>
        <input
          id={`institute-${certification.id}`}
          defaultValue={certification.institute}
          placeholder="Pearson."
          onChange={(e) => updateCertification("institute", e.target.value)}
        />
      </div>

      <div className="Container">
        <label htmlFor={`date-${certification.id}`}>Date</label>
        <input
          id={`date-${certification.id}`}
          defaultValue={certification.date}
          placeholder="May 2024"
          onChange={(e) => updateCertification("date", e.target.value)}
        />
      </div>
    </form>
  );
}
