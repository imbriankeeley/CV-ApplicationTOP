import CertificationsViewForm from "./forms/CertificationsViewForm.jsx";

export default function CertificationsView({ certifications }) {
  return (
    <div className="experienceContainer">
      <div className="experienceView">
        <h1 className="experienceh1">CERTIFICATIONS</h1>
        <div className="line"></div>
        {certifications.map((certification) => (
          <CertificationsViewForm
            key={certification.id}
            certification={certification}
          />
        ))}
      </div>
    </div>
  );
}
